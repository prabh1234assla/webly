const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((els) => {
    els.forEach(el => {
        if(el.isIntersecting)
            el.target.classList.add('show');

        else
            el.target.classList.remove('show');
    });
});

hiddenElements.forEach(el => observer.observe(el));