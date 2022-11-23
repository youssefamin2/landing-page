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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections=Array.from(document.querySelectorAll("section"));
const nav=document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//build the nav dynamically
function createlist(){
  for(section of sections){
    sectionName=section.getAttribute('data-nav');
    sectionslink=section.getAttribute('id');
    list=document.createElement('li');
    list.innerHTML=`<a class='menu__link' href='#${sectionslink}'>${sectionName}<\a>`;
   nav.appendChild(list);
  }
}
createlist();// creating li inside ul 
//active claas
window.onscroll=()=>{
document.querySelectorAll("section").forEach(function(activclass){
  if(activclass.getBoundingClientRect().top>=-400 && activclass.getBoundingClientRect().top<=150){
    activclass.classList.add("your-active-class");
  }
  else{
    activclass.classList.remove("your-active-class");
  }
})
};
