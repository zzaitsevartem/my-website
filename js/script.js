// Плавный скролл к футеру при клике на "Контакты"
document.querySelector('a[href="#footer"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });

    const footerLinks = document.querySelectorAll('.footer-link');
    let blinkCount = 0;
    const blink = () => {
        footerLinks.forEach(link => {
            link.style.transform = 'scale(1.2)';
        });
        setTimeout(() => {
            footerLinks.forEach(link => {
                link.style.transform = 'scale(1)';
            });
            blinkCount++;
            if (blinkCount < 3) {
                setTimeout(blink, 300);
            }
        }, 300);
    };
    setTimeout(blink, 500);
});

// Бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelector('.menu-items');

burgerMenu.addEventListener('click', () => {
    menuItems.classList.toggle('active');
    const icon = burgerMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.header-item').forEach(item => {
    item.addEventListener('click', () => {
        menuItems.classList.remove('active');
        const icon = burgerMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});