# AWS Deployment Guide for Elvin Hatamov Portfolio

## 🚀 AWS S3 + CloudFront Deployment (Recommended)

This setup will give you:
- **Global CDN** with CloudFront
- **HTTPS** automatically
- **Custom domain** support
- **Cost-effective** hosting
- **High availability**

### Prerequisites:
- AWS Account
- AWS CLI installed and configured
- Your domain (elvinhatamov.com)

---

## Step 1: Create S3 Bucket for Static Website

### Using AWS Console:
1. Go to **S3 Console** → Create Bucket
2. **Bucket name**: `elvinhatamov.com` (must match your domain)
3. **Region**: `us-east-1` (required for CloudFront)
4. **Uncheck** "Block all public access"
5. **Enable** "Static website hosting"
6. **Index document**: `index.html`
7. **Error document**: `index.html` (for React Router)

### Using AWS CLI:
```bash
# Create bucket
aws s3 mb s3://elvinhatamov.com --region us-east-1

# Configure for static website hosting
aws s3 website s3://elvinhatamov.com --index-document index.html --error-document index.html
```

---

## Step 2: Upload Your Build Files

### Manual Upload:
1. Go to S3 bucket → Upload
2. Select all files from `build/` folder
3. Upload to root of bucket

### Using AWS CLI:
```bash
# Sync build folder to S3 bucket
aws s3 sync build/ s3://elvinhatamov.com --delete

# Set public read permissions
aws s3api put-bucket-policy --bucket elvinhatamov.com --policy file://bucket-policy.json
```

---

## Step 3: Create CloudFront Distribution

### Using AWS Console:
1. Go to **CloudFront Console** → Create Distribution
2. **Origin Domain**: Select your S3 bucket
3. **Viewer Protocol Policy**: Redirect HTTP to HTTPS
4. **Custom Error Pages**: 
   - Error Code: 404
   - Response Page Path: /index.html
   - Response Code: 200
5. **Alternate Domain Names**: elvinhatamov.com, www.elvinhatamov.com
6. **SSL Certificate**: Request new certificate via ACM

---

## Step 4: Configure Custom Domain

### Using Route 53:
1. Create **Hosted Zone** for elvinhatamov.com
2. Create **A Record** pointing to CloudFront distribution
3. Create **CNAME** for www subdomain

---

## Step 5: Automated Deployment Script

I'll create deployment scripts for you to easily update your site.

---

## Alternative: AWS Amplify

For easier deployment with built-in CI/CD:

1. Go to **AWS Amplify Console**
2. Connect to your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `build`
4. Add custom domain in Amplify settings

---

## Cost Estimation:
- **S3**: ~$1-5/month (depending on traffic)
- **CloudFront**: ~$1-10/month
- **Route 53**: ~$0.50/month per hosted zone
- **ACM SSL Certificate**: Free

**Total**: ~$3-16/month (very cost-effective!)

---

## Next Steps:
1. Choose deployment method (S3+CloudFront or Amplify)
2. Set up AWS account if not done
3. Follow the step-by-step guide
4. Configure your domain DNS settings

This setup will showcase your AWS skills to potential employers!
