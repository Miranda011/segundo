document.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuIcon.addEventListener('click', (event) => {

        event.preventDefault();

        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });

    //outro codigo 
    window.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});

const foto = document.getElementById('tenisGrande')

function trocaFoto(value) {
    foto.src = `img/${value}`
    console.log(value)
}