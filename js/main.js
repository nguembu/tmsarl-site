/**
 * TMS SARL - Script principal
 * Fonctionnalités : menu mobile, scroll smooth, redirection commande, newsletter
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // =============================================
    // 1. MENU MOBILE
    // =============================================
    const menuButton = document.getElementById('navToggle');
    const mobilePanel = document.getElementById('navMobilePanel');
    const overlay = document.getElementById('navOverlay');

    function toggleMenu(open) {
        const isOpen = open !== undefined ? open : !menuButton.classList.contains('open');
        menuButton.classList.toggle('open', isOpen);
        menuButton.setAttribute('aria-expanded', isOpen);
        mobilePanel.classList.toggle('open', isOpen);
        overlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    if (menuButton && mobilePanel && overlay) {
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });

        overlay.addEventListener('click', function() {
            toggleMenu(false);
        });

        mobilePanel.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                toggleMenu(false);
            });
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobilePanel.classList.contains('open')) {
                toggleMenu(false);
            }
        });
    }

    // =============================================
    // 2. SCROLL SMOOTH
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =============================================
    // 3. BOUTONS "COMMANDER"
    // =============================================
    document.querySelectorAll('.commander-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productInfo = this.getAttribute('data-product') || 'un produit';
            const subjectField = document.getElementById('subject');
            const messageField = document.getElementById('message');
            const contactSection = document.getElementById('contact');

            if (subjectField) subjectField.value = 'devis';
            if (messageField) {
                messageField.value = `Bonjour, je souhaite commander le produit suivant :\n\n${productInfo}\n\nMerci de me recontacter pour finaliser ma commande.`;
            }

            if (contactSection) {
                const headerHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }

            setTimeout(() => {
                document.getElementById('name')?.focus();
            }, 600);
        });
    });

    // =============================================
    // 4. NEWSLETTER
    // =============================================
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            if (input && input.value && input.value.includes('@')) {
                alert('✅ Merci pour votre abonnement ! Vous recevrez bientôt nos actualités.');
                input.value = '';
            } else {
                alert('⚠️ Veuillez entrer une adresse email valide.');
                input?.focus();
            }
        });
    }

    // =============================================
    // 5. NAVIGATION ACTIVE
    // =============================================
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar-links a[href^="#"], .navbar-mobile-panel a[href^="#"]');

    if (sections.length && navItems.length) {
        function updateActiveLink() {
            const scrollPos = window.scrollY + 150;
            let currentId = '';
            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    currentId = section.id;
                }
            });
            navItems.forEach(link => {
                const href = link.getAttribute('href');
                link.classList.toggle('active', href === '#' + currentId);
            });
        }
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateActiveLink();
                    ticking = false;
                });
                ticking = true;
            }
        });
        window.addEventListener('resize', updateActiveLink);
        setTimeout(updateActiveLink, 100);
    }

    // =============================================
    // 6. NAVBAR SCROLL EFFECT
    // =============================================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        });
    }

    console.log('TMS SARL - Site initialisé avec succès');
});