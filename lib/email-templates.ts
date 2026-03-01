export const generateEmailTemplate = ({
  title,
  message,
  buttonText,
  buttonLink,
  previewText,
}: {
  title: string;
  message: string;
  buttonText?: string;
  buttonLink?: string;
  previewText?: string;
}) => {
  const primaryColor = "#e7c9a5";
  const darkBackgroundColor = "#12141d";
  const textColor = "#f8f8ff";
  const mutedTextColor = "#8d8d8d";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      background-color: ${darkBackgroundColor};
      color: ${textColor};
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #1a1d26;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .header {
      padding: 40px 20px;
      text-align: center;
      background: linear-gradient(180deg, #232839 0%, #12141d 100%);
    }
    .logo {
      font-size: 24px;
      font-weight: bold;
      color: ${primaryColor};
      text-decoration: none;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .content {
      padding: 40px;
      line-height: 1.6;
    }
    .title {
      font-size: 28px;
      font-weight: 700;
      color: ${primaryColor};
      margin-bottom: 24px;
      text-align: center;
    }
    .text {
      font-size: 16px;
      color: ${textColor};
      margin-bottom: 30px;
      text-align: center;
    }
    .button-container {
      text-align: center;
      margin-top: 20px;
    }
    .button {
      background-color: ${primaryColor};
      color: #16191e !important;
      padding: 16px 32px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 700;
      display: inline-block;
      transition: all 0.3s ease;
    }
    .footer {
      padding: 30px;
      text-align: center;
      font-size: 14px;
      color: ${mutedTextColor};
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    .preview-text {
      display: none;
      font-size: 1px;
      color: ${darkBackgroundColor};
      line-height: 1px;
      max-height: 0px;
      max-width: 0px;
      opacity: 0;
      overflow: hidden;
    }
  </style>
</head>
<body>
  ${previewText ? `<div class="preview-text">${previewText}</div>` : ""}
  <div class="container">
    <div class="header">
      <a href="https://yahya-elmoshneb.com" class="logo">LUMINA</a>
    </div>
    <div class="content">
      <h1 class="title">${title}</h1>
      <p class="text">${message}</p>
      ${
        buttonText && buttonLink
          ? `
        <div class="button-container">
          <a href="${buttonLink}" class="button">${buttonText}</a>
        </div>
      `
          : ""
      }
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Lumina Knowledge Hub. All rights reserved.</p>
      <p>If you have any questions, feel free to reply to this email.</p>
    </div>
  </div>
</body>
</html>
  `;
};

export const welcomeEmail = (fullName: string) => {
  return generateEmailTemplate({
    title: "Welcome to Lumina!",
    message: `Hey <strong>${fullName}</strong>, we're thrilled to have you here. Lumina is your ultimate knowledge hub, designed to help you organize, explore, and share insights like never before.`,
    buttonText: "Start Exploring",
    buttonLink: "https://lumina.yahya-elmoshneb.com",
    previewText: "Welcome to the future of knowledge management!",
  });
};

export const reEngagementEmail = (fullName: string) => {
  return generateEmailTemplate({
    title: "We Miss You!",
    message: `Hey <strong>${fullName}</strong>, it's been a while since we last saw you. We've added several new features and improvements that we think you'll love. Why not come back and see what's new?`,
    buttonText: "Come Back",
    buttonLink: "https://lumina.yahya-elmoshneb.com",
    previewText: "We've missed you! Check out the latest updates.",
  });
};

export const activeUserEmail = (fullName: string) => {
  return generateEmailTemplate({
    title: "You're Doing Great!",
    message: `Hi <strong>${fullName}</strong>, we noticed you've been quite active lately. We love seeing how you're using Lumina to power your knowledge workflow. Keep it up!`,
    buttonText: "Go to Dashboard",
    buttonLink: "https://lumina.yahya-elmoshneb.com",
    previewText: "Keep up the great work on Lumina!",
  });
};
