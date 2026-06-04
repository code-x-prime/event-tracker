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
<body style="margin:0;padding:0;background:#F4F7F4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F7F4;padding:40px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(43,158,124,0.08);">

      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#2B9E7C,#8AC63F);padding:32px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td valign="middle">
                <img src="https://www.eventtracker.in/logo-w.png" alt="Event Tracker" height="40" style="display:block;height:40px;width:auto;" />
              </td>
              <td align="right" valign="middle">
                <span style="background:rgba(255,255,255,0.18);color:#ffffff;font-size:11px;font-weight:700;padding:6px 14px;border-radius:30px;letter-spacing:1px;text-transform:uppercase;">New Enquiry</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:40px 40px 30px;">
          <h2 style="margin:0 0 16px;font-size:20px;font-weight:700;color:#111827;">Hello Team,</h2>
          <p style="margin:0 0 28px;font-size:15px;color:#4B5563;line-height:1.6;">
            A client has submitted a new enquiry through the contact form on your website. Here are the details:
          </p>

          <!-- Details table -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;border-collapse:separate;">
            ${row('Full Name', data.name)}
            ${row('Company', data.company || '—', true)}
            ${row('Email Address', `<a href="mailto:${data.email}" style="color:#2B9E7C;text-decoration:none;font-weight:600;">${data.email}</a>`)}
            ${row('Phone Number', `<a href="tel:${data.phone}" style="color:#2B9E7C;text-decoration:none;font-weight:600;">${data.phone}</a>`, true)}
            ${row('Service Required', data.service || '—')}
            ${row('Venue Location', data.venue || '—', true)}
          </table>

          <!-- Message -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;border-collapse:separate;background:#F9FAFB;">
            <tr>
              <td style="background:#F3F4F6;padding:12px 20px;border-bottom:1px solid #E5E7EB;">
                <span style="font-size:11px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:1.5px;">Message / Requirements</span>
              </td>
            </tr>
            <tr>
              <td style="padding:20px;font-size:15px;color:#1F2937;line-height:1.7;white-space:pre-line;">${data.message || 'No message provided.'}</td>
            </tr>
          </table>

          <!-- CTA -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
            <tr>
              <td align="center">
                <a href="mailto:${data.email}" style="display:inline-block;background:linear-gradient(90deg,#2B9E7C,#8AC63F);color:#ffffff;font-size:14px;font-weight:700;padding:16px 36px;border-radius:50px;text-decoration:none;box-shadow:0 4px 12px rgba(43,158,124,0.2);">
                  Reply Directly via Email &rarr;
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#111827;padding:24px 40px;text-align:center;">
          <p style="margin:0;font-size:12px;color:#9CA3AF;line-height:1.5;">
            Event Tracker &bull; Mumbai, Maharashtra &bull; Exhibition &amp; Event Infrastructure
          </p>
          <p style="margin:6px 0 0;font-size:11px;color:#6B7280;">
            This email was auto-generated from your website contact form.
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
    <tr style="background:${shaded ? '#F9FAFB' : '#ffffff'};">
      <td style="padding:14px 20px;font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:1px;width:35%;border-bottom:1px solid #E5E7EB;">${label}</td>
      <td style="padding:14px 20px;font-size:14px;color:#1F2937;border-bottom:1px solid #E5E7EB;">${value}</td>
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
<body style="margin:0;padding:0;background:#F4F7F4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F7F4;padding:48px 16px;">
  <tr><td align="center" valign="top">
    <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 12px 40px rgba(43,158,124,0.08);">

      <!-- Header -->
      <tr>
        <td align="center" style="background:linear-gradient(135deg,#2B9E7C,#8AC63F);padding:32px 40px;">
          <img src="https://www.eventtracker.in/logo-w.png" alt="Event Tracker" height="44" style="display:block;height:44px;width:auto;margin:0 auto;" />
        </td>
      </tr>

      <!-- Checkmark -->
      <tr>
        <td align="center" style="padding:40px 40px 10px;">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" valign="middle"
                  width="80" height="80"
                  style="width:80px;height:80px;border-radius:40px;background:linear-gradient(135deg,#2B9E7C,#8AC63F);text-align:center;vertical-align:middle;box-shadow:0 8px 20px rgba(43,158,124,0.2);">
                <span style="font-size:36px;color:#ffffff;line-height:80px;font-weight:700;">&#10003;</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td align="center" style="padding:20px 48px 40px;">
          <h1 style="margin:0 0 16px;font-size:26px;font-weight:800;color:#111827;text-align:center;letter-spacing:-0.5px;">
            Thank You, ${name}!
          </h1>
          <p style="margin:0 0 32px;font-size:15px;color:#4B5563;line-height:1.8;text-align:center;max-width:420px;">
            We have received your details. A representative from our team will review your requirements and get back to you within <strong style="color:#2B9E7C;font-weight:700;">24 hours</strong>.
          </p>

          <!-- Contact box -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;border-radius:14px;overflow:hidden;border:1px solid #E5E7EB;border-collapse:separate;background:#F9FAFB;">
            <tr>
              <td align="center" style="padding:24px;">
                <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:1.5px;">Need immediate assistance?</p>
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="padding:0 16px;border-right:1px solid #E5E7EB;">
                      <a href="tel:+918291906056" style="font-size:15px;font-weight:700;color:#2B9E7C;text-decoration:none;white-space:nowrap;">+91 82919 06056</a>
                    </td>
                    <td align="center" style="padding:0 16px;">
                      <a href="mailto:info@eventtracker.in" style="font-size:15px;font-weight:700;color:#2B9E7C;text-decoration:none;white-space:nowrap;">info@eventtracker.in</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- CTA button -->
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td align="center">
                <a href="https://www.eventtracker.in/services"
                   style="display:inline-block;padding:16px 36px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:50px;background:linear-gradient(90deg,#2B9E7C,#8AC63F);box-shadow:0 4px 12px rgba(43,158,124,0.2);letter-spacing:0.3px;">
                  Explore Our Services &rarr;
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Divider -->
      <tr>
        <td style="padding:0 48px;">
          <div style="height:1px;background:#E5E7EB;"></div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td align="center" style="background:#111827;padding:24px 40px;">
          <p style="margin:0;font-size:12px;color:#9CA3AF;text-align:center;line-height:1.5;">
            Event Tracker &bull; Mumbai, Maharashtra &bull; Exhibition &amp; Event Infrastructure
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
