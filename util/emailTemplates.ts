const emailTemplates = ({
  template,
}: {
  template: 'lead-submitted' | 'received-job-application';
}) => {
  switch (template) {
    case 'lead-submitted':
      return {
        header: 'Confirming Your Web Development details - Dailyrush',
        content: ({
          clientName,
          details,
        }: LeadSubmissionTemplateProps) => `<p>Hello ${
          clientName.split(' ')[0]
        },</p><p>Thanks for sharing your web development details! We appreciate you taking the time to share your vision with us, and we're excited to learn more about your project.</p>
      ${
  details
        && `<p>We've received the following details you provided,</p>
        <p><em>${details
    .split('\n')
    .map(
      (item) => `<p style="margin-top:0.125rem; margin-bottom:0.125rem">${item}</p>`,
    )
    .join(
      '',
    )}</em></p><p style="margin-top:1rem">If there are any discrepancies or missing information in our understanding of your needs, please don't hesitate to let us know.</p>`
}
        <p><b>We will be in touch with you shortly to schedule a meeting to discuss your project in detail.</b></p>
        <p>In the meantime, should you have any questions or wish to provide any additional information, please feel free to reach out to us at subhasish.nextcraft@gmail.com</p>
        <p>We look forward to collaborating with you to bring your business to life!</p>`,
      };

    case 'received-job-application':
      return {
        header: 'Thank You for applying at Dailyrush',
        content: ({ clientName }: LeadSubmissionTemplateProps) => `<p>Hello ${
          clientName.split(' ')[0]
        },</p><p>Thank you for applying to Dailyrush. We appreciate the time and effort you invested in submitting your application.</p>
        <p><b>Your application is now in the hands of our dedicated Human Resources team, who will carefully review your qualifications and experience. We understand the importance of this process to you, and we assure you that your application will be given the attention it deserves.
        </b></p>
        <p>Please be patient as our team works diligently to assess each candidate thoroughly. We will contact you soon regarding the status of your application. In the meantime, if there are any significant updates or if we require additional information, we will reach out to you promptly.</p>
        <p>We value your interest in joining our team and look forward to the possibility of working together. If you have any questions or need further assistance, feel free to reach out to our HR department at subhasish.Dailyrush@gmail.com</p>
        <p>Best Regards,</p>`,
      };

    default:
      return null;
  }
};

export default emailTemplates;

type LeadSubmissionTemplateProps = {
  clientName: string;
  details: string;
};
