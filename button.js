const btn =
document.getElementById('runaway-btn');

function moveBtn() {
    const x =
    Math.floor(Math.random() *
    window.Innerwidth);
    const y =
    Math.floor(Math.random() *
    window.Innerheight);

    btn.style.top = `${y}px`;
    btn.style.left = `${x}px`;
}

btn.addEventListener('mouseover', moveBtn);
