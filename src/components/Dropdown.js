import React, { Fragment, useEffect, useRef, useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      // Check if ref element contains the event target element
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    // addEventListeners called first,
    // Then, React Event Listeners are bubbled up the DOM
    document.body.addEventListener('click', onBodyClick, { capture: true });

    // Call cleanup function, remove event listener
    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <Fragment>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">Select a Color</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      <div style={{ color: `${selected.value}` }}>
        This text is: {`${selected.value}`}
      </div>
    </Fragment>
  );
};

export default Dropdown;
