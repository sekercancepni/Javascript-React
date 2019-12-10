import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import BasicHelmet from './BasicHelmet';
import Randomquote from './Randomquote';

const App = () => {
  return (
    <div>
      <Randomquote />
    </div>
  )
}

render(<App />, document.getElementById('root'));
