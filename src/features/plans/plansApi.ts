import { REST } from '@/constants/rest';
import axios from 'axios';

/**
 * This function sends a GET request to the server to get plans.
 * @returns the response from the server
 */
const getPlans = async () => {
  await axios.get(REST.plans.get, { withCredentials: true });
};

export const PLANS_API = {
  getPlans,
};
