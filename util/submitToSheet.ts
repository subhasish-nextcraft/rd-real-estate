'use server';

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

type Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const months: Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const sheetIDs = {
  leads: process.env.LEADS_SHEETS_WORKBOOK_ID!,
  candidates: process.env.CANDIDATES_SHEETS_WORKBOOK_ID!,
};

type Props = {
  name: string;
  email: string;
  details: string;
  sheetID: keyof typeof sheetIDs;
};

const submitToSheet = async ({
  name, email, details, sheetID,
}: Props) => {
  try {
    const serviceAccountAuth = new JWT({
      // env var values here are copied from service account credentials generated by google
      // see "Authentication" section in docs for more info
      email: process.env.GOOGLE_LEADS_PROJECT_EMAIL,
      key: process.env.SHEETS_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(sheetIDs[sheetID], serviceAccountAuth);

    await doc.loadInfo(); // loads document properties and worksheets

    const today = new Date();

    const sheet = doc.sheetsByTitle[months[today.getMonth()]];
    const addedRow = await sheet.addRow({
      timestamp: Date.now(),
      name,
      email,
      details,
    });

    console.log('addedRow', addedRow);
  } catch (err) {
    console.log('err', err);
  }
};

export default submitToSheet;
