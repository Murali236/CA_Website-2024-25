document.addEventListener("DOMContentLoaded", () => {
    const hoverTargets = document.querySelectorAll(".img-text-wrapper");

    hoverTargets.forEach(target => {
        target.addEventListener("mouseenter", () => {
            const hoverContent = document.createElement('div');
            hoverContent.classList.add('hover-content');
            hoverContent.innerText = target.parentElement.getAttribute("data-hover-text");

            const imageDiv = target.querySelector('div');
            const style = getComputedStyle(imageDiv);
            const width = imageDiv.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
            const height = imageDiv.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom);

            hoverContent.style.width = `${width}px`;
            hoverContent.style.height = `${height}px`;

            target.appendChild(hoverContent);
        });

        target.addEventListener("mouseleave", () => {
            const hoverContent = target.querySelector('.hover-content');
            if (hoverContent) {
                target.removeChild(hoverContent);
            }
        });
    });
});

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    slide.appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]);
});

setInterval(function() {
    next.click();
}, 1500);


//nav
document.querySelector('.toggle-button').addEventListener('click', function () {
    document.querySelector('.navbar ul').classList.toggle('active');
    this.classList.toggle('active');
});



