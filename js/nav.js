const toggleMenu = (toggleId, navListId) => {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if (toggle && navList) {
        toggle.addEventListener('click', () => {
            navList.classList.toggle('show-menu');
            toggleIcon.classList.toggle("is-active");
        });
    }
}

toggleMenu("nav-toggle", "nav-list")

 