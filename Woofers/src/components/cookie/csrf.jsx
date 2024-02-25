import { API_URL } from "../url/url";

export function fetchCSRFToken() {
    fetch(`${API_URL}/csrf/`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
}
