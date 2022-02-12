import axios from 'axios';

const URL = process.env.REACT_APP_CURRENCY_URL;

export async function fetchCurrency() {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
