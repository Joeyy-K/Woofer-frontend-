import { API_URL } from "../url/url";

export const fetchVeterinaries = async () => {
  try {
    const response = await fetch(`${API_URL}veterinaries/`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Failed to fetch data');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const logoutUser = async () => {
  const response = await fetch(`${API_URL}/user/logout/`, { method: 'POST' });
  if (response.ok) {
    return true;
  } else {
    console.error('Logout failed');
    return false;
  }
};
