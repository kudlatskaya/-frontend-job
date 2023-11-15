"use strict";

for (let button of document.querySelectorAll(".like")) {

  button.addEventListener("click", function () {
    this.classList.toggle("clicked");
    event.stopPropagation();
  });

}

/*responsive menu*/

let menuBtn = document.querySelector('.menu-btn');
let main_menu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active_menu');
  main_menu.classList.toggle('active_menu');
});

let salaryInput = document.getElementById('salary');

salaryInput.addEventListener("blur", function(){

  let value = salaryInput.value;
  value = value.replace(/\s/g, '');
  let separator = " ";
  salaryInput.value = value.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);

});


/*меню Фильтр на всю ширину блока*/

function resizeFilters() {
    let filterMenu = document.querySelector("#filter_menu");
    let filterWidth = filterMenu.clientWidth;

    let filtersSubmenu = document.querySelector("#filter_filters .filter_submenu");

    filtersSubmenu.style.width = filterWidth + "px";
}

resizeFilters();

window.addEventListener('resize', resizeFilters);

let vacancy_about = document.querySelector(".vacancy-about");
let list_vacancies = document.querySelector(".list-vacancies");
let vacancy_blocks =  vacancy_about.querySelectorAll(".vacancy-block");

if(window.screen.width > 1300) { 

vacancy_about.querySelector("#vacancy-1").style.display = 'block';

list_vacancies.addEventListener('click', function(event) { 

    let vacancy = event.target.closest('.vacancy');
   	let vacancy_id = vacancy.dataset.id;

    for(let block of vacancy_blocks) {
    	block.style.display = 'none';
    }
           
    vacancy_about.querySelector(`#${vacancy_id}`).style.display = 'block';
   
});

}



