import React, { useState, useEffect } from 'react'

export const CSRFToken = () => {
    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue || '';  // Return an empty string if the cookie doesn't exist
    }    
    
    const [csrftoken, setcsrftoken] = useState(() => getCookie('csrftoken') || '');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch('http://127.0.0.1:4000/csrf/', {
                    method: 'GET',
                    credentials: 'include', // include cookies
                });
            } catch (err) {
    
            }
        };
    
        fetchData();
        setcsrftoken(getCookie('csrftoken'));
    });    

  return (
    <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
  )
}

