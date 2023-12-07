// from: http://www.robots.ox.ac.uk/~vedaldi/assets/hidebib.js
// const currentTheme = window.localStorage.getItem("theme");
// if (currentTheme == "dark") {
//     document.body.classList.add("dark-mode");
//     const getIcon = document.getElementById('moonIcon');
//     getIcon.src = 'images/sun.png';
//     getIcon.alt = 'Light';
// }

function setDarkMode(dark, preference) {
    if (dark) {
        preference !== "dark" ? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme');
        document.documentElement.classList.add('dark-mode');
        const getIcon =  document.getElementById('moonIcon')
        getIcon.src = 'images/sun.png';
        getIcon.alt = 'Light';
    } else if (!dark) {
        preference !== "light" ? localStorage.setItem('theme', 'light') : localStorage.removeItem('theme');
        document.documentElement.classList.remove('dark-mode');
        const getIcon =  document.getElementById('moonIcon')
        getIcon.src = 'images/sun.png';
        getIcon.alt = 'Light';
    }
};
const preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
if (localStorage.getItem('theme') === "dark" || (!('theme' in localStorage) && preference === 'dark')) {
    setDarkMode(true, preference);
}
window.onload = function () {
    document.getElementById('darkBtn').addEventListener('click', function() {
        setDarkMode(!document.documentElement.classList.contains('dark-mode'), preference);
    });
};

function hideallbibs()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            var bib = el[i].getElementsByTagName("pre") ;
            if (bib.length > 0) {
                bib [0] .style.display = 'none' ;
            }
        }
    }
}

function togglebib(paperid)
{
    var paper = document.getElementById(paperid) ;
    var bib = paper.getElementsByTagName('pre') ;
    if (bib.length > 0) {
        if (bib [0] .style.display == 'none') {
            bib [0] .style.display = 'block' ;
        } else {
            bib [0] .style.display = 'none' ;
        }
    }
}

function toggleblock(blockId)
{
   var block = document.getElementById(blockId);
   if (block.style.display == 'none') {
    block.style.display = 'block' ;
   } else {
    block.style.display = 'none' ;
   }
}

function hideblock(blockId)
{
   var block = document.getElementById(blockId);
   block.style.display = 'none' ;
}

// function toggleDarkMode(){
//     const getIcon = document.getElementById('moonIcon');
//     document.body.classList.toggle("dark-mode");
//     if (getIcon.src.match('images/moon.png')) {
//         getIcon.src = 'images/sun.png';
//         getIcon.alt = 'Light';
//     } else {
//         getIcon.src = 'images/moon.png';
//         getIcon.alt = 'Dark';
//     }
//     const getLink = document.getElementById('darkBtn')
//     let theme = "light";
//     if (document.body.classList.contains("dark-mode")) {
//         theme = "dark";
//     }
//     window.localStorage.setItem("theme", theme);
// }