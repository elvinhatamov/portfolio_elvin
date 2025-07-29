# AWS S3 + CloudFront Deployment Script for Elvin Hatamov Portfolio (PowerShell)
# This script builds and deploys your React portfolio to AWS

Write-Host "🚀 Starting AWS deployment for Elvin Hatamov Portfolio..." -ForegroundColor Green

# Configuration
$BUCKET_NAME = "elvinhatamov.com"
$REGION = "us-east-1"
$CLOUDFRONT_DISTRIBUTION_ID = ""  # Add your distribution ID here after creating

# Step 1: Build the React app
Write-Host "📦 Building React application..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix build errors and try again." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green

# Step 2: Check if AWS CLI is configured
Write-Host "🔧 Checking AWS CLI configuration..." -ForegroundColor Yellow
aws sts get-caller-identity --output text

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ AWS CLI not configured! Please run 'aws configure' first." -ForegroundColor Red
    exit 1
}

# Step 3: Create S3 bucket (only if it doesn't exist)
Write-Host "🪣 Checking if S3 bucket exists..." -ForegroundColor Yellow
aws s3api head-bucket --bucket $BUCKET_NAME 2>$null

if ($LASTEXITCODE -ne 0) {
    Write-Host "Creating S3 bucket: $BUCKET_NAME" -ForegroundColor Yellow
    aws s3 mb s3://$BUCKET_NAME --region $REGION
    
    # Configure for static website hosting
    aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document index.html
    
    # Apply bucket policy
    aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://aws-scripts/bucket-policy.json
    
    Write-Host "✅ S3 bucket created and configured!" -ForegroundColor Green
} else {
    Write-Host "✅ S3 bucket already exists!" -ForegroundColor Green
}

# Step 4: Sync files to S3
Write-Host "📤 Uploading files to S3..." -ForegroundColor Yellow
aws s3 sync build/ s3://$BUCKET_NAME --delete --exclude "*.DS_Store"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Files uploaded successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Upload failed!" -ForegroundColor Red
    exit 1
}

# Step 5: Invalidate CloudFront cache (if distribution ID is provided)
if ($CLOUDFRONT_DISTRIBUTION_ID -ne "") {
    Write-Host "🔄 Invalidating CloudFront cache..." -ForegroundColor Yellow
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
    Write-Host "✅ Cache invalidation started!" -ForegroundColor Green
} else {
    Write-Host "⚠️  CloudFront distribution ID not set. Cache invalidation skipped." -ForegroundColor Yellow
    Write-Host "   Add your distribution ID to this script for automatic cache invalidation." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎉 Deployment completed successfully!" -ForegroundColor Green
Write-Host "📍 Your portfolio is now live on AWS!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. If this is your first deployment, create a CloudFront distribution" -ForegroundColor White
Write-Host "2. Configure your domain DNS to point to CloudFront" -ForegroundColor White
Write-Host "3. Add the CloudFront distribution ID to this script for cache invalidation" -ForegroundColor White
Write-Host ""
Write-Host "S3 Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com" -ForegroundColor Cyan
