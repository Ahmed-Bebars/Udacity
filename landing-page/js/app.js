/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
document.addEventListener('DOMContentLoaded', (event) => {
    const sectionlist = document.getElementsByClassName('landing__container');
    const navlist = document.getElementById('navbar__list');
    let navarraylength = sectionlist.length;
    const topbutton = document.getElementById("topBtn");

    /**
     * End Global Variables
     * Start Helper Functions
     * 
    */



    /**
     * End Helper Functions
     * Begin Main Functions
     * 
    */
    /*function scrollview(event){
    
        class="your-active-class"
    
    
    }*/

    function scrollIntoView(e) {
        let windowCenterHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2;
        let sections = document.getElementsByTagName('section');
        let navid = document.getElementsByTagName('li');
        sections[0].getAttribute('id')
        let closestDiv = sections[0];
        let closestnav = navid[0];
        let closestDist = Number.POSITIVE_INFINITY;
        //Appear TOP page once start scroll 
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            topbutton.style.display = "block";
          } else {
            topbutton.style.display = "none";
          }
        //loop for active section and navbar button
        for (let list = 0; list < sections.length; list++) {
            sections[list].className = '';
            navid[list].classList.remove('navactive');
            const sectionBoundingRect = sections[list].getBoundingClientRect();
            let sectionCenter = sectionBoundingRect.top + (sectionBoundingRect.height / 2);
            let dist = Math.abs(windowCenterHeight - sectionCenter);
            if (dist < closestDist) {
                closestDist = dist;
                closestDiv = sections[list];
                closestnav = navid[list];
            }

        }
        closestDiv.className = 'your-active-class';
        closestnav.classList.add('navactive');



    };
    //TOP function
    topbutton.addEventListener("click", function (){
        console.log(event)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });

    // build the nav
    for (let list = 0; list < navarraylength; list++) {
        let sectiontxt = sectionlist[list].getElementsByTagName('h2')[0].innerText;
        let newsection = document.createElement('li');
        newsection.className = ('menu__link');
        newsection.innerHTML = `<a href="#${sectiontxt.toLowerCase().replace(/\s/g, '')}">` + sectiontxt + `</a>`;
        navlist.appendChild(newsection);
    };

    // Add class 'active' to section when near top of viewport
    // Scroll to anchor ID using scrollTO event

    document.onscroll = scrollIntoView;

    /**
     * End Main Functions
     * Begin Events
     * 
    */

    // Build menu 

    // Scroll to section on link click


// When the user scrolls down 20px from the top of the document, show the button


// When the user clicks on the button, scroll to the top of the document

  
    // Set sections as active


});