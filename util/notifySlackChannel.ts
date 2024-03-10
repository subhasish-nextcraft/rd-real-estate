'use server';

const channelUrls = {
  leads: process.env.WEBHOOK_LEADS_CHANNEL_URL!,
  candidates: process.env.WEBHOOK_CANDIDATES_CHANNEL_URL!,
};

const notifySlackChannel = async (
  text: string,
  channel: 'candidates' | 'leads',
) => {
  try {
    const response = await fetch(channelUrls[channel], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    return response.ok;
  } catch (err) {
    console.log('err', err);
    return JSON.stringify(err);
  }
};

export default notifySlackChannel;
