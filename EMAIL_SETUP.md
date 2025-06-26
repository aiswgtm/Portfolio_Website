# EmailJS Setup Guide for SWGTM Contact Form

This guide will help you set up EmailJS to send contact form messages directly to your email address.

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (since you're using Gmail)
4. Connect your Gmail account (aiswagotom@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template Name:** `contact_form`
**Subject:** `New Contact Form Submission from {{from_name}}`

**Email Body:**
```
New contact form submission received:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Message: {{message}}

---
This message was sent from the SWGTM website contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Your User ID
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (User ID)

### 5. Update the Website Code

Replace the placeholder values in `script.js`:

```javascript
// Line 1: Replace YOUR_EMAILJS_USER_ID with your actual User ID
emailjs.init("YOUR_EMAILJS_USER_ID");

// Line 2: Replace YOUR_SERVICE_ID with your actual Service ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)

// Line 3: Replace YOUR_TEMPLATE_ID with your actual Template ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Example:**
```javascript
emailjs.init("user_abc123def456");
emailjs.send('service_xyz789', 'template_contact_form', templateParams)
```

## 📧 Alternative Setup Options

### Option 1: Formspree (Easier)
If EmailJS seems complex, you can use Formspree:

1. Go to [Formspree.io](https://formspree.io/)
2. Create account and get your form endpoint
3. Replace the form action in `index.html`:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms (If hosting on Netlify)
1. Add `netlify` attribute to your form
2. Deploy to Netlify
3. Forms will be automatically handled

```html
<form id="contact-form" netlify>
```

## 🔧 Testing the Setup

1. Open the website in a browser
2. Fill out the contact form
3. Submit the form
4. Check your email (aiswagotom@gmail.com)
5. You should receive the message

## 🛠️ Troubleshooting

### Common Issues:
- **"Service not found"**: Check your Service ID
- **"Template not found"**: Check your Template ID  
- **"User ID invalid"**: Check your User ID
- **Emails not sending**: Verify Gmail connection in EmailJS

### Debug Mode:
Add this to see detailed logs:
```javascript
emailjs.init("YOUR_USER_ID", {
    debug: true
});
```

## 📞 Support

If you need help setting up EmailJS:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

## ✅ Verification Checklist

- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created
- [ ] User ID copied
- [ ] Service ID copied
- [ ] Template ID copied
- [ ] Code updated in script.js
- [ ] Form tested successfully
- [ ] Email received in inbox

---

**Note:** The free EmailJS plan allows 200 emails per month. For more emails, consider upgrading to a paid plan. 