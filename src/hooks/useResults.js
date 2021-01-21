import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchYelp = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'new york',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Somehting went wrong');
    }
  };

  // invoke searchYelp when component renders
  useEffect(() => {
    searchYelp('pasta');
  }, []);

  return [searchYelp, results, errorMessage];
};
