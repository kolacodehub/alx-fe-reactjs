import axios from "axios";

/**
 * Fetches user data from GitHub API.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<Object>} - The user data object.
 */
export const fetchUserData = async (username) => {
  // We do NOT use a try/catch block here.
  // We let the error "bubble up" to the component so it can handle the UI changes.
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
