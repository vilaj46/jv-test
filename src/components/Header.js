import './Header.css';

export default function () {
    const header = document.createElement('header');
    
    // Put this in a wrapper
    // Center everything
    // Add icons
    // Add Title 
    const h1 = document.createElement('h1');
    h1.innerText = 'Julian Vila';



    header.appendChild(h1);
    return header;
}