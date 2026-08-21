/**
 * TMS SARL - Animations
 * Fonctionnalités : reveal au scroll, compteur de statistiques
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // =============================================
    // 1. REVEAL AU SCROLL
    // =============================================
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealOnScroll = function() {
        const windowHeight = window.innerHeight;
        const revealThreshold = 0.85;

        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < windowHeight * revealThreshold;

            if (isVisible) {
                el.classList.add('active');
            } else {
                // Optionnel : retirer la classe si on veut réanimer
                // el.classList.remove('active');
            }
        });
    };

    // Throttling pour les performances
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                revealOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    window.addEventListener('resize', revealOnScroll);
    setTimeout(revealOnScroll, 100);

    // =============================================
    // 2. ANIMATION DES STATISTIQUES (compteur)
    // =============================================
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = function(element, target, suffix = '') {
        const duration = 2000;
        const startTime = performance.now();
        const startValue = 0;

        const updateCounter = function(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Fonction d'easing (cubic-bezier)
            const easeOut = function(t) {
                return 1 - Math.pow(1 - t, 3);
            };
            const currentValue = Math.floor(easeOut(progress) * target);

            element.textContent = currentValue + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        };

        requestAnimationFrame(updateCounter);
    };

    // Observer les statistiques avec IntersectionObserver
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent;
                const numericMatch = text.match(/^([\d.]+)/);
                const suffix = text.replace(/^[\d.]+/, '');

                if (numericMatch && !el.dataset.animated) {
                    const target = parseFloat(numericMatch[1]);
                    if (!isNaN(target)) {
                        el.dataset.animated = 'true';
                        animateCounter(el, target, suffix);
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statObserver.observe(el));

    // =============================================
    // 3. ANIMATION DES CARTES AU SURVOL
    // =============================================
    document.querySelectorAll('.card, .product-card, .service-card, .expertise-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });

    console.log('TMS SARL - Animations initialisées');
});