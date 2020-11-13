import './Header.css';

import gitImage from '../../images/github.png';
import linkImage from '../../images/linkedin.png';

import gitImageHover from '../../images/github_hover.png';
import linkImageHover from '../../images/linkedin_hover.png';

export default function () {
    const header = document.createElement('header');
    
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    
    h1.innerText = 'Julian Vila';
    h2.innerText = 'Software Engineer';

    const gitImageElement = createHeaderImage(gitImage, gitImageHover, 'Github');
    const linkedImageElement = createHeaderImage(linkImage, linkImageHover, 'Linked In');
    
    const centerDiv = document.createElement('div');
    centerDiv.classList.add('centerDiv');
    
    centerDiv.appendChild(h1)
    centerDiv.appendChild(h2);
    centerDiv.appendChild(gitImageElement);
    centerDiv.appendChild(linkedImageElement);

    header.appendChild(centerDiv);

    return header;
}

/**
 * 
 * @param {String} src - Location of our regular image.
 * @param {String} hover - Location of our on hover image. 
 * @param {String} text - The alt and title key are gonna be the same.
 * @return {Image Element} - The created image element we have to append to the header.
 * 
 * Given the properties create the header image element.
 */
function createHeaderImage(src, hover, text) {
    const img = document.createElement('img');

    img.setAttribute('src', src);
    img.setAttribute('alt', text);
    img.setAttribute('title', text);

    img.classList.add('headerSocial')

    img.addEventListener('mouseenter', () => {
        img.setAttribute('src', hover);
    });

    img.addEventListener('mouseleave', () => {
        img.setAttribute('src', src)
    });

    return img;
}
