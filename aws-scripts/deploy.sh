#!/bin/bash

# AWS S3 + CloudFront Deployment Script for Elvin Hatamov Portfolio
# This script builds and deploys your React portfolio to AWS

echo "🚀 Starting AWS deployment for Elvin Hatamov Portfolio..."

# Configuration
BUCKET_NAME="elvinhatamov.com"
REGION="us-east-1"
CLOUDFRONT_DISTRIBUTION_ID="" # Add your distribution ID here after creating

# Step 1: Build the React app
echo "📦 Building React application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix build errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"

# Step 2: Create S3 bucket (only if it doesn't exist)
echo "🪣 Checking if S3 bucket exists..."
aws s3api head-bucket --bucket $BUCKET_NAME 2>/dev/null

if [ $? -ne 0 ]; then
    echo "Creating S3 bucket: $BUCKET_NAME"
    aws s3 mb s3://$BUCKET_NAME --region $REGION
    
    # Configure for static website hosting
    aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document index.html
    
    # Apply bucket policy
    aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://aws-scripts/bucket-policy.json
    
    echo "✅ S3 bucket created and configured!"
else
    echo "✅ S3 bucket already exists!"
fi

# Step 3: Sync files to S3
echo "📤 Uploading files to S3..."
aws s3 sync build/ s3://$BUCKET_NAME --delete --exclude "*.DS_Store"

if [ $? -eq 0 ]; then
    echo "✅ Files uploaded successfully!"
else
    echo "❌ Upload failed!"
    exit 1
fi

# Step 4: Invalidate CloudFront cache (if distribution ID is provided)
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
    echo "✅ Cache invalidation started!"
else
    echo "⚠️  CloudFront distribution ID not set. Cache invalidation skipped."
    echo "   Add your distribution ID to this script for automatic cache invalidation."
fi

echo ""
echo "🎉 Deployment completed successfully!"
echo "📍 Your portfolio is now live on AWS!"
echo ""
echo "Next steps:"
echo "1. If this is your first deployment, create a CloudFront distribution"
echo "2. Configure your domain DNS to point to CloudFront"
echo "3. Add the CloudFront distribution ID to this script for cache invalidation"
echo ""
echo "S3 Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
