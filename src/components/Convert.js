import React, { useEffect } from 'react';

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log('New language or text')
  }, [language, text])

  return <div></div>;
};

export default Convert;
