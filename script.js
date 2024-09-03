document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        ducument.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:'smooth'
        });
    });
});