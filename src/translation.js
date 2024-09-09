// translation.js
import axios from 'axios';

const API_URL = 'https://libretranslate.de/translate';

const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        q: text,
        target: targetLanguage,
        source: 'auto',
        format: 'text'
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    console.log('API Response:', response.data); // Log the API response

    // Check for translatedText in response
    if (response.data && response.data.translatedText) {
      return response.data.translatedText;
    } else {
      console.error('No translated text found in response:', response.data);
      return 'Translation failed';
    }
  } catch (error) {
    console.error('Error translating text:', error.message);
    return 'Translation error';
  }
};

export default translateText;
