import './style.css';

// Sub Components
import Header from './components/Header.js';

function App() {
  const root = document.createElement('div');
  const header = Header(); 

  // Append all the children.
  root.appendChild(header);
  return root;
}

document.body.appendChild(App());