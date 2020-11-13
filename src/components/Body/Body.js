import './Body.css';

import Projects from '../Projects/Projects.js';

export default function() {
    const body = document.createElement('div');
    const title = createBodyTitle();
    const projects = Projects();

    body.classList.add('body');
    body.classList.add('center');

    body.appendChild(title);
    body.appendChild(projects);

    return body;
}

function createBodyTitle() {
    const h3 = document.createElement('h3');

    h3.innerText = 'Featured Projects';

    h3.classList.add('bodyTitle');
    h3.classList.add('violetBottom');

    return h3;
}