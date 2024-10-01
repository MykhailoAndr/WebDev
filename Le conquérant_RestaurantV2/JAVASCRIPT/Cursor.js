(function(){
    const link = document.querySelectorAll('.cursor_link');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e){
        const this_anim = this.querySelector('.this_anim_for_cursor');
        const {offsetX: x, offsetY: y } = e,
        {offsetWidth: width, offsetHeight: height } = this,

        move = 5,
        xMove = x / width * (move * 8) - move, 
        yMove = y / height * (move * 2) - move;

        this_anim.style.transform = `translate(${xMove}px, ${yMove}px)`;

        cursor.style.transform = `translate(-50%, -50%) scale(1.8)`;

        if (e.type ==='mouseleave'){
            this_anim.style.transform = '';
            cursor.style.transform = `translate(0%, 0%) scale(1)`;
        }   
    };
    
    document.addEventListener('mousemove', (e) =>{
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    })

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
})();


/*const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})*/