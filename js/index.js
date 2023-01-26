// -------------javascript for tab change in about me section---------------
var tabLinks = document.getElementsByClassName("tabLinks");
var tabContents = document.getElementsByClassName("tabContents");
function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("activeLink");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("activeTab");
    }
    event.currentTarget.classList.add("activeLink");
    document.getElementById(tabname).classList.add("activeTab");
}
// -------------javascript for cool buttons on hero page ----------------
const coolBtn = document.querySelector('.coolBtn');
coolBtn.onmousemove = function(e){
    const x = e.pageX - coolBtn.offsetLeft;
    const y = e.pageY - coolBtn.offsetTop;

    coolBtn.style.setProperty('--x', x + 'px');
    coolBtn.style.setProperty('--y', y + 'px');

}

const coolBtn2 = document.querySelector('.coolBtn2');
coolBtn2.onmousemove = function(e){
    const x = e.pageX - coolBtn2.offsetLeft;
    const y = e.pageY - coolBtn2.offsetTop;

    coolBtn2.style.setProperty('--x', x + 'px');
    coolBtn2.style.setProperty('--y', y + 'px');

}

//----------smooth scroll back to top button------------

const topBtn = document.getElementById('topBtn');
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none"
    }
}

topBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


console.log("your index.js file is loaded correctly!");