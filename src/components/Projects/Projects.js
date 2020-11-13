import './Projects.css';

import sample from '../../images/sample.jpg';

const projects = [
    {
        images: [sample],
        title: 'Portfolio',
        builtWidth: ['webpack', 'js', ],
        description: 'Simple webpack setup and vanilla javascript.',
        website: 'www.julianvila.com',
    }
]

export default function() {
    const div = document.createElement('div');

    projects.forEach(project => {
        const createdProject = createProject(project);
        div.appendChild(createdProject);
    });
    return div;
}

function createProject(project) {
    const div = document.createElement('div');

    // Image or Slideshow.
    const projectImage = createProjectImage(project);
    div.appendChild(projectImage);

    // Title
    const { title } = project;
    const projectTitle = createProjectTitle(title);

    return div;
}

function createProjectTitle(title) {
    const h4 = document.createElement('h4');
    h4.innerText
}

function createProjectImage(project) {
    const { images } = project;
    if (images.length === 1) {
        // Image only.
        const link = createImageLink(project);
        return link;
    } else {
        // Slideshow
        return;
    }
}

function createImageLink(project) {
    const { images, website } = project;
    const src = images[0];

    const a = document.createElement('a');
    const img = document.createElement('img');

    a.setAttribute('href', website)
    a.setAttribute('target', '_blank');

    img.setAttribute('src', src);
    img.setAttribute('title', website);
    img.classList.add('projectImage');

    a.appendChild(img);

    return a;
}
