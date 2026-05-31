import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

function adminHTML(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  venue: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>New Enquiry — Event Tracker</title>
</head>
<body style="margin:0;padding:0;background:#F7F9F7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F9F7;padding:40px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(90deg,#2B9E7C,#8AC63F);padding:32px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">event</span>
                <span style="display:block;font-size:9px;font-weight:500;color:rgba(255,255,255,0.8);letter-spacing:4px;text-transform:uppercase;margin-top:2px;">TRACKER</span>
              </td>
              <td align="right">
                <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:11px;font-weight:600;padding:6px 14px;border-radius:20px;letter-spacing:1px;text-transform:uppercase;">New Enquiry</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:36px 40px 24px;">
          <p style="margin:0 0 24px;font-size:15px;color:#555555;line-height:1.6;">
            A new enquiry has been submitted via the website contact form. Details below:
          </p>

          <!-- Details table -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1.5px solid #E2EAE2;border-radius:12px;overflow:hidden;">
            ${row('Full Name', data.name)}
            ${row('Company', data.company || '—', true)}
            ${row('Email', `<a href="mailto:${data.email}" style="color:#2B9E7C;text-decoration:none;">${data.email}</a>`)}
            ${row('Phone', `<a href="tel:${data.phone}" style="color:#2B9E7C;text-decoration:none;">${data.phone}</a>`, true)}
            ${row('Service Required', data.service || '—')}
            ${row('Venue', data.venue || '—', true)}
          </table>

          <!-- Message -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;border:1.5px solid #E2EAE2;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#F7F9F7;padding:12px 18px;">
                <span style="font-size:10px;font-weight:700;color:#2B9E7C;text-transform:uppercase;letter-spacing:1.5px;">Message / Requirements</span>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 18px;font-size:14px;color:#2D2D2D;line-height:1.7;">
                ${data.message || '—'}
              </td>
            </tr>
          </table>

          <!-- CTA -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
            <tr>
              <td>
                <a href="mailto:${data.email}" style="display:inline-block;background:linear-gradient(90deg,#2B9E7C,#8AC63F);color:#ffffff;font-size:14px;font-weight:600;padding:14px 28px;border-radius:50px;text-decoration:none;">
                  Reply to ${data.name} →
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#1A1A1A;padding:20px 40px;">
          <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);text-align:center;">
            Event Tracker · Mumbai, Maharashtra · Exhibition &amp; Event Infrastructure
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function row(label: string, value: string, shaded = false) {
  return `
    <tr style="background:${shaded ? '#F7F9F7' : '#ffffff'};">
      <td style="padding:12px 18px;font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;width:38%;border-bottom:1px solid #E2EAE2;">${label}</td>
      <td style="padding:12px 18px;font-size:14px;color:#1A1A1A;border-bottom:1px solid #E2EAE2;">${value}</td>
    </tr>`;
}

function thankYouHTML(name: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Thank You — Event Tracker</title>
</head>
<body style="margin:0;padding:0;background:#F7F9F7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F9F7;padding:40px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

      <!-- Header gradient -->
      <tr>
        <td style="background:linear-gradient(90deg,#2B9E7C,#8AC63F);padding:32px 40px;text-align:center;">
          <span style="font-size:28px;font-weight:800;color:#ffffff;">event</span>
          <span style="display:block;font-size:9px;font-weight:500;color:rgba(255,255,255,0.8);letter-spacing:4px;text-transform:uppercase;margin-top:3px;">TRACKER</span>
        </td>
      </tr>

      <!-- Checkmark -->
      <tr>
        <td align="center" style="padding:36px 40px 8px;">
          <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#2B9E7C,#8AC63F);display:inline-flex;align-items:center;justify-content:center;font-size:28px;color:#fff;line-height:64px;text-align:center;">✓</div>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:16px 40px 36px;text-align:center;">
          <h1 style="margin:0 0 12px;font-size:26px;font-weight:700;color:#1A1A1A;">Thank You, ${name}!</h1>
          <p style="margin:0 0 20px;font-size:15px;color:#555555;line-height:1.7;">
            Your enquiry has been received. Our team will review your requirements and get back to you within <strong style="color:#2B9E7C;">24 hours</strong>.
          </p>

          <!-- Info box -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F9F7;border-radius:12px;border:1.5px solid #E2EAE2;margin-bottom:28px;">
            <tr>
              <td style="padding:20px 24px;text-align:center;">
                <p style="margin:0 0 6px;font-size:13px;color:#888;">In the meantime, reach us directly:</p>
                <a href="tel:+919594422056" style="font-size:16px;font-weight:700;color:#2B9E7C;text-decoration:none;">+91 95944 22056</a>
                <span style="color:#ccc;margin:0 10px;">|</span>
                <a href="mailto:info@eventtracker.in" style="font-size:16px;font-weight:700;color:#2B9E7C;text-decoration:none;">info@eventtracker.in</a>
              </td>
            </tr>
          </table>

          <a href="https://www.eventtracker.in/services" style="display:inline-block;background:linear-gradient(90deg,#2B9E7C,#8AC63F);color:#fff;font-size:14px;font-weight:600;padding:14px 28px;border-radius:50px;text-decoration:none;">
            Explore Our Services →
          </a>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#1A1A1A;padding:20px 40px;">
          <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);text-align:center;">
            Event Tracker · Mumbai, Maharashtra · Exhibition &amp; Event Infrastructure
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, service, venue, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await Promise.all([
      // Admin notification
      transporter.sendMail({
        from: `"Event Tracker Website" <${process.env.FROM_EMAIL}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `New Enquiry from ${name} — Event Tracker`,
        html: adminHTML({ name, company, email, phone, service, venue, message }),
      }),
      // User thank-you
      transporter.sendMail({
        from: `"Event Tracker" <${process.env.FROM_EMAIL}>`,
        to: email,
        subject: 'Thank You for Your Enquiry — Event Tracker',
        html: thankYouHTML(name),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Mail error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
