const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);

  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

const fetchJSON = url => fetch(url)
  .then(checkStatus)
  .then(parseJSON);

const base = 'https://hacker-news.firebaseio.com/v0';

const api = url => fetchJSON(`${base}${url}`);

export default api;
