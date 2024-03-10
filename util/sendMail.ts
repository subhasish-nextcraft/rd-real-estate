'use server';

import emailTemplates from './emailTemplates';

type PostDataProps = {
  clientName: string;
  clientMail: string;
  details: string;
  template: 'lead-submitted' | 'received-job-application';
};

const postData = ({
  clientName,
  clientMail,
  details,
  template,
}: PostDataProps) => {
  const foundTemplate = emailTemplates({ template });

  return {
    sender: {
      name: 'Dailyrush Team',
      email: 'subhasish.nextcraft@gmail.com',
    },
    to: [
      {
        email: clientMail,
        name: clientName,
      },
    ],
    subject: foundTemplate?.header,
    htmlContent: `<html><body style="font-size:1rem">${foundTemplate?.content({
      clientName,
      details,
    })}<p style="margin:0">Sincerely,</p>
    <p style="margin:0">Subhasish Das</p>
    <p style="margin:0">Dailyrush developers team</p>
    <p style="margin:0"><a href="https://nextcraft.dev" target="_blank">nextcraft.dev</a></p>
    <a href="https://nextcraft.dev" target="_blank">
      <div style="display:flex; align-items:center; margin-top:1.5rem; gap:0.5rem">
        <img
          style="height:3rem; width:3.25rem; border-radius:20%; margin-right:0.5rem"
          src="https://nextcraft-site-git-landing-page-subhasish-das-projects.vercel.app/global/logo.png"
          alt=""
        />
        <img
          src="https://nextcraft-site-git-landing-page-subhasish-das-projects.vercel.app/global/logo-text-pry.png"
          alt="Dailyrush"
          style="height:2.5rem; margin-top:0.75rem"
        />
      </div>
    </a>
    <p style="color:#fff">${Date.now()}</p></body></html>`,
  };
};

async function sendEmail({
  clientName,
  clientMail,
  details,
  template,
}: PostDataProps) {
  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify(
        postData({
          clientName,
          clientMail,
          details,
          template,
        }),
      ),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default sendEmail;
