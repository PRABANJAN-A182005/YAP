function createWelcomeEmailHTML(name, clientURL) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to YAP!</title>
</head>
<body style="margin:0; padding:0; background-color:#0f172a; font-family:Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f172a; padding:20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#020617; border-radius:12px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:30px; text-align:center; background:linear-gradient(135deg,#22d3ee,#6366f1);">
              <h1 style="margin:0; font-size:32px; color:#ffffff; letter-spacing:1px;">
                YAP!
              </h1>
              <p style="margin:8px 0 0; color:#e0e7ff; font-size:14px;">
                Say it. Share it. YAP it.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#e5e7eb;">
              <h2 style="margin-top:0; color:#f8fafc;">
                Hey ${name} 👋
              </h2>

              <p style="font-size:15px; line-height:1.6;">
                Welcome to <strong>YAP!</strong> — your new favorite place to chat, connect,
                and share moments instantly with people who matter.
              </p>

              <p style="font-size:15px; line-height:1.6;">
                🚀 Start conversations in real time  
                <br/>🔒 Enjoy secure & smooth messaging  
                <br/>💬 Express freely — no limits, just YAP!
              </p>

              <!-- CTA Button -->
              <div style="text-align:center; margin:35px 0;">
                <a href="${clientURL}" 
                   style="
                     background:linear-gradient(135deg,#22d3ee,#6366f1);
                     color:#ffffff;
                     text-decoration:none;
                     padding:14px 32px;
                     border-radius:30px;
                     font-size:16px;
                     font-weight:bold;
                     display:inline-block;
                   ">
                  Start Yapping 🚀
                </a>
              </div>

              <p style="font-size:14px; color:#c7d2fe;">
                If the button doesn’t work, copy & paste this link:
                <br/>
                <a href="${clientURL}" style="color:#38bdf8; word-break:break-all;">
                  ${clientURL}
                </a>
              </p>

              <p style="font-size:14px; margin-top:30px;">
                Cheers, <br/>
                <strong>The YAP! Team 💙</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px; text-align:center; background:#020617; color:#94a3b8; font-size:12px;">
              © ${new Date().getFullYear()} YAP! • All rights reserved
              <br/>
              Made for conversations that matter.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`;
}
export { createWelcomeEmailHTML };