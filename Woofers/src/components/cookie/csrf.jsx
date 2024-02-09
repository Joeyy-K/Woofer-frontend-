export function fetchCSRFToken() {
    fetch('http://127.0.0.1:4000/csrf/')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
}
