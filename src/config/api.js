// libs
import { create } from 'apisauce';

export const api = create({
  baseURL: 'https://614fec1fa706cd00179b732c.mockapi.io',
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});
