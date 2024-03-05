import { API_URL } from "../url/url";

export function fetchCSRFToken() {
    fetch(`${API_URL}/csrf/`)
      .then(response => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
}
