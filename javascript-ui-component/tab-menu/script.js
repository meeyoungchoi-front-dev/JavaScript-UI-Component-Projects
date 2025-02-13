const tabs = document.querySelectorAll('.tab-button');
const all_contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => {tab.classList.remove('active')})
        tab.classList.add('active');

        const line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_contents.forEach(content => {content.classList.remove('active')});
        all_contents[index].classList.add('active');
    })

 
})