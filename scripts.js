var navLinks = document.getElementById("navLinks");
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#Toggle');

const enableDarkMode = () => {
    document.getElementById('stylesheet').href = 'dark.css';
    document.getElementById('Toggle').checked = true;
    localStorage.setItem('darkMode','enabled');
};

const disbaleDarkMode = () =>{
    document.getElementById('stylesheet').href = 'styles.css';
    document.getElementById('Toggle').checked = false;
    localStorage.setItem('darkMode',null);
};

if(darkMode === 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () =>{
    darkMode = localStorage.getItem('darkMode');
    console.log(document.getElementById('Toggle').checked)
    if(darkMode !== 'enabled'){
        enableDarkMode();
    }else{
        disbaleDarkMode();
    }
});

// fucntions for mobile version 
function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}