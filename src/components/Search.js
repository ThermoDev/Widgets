import React, { useEffect, useState } from 'react';

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('hi!');
  }, [term]);

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
