'use server';

import notifySlackChannel from './notifySlackChannel';
import sendEmail from './sendMail';
import submitToSheet from './submitToSheet';

type Props = {
  name: string;
  email: string;
  resume: string;
};

const handleCandidateSubmit = ({ name, email, resume }: Props) => {
  Promise.allSettled([
    submitToSheet({
      name,
      email,
      details: resume,
      sheetID: 'candidates',
    }),
    sendEmail({
      clientName: name,
      clientMail: email,
      details: resume,
      template: 'received-job-application',
    }),
    notifySlackChannel(
      `${Date.now()}, name: ${name}, email: ${email}, resume: ${resume}`,
      'candidates',
    ),
  ]);
};

export default handleCandidateSubmit;
