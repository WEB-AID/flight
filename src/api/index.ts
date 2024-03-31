import Cookies from 'js-cookie';

export default async function getSearchId(): Promise<void> {
  return fetch('https://aviasales-test-api.kata.academy/search')
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then(({ searchId }) => {
      if (!Cookies.get('searchId')) {
        Cookies.set('searchId', `${searchId}`);
      }
    })
    .catch((err) => console.log(err));
}
