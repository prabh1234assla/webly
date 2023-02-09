const images = document.querySelectorAll('img');

for(let i=0; i<images.length; ++i)
    images[i].setAttribute('loading', 'lazy');