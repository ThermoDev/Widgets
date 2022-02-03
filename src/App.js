import React, { Component } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a Frontend Javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Accordion items={items} /> */}
        <Search />
      </div>
    );
  }
}
