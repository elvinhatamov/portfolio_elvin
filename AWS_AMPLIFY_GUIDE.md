# AWS Amplify Deployment Guide (Easiest Option)

AWS Amplify is the easiest way to deploy your React portfolio with built-in CI/CD.

## 🚀 Quick Setup Steps:

### 1. Go to AWS Amplify Console
- Navigate to: https://console.aws.amazon.com/amplify/
- Click "New app" → "Host web app"

### 2. Connect Your GitHub Repository
- Choose "GitHub" as source
- Authorize AWS Amplify to access your GitHub
- Select repository: `elvinhatamov/portfolio_elvin`
- Select branch: `main`

### 3. Configure Build Settings
Amplify will auto-detect your React app, but verify these settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### 4. Environment Variables (if needed)
- Add any environment variables your app needs
- For this portfolio, none are typically required

### 5. Deploy
- Click "Save and deploy"
- Amplify will automatically build and deploy your app
- You'll get a temporary URL like: `https://main.d1234567890.amplifyapp.com`

### 6. Add Custom Domain
- In your Amplify app, go to "Domain management"
- Click "Add domain"
- Enter: `elvinhatamov.com`
- Amplify will provide DNS settings
- Update your domain registrar's DNS settings
- SSL certificate is automatically provided

## 🔄 Automatic CI/CD
Once set up, every push to your `main` branch will automatically:
1. Trigger a new build
2. Run tests (if any)
3. Deploy to production
4. Update your live site

## ✅ Benefits of Amplify:
- **Zero configuration** for React apps
- **Automatic CI/CD** from GitHub
- **Free SSL certificate**
- **Global CDN** included
- **Branch deployments** for testing
- **Easy domain management**
- **Build logs** and monitoring

## 💰 Pricing:
- **Free tier**: 1,000 build minutes/month, 15GB served/month
- **Paid**: $0.01 per build minute, $0.15 per GB served
- Your portfolio will likely stay within free tier limits

## 🎯 Perfect for Your Profile:
This setup showcases your ability to:
- Deploy modern web applications to AWS
- Set up CI/CD pipelines
- Use AWS managed services
- Configure custom domains with SSL

## Next Steps:
1. Go to AWS Amplify Console
2. Follow the setup wizard
3. Your portfolio will be live in ~5-10 minutes!

This is the fastest way to get your portfolio on AWS with professional DevOps practices!
