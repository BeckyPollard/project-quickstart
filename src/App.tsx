import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style.scss';
import HelloWorld from '../src/components/helloWorld';

const main = () => {
  const appMainDOM = (
    <HelloWorld />
  );
  ReactDOM.render(
    appMainDOM,
    document.body.querySelector('main')
  );
}

main();
