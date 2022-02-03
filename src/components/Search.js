import React, { useEffect, useState } from 'react';
import axios from 'axios';

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming

const Search = () => {
  const [term, setTerm] = useState('Programming');
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    // Check for initial render
    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      // Cleanup function, invoked in the next rerender
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  // useEffect second argument
  // ..nothing..  : Run at initial render -> Run after every rerender
  // []           : Run at initial render
  // [data]       : Run at initial render -> Run after every rerender if data has changed since last rerender

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
