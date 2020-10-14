function openMenu(){
    let menu = document.getElementById("navigation-links");
    let darkBg = document.getElementById("dark-bg");
    if(menu.style.display == "none"){

        menu.style.display = "flex";
        darkBg.style.display = "block";
        setTimeout(function(){
            menu.style.opacity = "100%";
            darkBg.style.opacity = "60%";
        }, 20);
    } else{
        menu.style.opacity = "0%";
        darkBg.style.opacity = "0%";
        setTimeout(function(){
            menu.style.display = "none";
            darkBg.style.display = "none";
        }, 100);
    }
    
}