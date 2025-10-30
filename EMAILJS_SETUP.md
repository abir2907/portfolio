# EmailJS Setup Guide

The contact form uses EmailJS to send emails directly from the website without a backend server.

## Setup Steps

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy the **Service ID** (e.g., `service_abc1234`)

### 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save and copy the **Template ID** (e.g., `template_xyz5678`)

### 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123XYZ456`)

### 5. Configure Environment Variables

1. Create a `.env` file in the project root (same directory as package.json)
2. Add your EmailJS credentials:

```env
VITE_EMAIL_SERVICE_ID=your_service_id_here
VITE_EMAIL_TEMPLATE_ID=your_template_id_here
VITE_EMAIL_PUBLIC_KEY=your_public_key_here
```

**Important:** Replace `your_service_id_here`, `your_template_id_here`, and `your_public_key_here` with your actual values from EmailJS.

### 6. Template Variable Names

Make sure your EmailJS template uses these variable names:
- `{{from_name}}` - maps to the form's `name` field
- `{{email}}` - maps to the form's `email` field
- `{{message}}` - maps to the form's `message` field

### 7. Test the Form

1. Restart your development server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Submit the form
4. Check your email inbox (the one connected to EmailJS)

## Free Plan Limits

EmailJS free plan includes:
- ✅ 200 emails per month
- ✅ 2 email templates
- ✅ 1 email service

This is more than enough for a portfolio website!

## Security Notes

- ✅ `.env` file is already in `.gitignore` (never commit it!)
- ✅ Environment variables are only accessible during build time
- ✅ The public key is safe to expose (it's meant to be public)
- ✅ EmailJS has built-in rate limiting and spam protection

## Troubleshooting

### Form doesn't send emails
1. Check browser console for errors
2. Verify all environment variables are set correctly
3. Make sure you restarted the dev server after adding `.env`
4. Check EmailJS dashboard for any service connection issues

### Emails going to spam
1. In EmailJS dashboard, verify your email service
2. Add your portfolio domain to trusted senders
3. Consider using a custom domain email for better deliverability

### Rate limit exceeded
1. Free plan has 200 emails/month limit
2. Upgrade to a paid plan if needed
3. Add client-side rate limiting to prevent spam

## Need Help?

- 📚 [EmailJS Documentation](https://www.emailjs.com/docs/)
- 💬 [EmailJS Support](https://www.emailjs.com/support/)

---

**Note:** After deployment, the contact form will work exactly the same way. No additional configuration needed!
