import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
  // useState is a hook that comes with React
  // Use array destructuring to fetch elements in an array
  // useState(arg) argument is initial value of this piece of state
  const [activeIndex, setActiveIndex] = useState(null);

  // Equivalent To:
  /*
  const things = useState(null);
  const activeIndex = things[0];
  const setActiveIndex = things[1];
  */

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
