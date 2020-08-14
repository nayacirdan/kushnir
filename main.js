const burger=document.getElementById('burger');

burger.addEventListener('click', ()=>burger.classList.toggle('active'));
const  secondPage=document.getElementById('second');

const scrollToNextPage=()=>{
    secondPage.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

const btnScroll=document.getElementById('btn-scroll');

btnScroll.addEventListener('click', scrollToNextPage);

