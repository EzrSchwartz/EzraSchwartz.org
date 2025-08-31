document.addEventListener('DOMContentLoaded', function() {
    const aboutbutton = document.getElementById('aboutButton');
    const projectbutton = document.getElementById('projectButton');

    const contactbutton = document.getElementById('contactButton');

    
    aboutbutton.addEventListener('click', function() {
       movetosection('about')
        })
    projectbutton.addEventListener('click', function() {
        movetosection('projects')

    })
    contactbutton.addEventListener('click', function() {
        movetosection('contact')

    })
 

    function movetosection(id){
        const aboutSection = document.getElementById(id);
        if (aboutSection) {
            const yOffset = -40; // Adjust to move up by 40px
            const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }

    
    
});
