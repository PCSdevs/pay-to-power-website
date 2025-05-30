interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  deviceCount: number;
  plan: 'Standard' | 'Pro';
  notes?: string;
}

export const submitToGoogleSheet = async (data: FormData): Promise<boolean> => {
  // Google Sheets web app URL
  const sheetUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
  
  try {
    const response = await fetch(sheetUrl, {
      method: 'POST',
      mode: 'no-cors', // Important for CORS issues with Google Scripts
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    // Since 'no-cors' doesn't give us response data, we assume success
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};

// Note: To properly connect to Google Sheets, you would need to set up a Google Apps Script
// that processes the form data and adds it to your spreadsheet. The script would expose a web app URL
// that you would replace 'YOUR_SCRIPT_ID' with above.
