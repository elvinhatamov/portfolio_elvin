# 🌐 Custom Domain Setup Guide for AWS Amplify

## Your Current Status: ✅ Amplify App Working!
**Live URL**: https://main.d3mmgftbkz82ce.amplifyapp.com

---

## 🎯 **Goal: Add elvinhatamov.com Custom Domain**

### **Benefits of Custom Domain:**
- ✅ Professional appearance for job applications
- ✅ Better branding and memorability  
- ✅ SEO benefits
- ✅ Shows you understand DNS and domain management

---

## 📋 **Step-by-Step Custom Domain Setup:**

### **Step 1: Domain Registration (if needed)**

If you don't have `elvinhatamov.com` yet:

**Recommended Registrars:**
- **Namecheap** - $8-12/year, great DNS management
- **Google Domains** (now Squarespace) - $12/year, simple interface
- **Cloudflare** - $8-10/year, best for developers
- **GoDaddy** - $12-15/year, popular but more expensive

### **Step 2: AWS Amplify Domain Configuration**

1. **AWS Amplify Console** → Your app → **Domain management**
2. **Add domain** → Enter `elvinhatamov.com`
3. **Configure subdomains**:
   - `elvinhatamov.com` → `main` branch
   - `www.elvinhatamov.com` → `main` branch
4. **Save configuration**

### **Step 3: DNS Records Setup**

AWS will provide DNS records. Add these to your domain registrar:

#### **Required DNS Records:**
```
# SSL Certificate Verification (temporary)
Type: CNAME
Name: _acme-challenge.elvinhatamov.com
Value: [AWS provided value]

Type: CNAME
Name: _acme-challenge.www.elvinhatamov.com  
Value: [AWS provided value]

# Domain Pointing (permanent)
Type: CNAME
Name: www
Value: main.d3mmgftbkz82ce.amplifyapp.com

Type: A or ALIAS
Name: @ (root domain)
Value: [AWS provided IP or alias]
```

---

## 🔧 **DNS Setup by Registrar:**

### **Namecheap:**
1. **Dashboard** → **Domain List** → **Manage**
2. **Advanced DNS** tab
3. **Add New Record** for each DNS entry
4. **TTL**: Set to 300 (5 minutes) for faster updates

### **GoDaddy:**
1. **My Products** → **DNS** → **Manage Zones**
2. **Add** records in DNS Management
3. **TTL**: Set to 600 (10 minutes)

### **Cloudflare:**
1. **DNS** → **Records**
2. **Add record** for each entry
3. **Proxy status**: Turn OFF (gray cloud) for CNAME records

### **Google Domains/Squarespace:**
1. **DNS** → **Custom records**
2. **Create new record** for each entry
3. **TTL**: 5 minutes for testing

---

## ⏱️ **Timeline & Status Checking:**

### **What to Expect:**
- **DNS Propagation**: 1-6 hours (can take up to 48 hours)
- **SSL Certificate**: AWS automatically provisions (30 minutes after DNS)
- **Full Setup**: Usually complete within 2-4 hours

### **Check Status:**
1. **AWS Amplify Console**: Domain status will show "Available"
2. **DNS Propagation**: Use [whatsmydns.net](https://whatsmydns.net)
3. **SSL Certificate**: Check for green lock icon

---

## 🎯 **Professional Tips:**

### **SEO Optimization:**
- **Redirect**: www → non-www (or vice versa) for consistency
- **HTTPS**: AWS Amplify automatically provides SSL
- **Sitemap**: Consider adding `/sitemap.xml` later

### **Performance:**
- **CloudFront**: Amplify includes global CDN
- **Caching**: Optimized automatically
- **Compression**: Gzip enabled by default

### **Monitoring:**
- **Custom metrics**: Available in Amplify console
- **Real User Monitoring**: Built-in performance tracking
- **Error tracking**: Automatic error detection

---

## 🚀 **Next Steps After Domain Setup:**

1. **Test thoroughly**: Check all pages and functionality
2. **Update social media**: LinkedIn, GitHub profile links
3. **Email signature**: Add your new professional URL
4. **Resume**: Update with custom domain
5. **SEO**: Submit to Google Search Console

---

## 🛟 **Troubleshooting:**

### **Common Issues:**
- **DNS not propagating**: Wait longer, check TTL values
- **SSL certificate pending**: Ensure DNS records are correct
- **404 errors**: Check domain pointing to correct Amplify app

### **Support Resources:**
- **AWS Support**: Available through AWS Console
- **DNS Tools**: Use dig, nslookup, or online checkers
- **Community**: AWS Amplify Discord/Forums

---

## 🎉 **Success Metrics:**

Your custom domain setup is complete when:
- ✅ `elvinhatamov.com` loads your portfolio
- ✅ `www.elvinhatamov.com` works
- ✅ SSL certificate shows green lock
- ✅ All pages and functionality work
- ✅ Fast loading globally (CDN working)

**This professionally showcases your cloud engineering and DevOps skills to potential employers!** 🌟
