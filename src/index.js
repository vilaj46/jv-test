import './style.css';

// Sub Components
import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';

// Featured Projects
// Portfolio
// Glorified Todo
// ad1-ad2-briefs
// nyscef document downloader react + vanilla
// fcp next

// Clones
// Mock Critical

function App() {
  const root = document.createElement('div');
  const header = Header(); 
  const body = Body();
  
  // Append all the children.
  root.appendChild(header);
  root.appendChild(body);

  return root;
}

document.body.appendChild(App());