import React, { useEffect, useState } from 'react';
import axios from 'axios';

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
    };

    search();
  }, [term]);

  // useEffect second argument
  // ..nothing..  : Run at initial render -> Run after every rerender
  // []           : Run at initial render
  // [date]       : Run at initial render -> Run after every rerender if data has changed since last rerender

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
