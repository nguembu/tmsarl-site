// Gestion des formulaires de contact - Version améliorée
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

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

            // Validation
            if (!name || !email || !message) {
                formStatus.textContent = '⚠️ Veuillez remplir tous les champs obligatoires.';
                formStatus.style.color = 'var(--error)';
                formStatus.style.fontWeight = '500';
                return;
            }

            // Validation email basique
            if (!email.includes('@') || !email.includes('.')) {
                formStatus.textContent = '⚠️ Veuillez entrer une adresse email valide.';
                formStatus.style.color = 'var(--error)';
                formStatus.style.fontWeight = '500';
                return;
            }

            // Construction du mailto
            const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0ATéléphone: ${phone || 'Non renseigné'}%0D%0A%0D%0A${encodeURIComponent(message)}`;
            const mailto = `mailto:contact@tmsarl.com?subject=${encodeURIComponent(subject)}&body=${body}`;

            // Tentative d'ouverture du client mail
            try {
                window.location.href = mailto;
                formStatus.textContent = '✅ Ouverture du client mail... Si rien ne se passe, envoyez un email à contact@tmsarl.com';
                formStatus.style.color = 'var(--secondary)';
                formStatus.style.fontWeight = '500';
                contactForm.reset();
            } catch (error) {
                formStatus.textContent = '⚠️ Une erreur est survenue. Veuillez envoyer un email à contact@tmsarl.com';
                formStatus.style.color = 'var(--error)';
                formStatus.style.fontWeight = '500';
            }
        });
    }

    // Gestion du bouton de contact rapide
    const quickContactBtn = document.getElementById('quickContactBtn');
    if (quickContactBtn) {
        quickContactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const headerHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                setTimeout(() => {
                    document.getElementById('name')?.focus();
                }, 600);
            }
        });
    }
});