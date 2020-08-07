
window.addEventListener('load', () => {
    const portfolioContainer = document.querySelector('#portfolioContainer');
    dataJson.projectsItems.forEach(item => portfolioContainer.appendChild(printProjectItem(item)));
})

const dataJson = {
    projectsItems: [
        {
            title: 'Daily Note',
            description: `Daily Note allows You to create personalisable notes. You can easily install it on Your
            phone or laptop. <br> P.S. It looks like a corkboard!`,
            img: 'https://szymonrykala.github.io/dailynote/static/media/app.ed079c16.jpg',
            link: 'https://szymonrykala.github.io/dailynote/'
        }, {
            title: 'Photographer',
            description: `Business site of Maciej Kossowski, who is a photographer.
             Thanks to the custom CMS, he can easily edit the content of his own website.`,
            img: './img/maciejkossowski.jpg',
            link: 'http://maciejkossowski.pl/'
        }
    ]
}

function printProjectItem(item) {
    const projectItem = document.createElement('div');
    projectItem.setAttribute('class', 'col s12 m6 l4');

    projectItem.innerHTML = `<div class="card">
                                <div class="card-image">
                                    <img class="responsive" alt="image" src="${item.img}">
                                    <span class="card-title">${item.title}</span>
                                </div>
                                <div class="card-content ">
                                    <p>${item.description}</p>
                                </div>
                                <div class="card-action">
                                    <a href="${item.link}" targe="blank" class='teal-text'>Check
                                        here!</a>
                                </div>
                            </div>`;
    return projectItem;
}

