/**
 * TMS SARL - Script principal
 * Fonctionnalités : menu mobile, scroll smooth, redirection commande → formulaire, newsletter
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // =============================================
    // 1. MENU MOBILE
    // =============================================
    const menuButton = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', function() {
            const isOpen = navLinks.classList.toggle('open');
            this.setAttribute('aria-expanded', isOpen);

            // Animation du hamburger
            const spans = this.querySelectorAll('span');
            if (isOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Fermer le menu au clic sur un lien
        document.querySelectorAll('.navbar-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    menuButton.setAttribute('aria-expanded', 'false');
                    const spans = menuButton.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }

    // =============================================
    // 2. SCROLL SMOOTH POUR LES ANCRES
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
    // 3. BOUTONS "COMMANDER" - REDIRECTION VERS LE FORMULAIRE
    // =============================================
    document.querySelectorAll('.commander-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const productInfo = this.getAttribute('data-product') || 'un produit';

            // Remplir le formulaire sur la page contact
            const subjectField = document.getElementById('subject');
            const messageField = document.getElementById('message');
            const contactSection = document.getElementById('contact');

            if (subjectField) {
                subjectField.value = 'devis';
            }
            if (messageField) {
                messageField.value = `Bonjour, je souhaite commander le produit suivant :\n\n${productInfo}\n\nMerci de me recontacter pour finaliser ma commande.`;
            }

            // Aller à la section contact
            if (contactSection) {
                const headerHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }

            // Focus sur le champ nom
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
    // 5. NAVIGATION ACTIVE AU SCROLL
    // =============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinksItems = document.querySelectorAll('.navbar-links a[href^="#"]');

    if (sections.length && navLinksItems.length) {
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

            navLinksItems.forEach(link => {
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
    // 6. GESTION DES FORMULAIRES DE CONTACT
    // =============================================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name')?.value?.trim();
            const email = document.getElementById('email')?.value?.trim();
            const phone = document.getElementById('phone')?.value?.trim();
            const subject = document.getElementById('subject')?.value || 'Demande depuis le site TMS SARL';
            const message = document.getElementById('message')?.value?.trim();

            if (!name || !email || !message) {
                formStatus.textContent = '⚠️ Veuillez remplir tous les champs obligatoires.';
                formStatus.style.color = 'var(--error)';
                return;
            }

            // Construction du mailto
            const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0ATéléphone: ${phone || 'Non renseigné'}%0D%0A%0D%0A${encodeURIComponent(message)}`;
            const mailto = `mailto:contact@tmsarl.com?subject=${encodeURIComponent(subject)}&body=${body}`;

            // Tentative d'ouverture du client mail
            window.location.href = mailto;

            formStatus.textContent = '✅ Ouverture du client mail... Si rien ne se passe, envoyez un email à contact@tmsarl.com';
            formStatus.style.color = 'var(--secondary)';
            contactForm.reset();
        });
    }

    console.log('TMS SARL - Site initialisé avec succès');
});