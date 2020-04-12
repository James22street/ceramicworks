const navSlide = () => { 
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link li');
    //toggle Nav

    burguer.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links

        
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
    link.style.animation = 'navLinkFade 1s ease forwards ${index / 7 + 2.5}s';
            }

      });
      //burguer animation
      burguer.classList.toggle('toggle');

   });

}
navSlide();