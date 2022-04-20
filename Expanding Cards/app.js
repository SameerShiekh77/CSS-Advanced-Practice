var panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeClass();
        panel.classList.add('active');
    })
});

const removeClass = () => {
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
};