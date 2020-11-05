import printMe from './print.js';

import './style.css';

  function component() {
    const element = document.createElement('div');

   const btn = document.createElement('button');

    element.innerHTML = "Hello Dawg.";

   btn.innerHTML = 'Click me and check the console!';

   btn.onclick = printMe;

   btn.classList.add('hello');


   element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());