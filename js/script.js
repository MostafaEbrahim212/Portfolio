const btnNav = document.getElementById('toggle-nav');
const nav = document.getElementById('nav');
const main = document.getElementById('main');
const btnIcon = document.getElementById('btn-icon');
btnNav.addEventListener('click', (e) => {
    nav.classList.toggle('hidden')
    nav.classList.toggle('fixed')
    btnNav.querySelector('.icon').classList.toggle('fa-bars');
    btnNav.querySelector('.icon').classList.toggle('fa-bars-staggered')
});

if (window.innerWidth >= 768) {
    nav.classList.add('hidden')
}



const navs = document.querySelectorAll('.locations')
document.addEventListener('DOMContentLoaded', () => {
    navs.forEach(nav => {
        nav.querySelectorAll('li').forEach(li => {
            let href = li.querySelector('a').href;
            if (document.location.href == href) {
                li.classList.add('active')
            }
        })
    })
})





const topButton = document.getElementById('btn-top');
const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
};
scrollFunction();

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
window.onscroll = () => {
    scrollFunction();
};

topButton.addEventListener('click', () => {
    topFunction()
})


const ball = document.getElementById('ball');
if (ball) {

    const ballSize = 80;
    const ballSpeed = 5;

    let xDirection = 1;
    let yDirection = 1;

    let lastX = 1, lastY = 1;

    let isDragging = false;
    let offsetX, offsetY;



    function updateBallPosition(x, y) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (x >= 0 && x <= windowWidth - ballSize) {
            ball.style.left = `${x}px`;
        }
        if (y >= 0 && y <= windowHeight - ballSize) {
            ball.style.top = `${y}px`;
        }

        lastX = x;
        lastY = y;
    }

    function moveBall() {
        if (!isDragging) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            let newX = lastX + ballSpeed * xDirection;
            let newY = lastY + ballSpeed * yDirection;

            if (newX <= 0 || newX + ballSize >= windowWidth) {
                xDirection *= -1;
            }
            if (newY <= 0 || newY + ballSize >= windowHeight) {
                yDirection *= -1;
            }

            updateBallPosition(newX, newY);
        }

        requestAnimationFrame(moveBall);
    }

    moveBall();

    ball.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - ball.getBoundingClientRect().left;
        offsetY = event.clientY - ball.getBoundingClientRect().top;
        lastX = ball.getBoundingClientRect().left;
        lastY = ball.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;

            updateBallPosition(x, y);
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}



