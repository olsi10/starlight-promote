const toggleMenu = (toggleId, navListId) => {
    // html -> js
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if (toggle && navList) {
        // toggle click        
        toggle.addEventListener('click', () => {
            // show/hide menu: .show-menu
            navList.classList.toggle('show-menu');
            toggleIcon.classList.toggle("is-active");
        });
    }
}

toggleMenu("nav-toggle", "nav-list")

 