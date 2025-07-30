# AWS S3 Upload Script for Portfolio
# Make sure AWS CLI is installed and configured first

# Build the project
Write-Host "Building React portfolio..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful! Uploading to S3..." -ForegroundColor Green
    
    # Replace 'elvin-hatamov-portfolio' with your actual bucket name
    $bucketName = "elvin-hatamov-portfolio"
    
    # Sync build folder to S3
    aws s3 sync ./build s3://$bucketName --delete
    
    # Configure static website hosting
    aws s3 website s3://$bucketName --index-document index.html --error-document index.html
    
    Write-Host "Deployment complete!" -ForegroundColor Green
    Write-Host "Your portfolio is live at: http://$bucketName.s3-website-us-east-1.amazonaws.com" -ForegroundColor Yellow
    Write-Host "Note: Replace 'us-east-1' with your actual region" -ForegroundColor Gray
} else {
    Write-Host "Build failed! Please fix errors and try again." -ForegroundColor Red
}
