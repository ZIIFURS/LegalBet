const btn = document.getElementsByClassName('expand-btn')[0];
const text = document.getElementsByClassName('main-text')[0];
const arrow = document.querySelector('.arrow')
let open = false;

btn.addEventListener('click', (e) => {
    const height = window.getComputedStyle(text).height
    if (!open) {
        text.classList.add('hidden');
        text.classList.remove('show');
        text.style.maxHeight = height;
        arrow.style.transform = 'rotate(-180deg)';
    } else {
        text.classList.remove('hidden');
        text.style.maxHeight = height;
        text.classList.add('show')
        arrow.style.transform = 'rotate(0deg)';
    }
    void text.offsetHeight;
    open = !open;
})
