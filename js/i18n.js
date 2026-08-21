// Système de traduction i18n pour TMS SARL
(function() {
    'use strict';

    const translations = {
        fr: {
            // Navigation
            'nav.home': 'Accueil',
            'nav.services': 'Services',
            'nav.products': 'Produits',
            'nav.about': 'À propos',
            'nav.contact': 'Contact',

            // Hero
            'hero.badge': 'Leader au Cameroun',
            'hero.title': "L'équipement médical de confiance",
            'hero.title_highlight': 'au service de la santé au Cameroun',
            'hero.subtitle': "Depuis 2010, TMS SARL fournit aux hôpitaux, cliniques et laboratoires du Cameroun des équipements médicaux fiables, installés et entretenus par une équipe d'experts locaux.",
            'hero.cta_products': 'Découvrir nos produits',
            'hero.cta_contact': 'Prendre rendez-vous',

            // Services
            'services.title': 'Nos Services',
            'services.subtitle': 'Des prestations professionnelles pour accompagner vos établissements de santé, de l\'achat à la maintenance.',
            'service.consultations.title': 'Consultations Médicales',
            'service.consultations.desc': 'Consultations avec des spécialistes qualifiés pour diagnostiquer et traiter diverses conditions médicales.',
            'service.analyses.title': 'Analyses Médicales',
            'service.analyses.desc': 'Services de laboratoire complets pour des analyses précises et rapides avec des résultats fiables.',
            'service.imagerie.title': 'Imagerie Médicale',
            'service.imagerie.desc': 'Technologies d\'imagerie avancées pour des diagnostics précis et non invasifs.',
            'service.pharmacie.title': 'Pharmacie Spécialisée',
            'service.pharmacie.desc': 'Accès à des médicaments et produits médicaux spécialisés avec conseils professionnels.',
            'service.maintenance.title': 'Maintenance & SAV',
            'service.maintenance.desc': 'Service de maintenance préventive et corrective pour tous vos équipements médicaux.',
            'service.formation.title': 'Formation Professionnelle',
            'service.formation.desc': 'Formation et accompagnement de vos équipes sur l\'utilisation des équipements médicaux.',
            'cta.quote': 'Demander un devis',

            // Products
            'products.title': 'Nos Produits',
            'products.subtitle': 'Une sélection d\'équipements médicaux de haute qualité pour répondre à vos besoins.',
            'product.1.title': 'Microscope de Laboratoire',
            'product.1.desc': 'Microscope optique de haute précision pour analyses médicales et recherches en laboratoire. Résolution 4K.',
            'product.1.price': '1 200 000 FCFA',
            'product.2.title': 'Électrocardiogramme Digital',
            'product.2.desc': 'Appareil ECG moderne pour diagnostics cardiaques précis avec interface intuitive et export des données.',
            'product.2.price': '3 500 000 FCFA',
            'product.3.title': 'Scanner IRM 3T',
            'product.3.desc': 'Technologie d\'imagerie par résonance magnétique 3 Tesla pour diagnostics neurologiques et oncologiques.',
            'product.3.price': '45 000 000 FCFA',
            'product.4.title': 'Kit Laboratoire Complet',
            'product.4.desc': 'Kit complet comprenant autoclave, centrifugeuse, agitateur et instruments d\'analyse.',
            'product.4.price': '8 500 000 FCFA',
            'product.5.title': 'Équipement Salle d\'Opération',
            'product.5.desc': 'Table d\'opération, lampes scialytiques, monitorage et instruments chirurgicaux de précision.',
            'product.5.price': '15 000 000 FCFA',
            'product.6.title': 'Matériel Médical Divers',
            'product.6.desc': 'Lits d\'hospitalisation, fauteuils roulants, brancards et mobilier médical de qualité.',
            'product.6.price': 'Sur devis',
            'product.order': 'Commander',

            // Statistics
            'stat.years': "Années d'expérience",
            'stat.clients': 'Clients satisfaits',
            'stat.products': 'Produits médicaux',
            'stat.specialists': 'Spécialistes médicaux',

            // Expertise
            'expert.title': 'Pourquoi Nous Choisir',
            'expert.subtitle': 'Ce qui fait de TMS SARL votre partenaire de confiance en solutions médicales au Cameroun.',
            'expert.quality.title': 'Qualité Certifiée',
            'expert.quality.desc': 'Nos produits répondent aux normes internationales les plus strictes, garantissant fiabilité et performance.',
            'expert.support.title': 'Support Expert',
            'expert.support.desc': 'Notre équipe vous accompagne de la sélection à l\'installation et la maintenance de vos équipements.',
            'expert.local.title': 'Engagement Local',
            'expert.local.desc': 'Présents au Cameroun depuis 2010, nous contribuons activement au développement du secteur médical local.',

            // About
            'about.label': 'À propos de TMS SARL',
            'about.history.title': 'Notre Histoire',
            'about.history.p1': 'Technologie Médicale Company Sarl (TMS SARL) a été fondée en 2010 avec une vision claire : fournir des équipements médicaux et de laboratoire de haute qualité aux professionnels de santé du Cameroun.',
            'about.history.p2': 'Aujourd\'hui, TMS SARL est reconnue comme un acteur majeur dans la fourniture d\'équipements médicaux, avec des références dans les plus grands hôpitaux et cliniques du Cameroun.',
            'about.mission.title': 'Mission',
            'about.mission.p': 'Fournir des solutions médicales innovantes pour améliorer la qualité des soins au Cameroun.',
            'about.vision.title': 'Vision',
            'about.vision.p': 'Devenir le leader des solutions médicales en Afrique centrale.',

            // Team
            'team.title': 'Notre Équipe d\'Experts',
            'team.subtitle': 'Des professionnels expérimentés à votre service pour vous accompagner dans tous vos projets.',
            'team.member1.role': 'Responsable technique',
            'team.member1.experience': '15 ans d\'expérience en ingénierie biomédicale',
            'team.member2.role': 'Vente & Support',
            'team.member2.experience': 'Expert en équipements de laboratoire',
            'team.member3.role': 'Formation & services',
            'team.member3.experience': 'Spécialiste en formation clinique',
            'team.member4.role': 'Directeur Général',
            'team.member4.experience': 'Visionnaire en santé numérique',

            // Certifications
            'certifications.title': 'Nos Certifications',
            'certifications.subtitle': 'Des labels de qualité qui garantissent l\'excellence de nos produits et services.',
            'certification.iso': 'ISO 13485',
            'certification.ce': 'CE Médical',
            'certification.fda': 'FDA Approuvé',
            'certification.gmp': 'GMP Certifié',

            // Testimonials
            'testimonials.title': 'Ce que disent nos clients',
            'testimonials.subtitle': 'Des retours d\'expérience de professionnels de santé qui nous font confiance.',
            'testimonial.1': 'Equipement performant et service après-vente exemplaire. Une équipe réactive et professionnelle.',
            'testimonial.1.author': '— Clinique Saint-Luc, Douala',
            'testimonial.2': 'Livraison rapide et installation professionnelle. Les équipements répondent parfaitement à nos besoins.',
            'testimonial.2.author': '— Hôpital Central, Yaoundé',
            'testimonial.3': 'Des produits conformes aux standards internationaux. Un partenaire de confiance pour notre cabinet.',
            'testimonial.3.author': '— Cabinet Privé, Bafoussam',

            // Contact
            'contact.title': 'Contactez-nous',
            'contact.subtitle': 'Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos besoins médicaux.',
            'contact.info.title': 'Informations de Contact',
            'contact.info.address': 'Adresse',
            'contact.info.phone': 'Téléphone',
            'contact.info.phone_available': 'Disponible 24h/24',
            'contact.info.email': 'Email',
            'contact.info.email_response': 'Réponse sous 24h',
            'contact.info.hours': 'Horaires d\'ouverture',
            'contact.info.hours_week': 'Lundi - Vendredi: 8h30 - 18h30',
            'contact.info.hours_sat': 'Samedi: 9h00 - 13h00',
            'contact.info.hours_sun': 'Dimanche: Fermé',

            // Form
            'form.heading': 'Envoyez-nous un message',
            'form.name': 'Nom complet',
            'form.email': 'Email',
            'form.phone': 'Téléphone',
            'form.subject': 'Sujet',
            'form.select.subject': 'Sélectionnez un sujet',
            'form.option.consultation': 'Demande de consultation',
            'form.option.product': 'Information sur un produit',
            'form.option.service': 'Information sur un service',
            'form.option.devis': 'Demande de devis',
            'form.option.other': 'Autre demande',
            'form.message': 'Message',
            'form.send': 'Envoyer le message',

            // CTA
            'cta.call': 'Vous préférez nous appeler ?',
            'cta.call_sub': 'Notre équipe est disponible pour répondre à vos questions du lundi au samedi.',
            'cta.contact_us': 'Contactez-nous',

            // Footer
            'footer.links': 'Liens rapides',
            'footer.services': 'Services',
            'footer.newsletter_title': 'Newsletter',
            'footer.newsletter': 'Abonnez-vous pour recevoir nos dernières actualités et offres spéciales.',
            'footer.subscribe': 'S\'abonner',
            'footer.copy': '© 2026 Technologie Medical Company Sarl. Tous droits réservés.',
            'footer.legal': 'Mentions légales',
            'footer.privacy': 'Politique de confidentialité',
            'footer.cgv': 'CGV',
            'footer.language': 'Langue',

            // ============================================
            // LEGAL PAGE (Mentions légales)
            // ============================================
            'legal.title': 'Mentions légales',
            'legal.subtitle': 'Conformément aux dispositions légales en vigueur au Cameroun, nous vous informons des éléments suivants.',
            'legal.last_update': 'Dernière mise à jour :',

            'legal.section1.title': '1. Éditeur du site',
            'legal.section1.company': 'Nom de la société :',
            'legal.section1.form': 'Forme juridique :',
            'legal.section1.capital': 'Capital social :',
            'legal.section1.rc': 'Registre de commerce :',
            'legal.section1.tax': 'N° de contribuable :',
            'legal.section1.address': 'Siège social :',
            'legal.section1.phone': 'Téléphone :',
            'legal.section1.email': 'Email :',
            'legal.section1.director': 'Directeur de la publication :',

            'legal.section2.title': '2. Hébergeur du site',
            'legal.section2.name': 'Nom :',
            'legal.section2.address': 'Adresse :',
            'legal.section2.phone': 'Téléphone :',
            'legal.section2.email': 'Email :',

            'legal.section3.title': '3. Propriété intellectuelle',
            'legal.section3.p1': 'L\'ensemble du contenu du site tmsarl.com (textes, images, vidéos, logos, icônes, graphismes, etc.) est la propriété exclusive de TMS SARL, sauf mention contraire explicite.',
            'legal.section3.p2': 'Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de TMS SARL.',
            'legal.section3.p3': 'Les marques et logos présents sur le site sont déposés et protégés. Toute utilisation non autorisée constitue une contrefaçon et est passible de poursuites judiciaires.',

            'legal.section4.title': '4. Responsabilité',
            'legal.section4.p1': 'TMS SARL s\'efforce de fournir des informations aussi précises et à jour que possible. Cependant, elle ne peut garantir l\'exactitude, la complétude ou l\'actualité des informations diffusées sur le site.',
            'legal.section4.important': 'Important :',
            'legal.section4.important_text': 'Les informations présentes sur ce site sont fournies à titre indicatif et peuvent être modifiées sans préavis. TMS SARL décline toute responsabilité pour les dommages directs ou indirects résultant de l\'utilisation du site ou des informations qu\'il contient.',
            'legal.section4.p2': 'TMS SARL ne peut être tenue responsable des éventuels virus ou autres éléments infectieux pouvant affecter votre système informatique suite à la consultation du site.',

            'legal.section5.title': '5. Liens externes',
            'legal.section5.p1': 'Le site peut contenir des liens hypertextes vers d\'autres sites internet. TMS SARL n\'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leur fonctionnement.',
            'legal.section5.p2': 'La présence de liens externes ne constitue en aucun cas une approbation ou une recommandation de leur contenu par TMS SARL.',

            'legal.section6.title': '6. Données personnelles',
            'legal.section6.p1': 'Conformément à la loi n° 2011/014 du 14 décembre 2011 sur la protection des données à caractère personnel au Cameroun, TMS SARL s\'engage à respecter la vie privée des utilisateurs de son site.',
            'legal.section6.p2': 'Les données personnelles collectées via le formulaire de contact (nom, email, téléphone) sont utilisées uniquement pour répondre aux demandes des utilisateurs et ne sont en aucun cas transmises à des tiers.',
            'legal.section6.p3': 'Conformément à la législation, vous disposez d\'un droit d\'accès, de rectification et de suppression des données vous concernant. Pour exercer ces droits, contactez-nous à : contact@tmsarl.com.',
            'legal.section6.p4': 'Pour plus d\'informations, consultez notre Politique de confidentialité.',

            'legal.section7.title': '7. Cookies',
            'legal.section7.p1': 'Le site utilise des cookies pour améliorer l\'expérience utilisateur et analyser le trafic. Les cookies sont de petits fichiers texte stockés sur votre appareil lors de la visite du site.',
            'legal.section7.p2': 'Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies. Toutefois, cela pourrait limiter certaines fonctionnalités du site.',

            'legal.section8.title': '8. Loi applicable',
            'legal.section8.p1': 'Les présentes mentions légales sont régies par le droit camerounais. Tout litige relatif à l\'utilisation du site est soumis à la compétence des tribunaux de Yaoundé, Cameroun.',

            'legal.section9.title': '9. Contact',
            'legal.section9.p1': 'Pour toute question relative aux mentions légales du site, vous pouvez nous contacter :',
            'legal.section9.email': 'Par email :',
            'legal.section9.phone': 'Par téléphone :',
            'legal.section9.mail': 'Par courrier :',

            // ============================================
            // PRIVACY PAGE (Politique de confidentialité)
            // ============================================
            'privacy.title': 'Politique de confidentialité',
            'privacy.subtitle': 'Nous nous engageons à protéger vos données personnelles conformément à la législation camerounaise en vigueur.',
            'privacy.last_update': 'Dernière mise à jour :',

            'privacy.section1.title': '1. Introduction',
            'privacy.section1.p1': 'Technologie Médicale Company SARL (TMS SARL) accorde une importance particulière à la protection de vos données personnelles. Cette politique de confidentialité vous informe de la manière dont nous collectons, utilisons, conservons et protégeons vos informations lorsque vous utilisez notre site internet.',
            'privacy.section1.p2': 'Nous nous engageons à respecter la loi n° 2011/014 du 14 décembre 2011 sur la protection des données à caractère personnel au Cameroun, ainsi que les principes fondamentaux de protection des données.',

            'privacy.section2.title': '2. Données collectées',
            'privacy.section2.p1': 'Nous collectons les données personnelles suivantes lorsque vous interagissez avec notre site :',

            'privacy.table.type': 'Type de données',
            'privacy.table.examples': 'Exemples',
            'privacy.table.purpose': 'Finalité',
            'privacy.table.row1.type': 'Données d\'identification',
            'privacy.table.row1.examples': 'Nom, prénom, email, téléphone',
            'privacy.table.row1.purpose': 'Répondre à vos demandes',
            'privacy.table.row2.type': 'Données de navigation',
            'privacy.table.row2.examples': 'Adresse IP, cookies, pages visitées',
            'privacy.table.row2.purpose': 'Améliorer l\'expérience utilisateur',
            'privacy.table.row3.type': 'Données de communication',
            'privacy.table.row3.examples': 'Messages via le formulaire de contact',
            'privacy.table.row3.purpose': 'Gérer vos demandes',

            'privacy.important': 'Important :',
            'privacy.important_text': 'Nous ne collectons que les données strictement nécessaires aux finalités décrites ci-dessus.',

            'privacy.section3.title': '3. Utilisation des données',
            'privacy.section3.p1': 'TMS SARL utilise vos données personnelles exclusivement pour :',
            'privacy.section3.list1': 'Répondre à vos demandes via le formulaire de contact',
            'privacy.section3.list2': 'Vous envoyer des informations sur nos produits et services (avec votre consentement)',
            'privacy.section3.list3': 'Améliorer et personnaliser votre expérience sur notre site',
            'privacy.section3.list4': 'Analyser le trafic et les performances du site',
            'privacy.section3.list5': 'Respecter nos obligations légales et réglementaires',

            'privacy.section4.title': '4. Stockage et sécurité',
            'privacy.section4.p1': 'Vos données personnelles sont stockées sur des serveurs sécurisés et ne sont conservées que le temps nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées.',
            'privacy.section4.p2': 'Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre :',
            'privacy.section4.list1': 'La perte ou la destruction accidentelle',
            'privacy.section4.list2': 'L\'accès non autorisé',
            'privacy.section4.list3': 'La divulgation ou la modification non autorisée',
            'privacy.section4.p3': 'La durée de conservation des données varie selon leur nature :',
            'privacy.section4.duration1': 'Données de contact : 3 ans à compter du dernier contact',
            'privacy.section4.duration2': 'Données de navigation : 13 mois maximum',
            'privacy.section4.duration3': 'Données de communication : 5 ans pour les échanges importants',

            'privacy.section5.title': '5. Vos droits',
            'privacy.section5.p1': 'Conformément à la loi camerounaise sur la protection des données, vous disposez des droits suivants :',
            'privacy.section5.right1': 'Droit d\'accès : Vous pouvez obtenir une copie de vos données personnelles',
            'privacy.section5.right2': 'Droit de rectification : Vous pouvez modifier des données inexactes ou incomplètes',
            'privacy.section5.right3': 'Droit à l\'effacement : Vous pouvez demander la suppression de vos données',
            'privacy.section5.right4': 'Droit d\'opposition : Vous pouvez vous opposer à l\'utilisation de vos données',
            'privacy.section5.right5': 'Droit à la portabilité : Vous pouvez récupérer vos données dans un format lisible',
            'privacy.section5.p2': 'Pour exercer ces droits, contactez-nous à l\'adresse suivante :',
            'privacy.response_time': 'Délai de réponse :',
            'privacy.response_time_text': 'Nous traitons votre demande dans un délai maximum de 30 jours.',

            'privacy.section6.title': '6. Cookies',
            'privacy.section6.p1': 'Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil.',
            'privacy.section6.sub1': '6.1 Types de cookies utilisés',
            'privacy.section6.cookie1': 'Cookies essentiels : Nécessaires au fonctionnement du site',
            'privacy.section6.cookie2': 'Cookies fonctionnels : Améliorent l\'expérience utilisateur',
            'privacy.section6.cookie3': 'Cookies analytiques : Nous aident à comprendre l\'utilisation du site',
            'privacy.section6.sub2': '6.2 Gestion des cookies',
            'privacy.section6.p2': 'Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lors de leur dépôt. Veuillez noter que la désactivation des cookies peut limiter certaines fonctionnalités du site.',

            'privacy.section7.title': '7. Partage avec des tiers',
            'privacy.section7.p1': 'TMS SARL ne vend pas, ne loue pas et ne partage pas vos données personnelles avec des tiers à des fins commerciales.',
            'privacy.section7.p2': 'Cependant, nous pouvons être amenés à partager vos données avec :',
            'privacy.section7.list1': 'Nos prestataires techniques (hébergement, maintenance)',
            'privacy.section7.list2': 'Les autorités compétentes en cas d\'obligation légale',
            'privacy.section7.p3': 'Dans tous les cas, nous nous assurons que les tiers respectent la confidentialité et la sécurité de vos données.',

            'privacy.section8.title': '8. Sécurité des transactions',
            'privacy.section8.p1': 'Bien que notre site ne propose pas actuellement de transactions en ligne, nous appliquons des mesures de sécurité rigoureuses pour protéger toutes les communications entre votre navigateur et notre serveur.',
            'privacy.section8.p2': 'Notre site utilise le protocole HTTPS pour garantir le chiffrement de vos données lors de leur transmission.',

            'privacy.section9.title': '9. Modifications de la politique',
            'privacy.section9.p1': 'TMS SARL se réserve le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.',
            'privacy.section9.p2': 'Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.',

            'privacy.section10.title': '10. Contact',
            'privacy.section10.p1': 'Pour toute question concernant cette politique de confidentialité ou l\'exercice de vos droits, vous pouvez nous contacter :',
            'privacy.section10.email': 'Email :',
            'privacy.section10.phone': 'Téléphone :',
            'privacy.section10.address': 'Adresse :',

            // ============================================
            // CGV PAGE (Conditions Générales de Vente)
            // ============================================
            'cgv.title': 'Conditions Générales de Vente',
            'cgv.subtitle': 'Les présentes Conditions Générales de Vente régissent les relations contractuelles entre TMS SARL et ses clients.',
            'cgv.last_update': 'Dernière mise à jour :',

            'cgv.article1.title': 'Article 1 : Champ d\'application',
            'cgv.article1.p1': 'Les présentes Conditions Générales de Vente (CGV) s\'appliquent à toutes les ventes de produits et services effectuées par Technologie Médicale Company SARL (TMS SARL), immatriculée au Registre de Commerce de Yaoundé sous le numéro RC/YAO/2023/B-XXX.',
            'cgv.article1.p2': 'Toute commande passée auprès de TMS SARL implique l\'acceptation sans réserve des présentes CGV par le client.',
            'cgv.article1.warning': 'Attention :',
            'cgv.article1.warning_text': 'Les présentes CGV prévalent sur toute autre condition, sauf accord écrit préalable de TMS SARL.',

            'cgv.article2.title': 'Article 2 : Produits et services',
            'cgv.article2.sub1': '2.1. Description des produits',
            'cgv.article2.p1': 'TMS SARL propose une gamme d\'équipements médicaux et de laboratoire, incluant notamment :',
            'cgv.article2.list1': 'Équipements de diagnostic (microscopes, ECG, IRM, scanners)',
            'cgv.article2.list2': 'Équipements de laboratoire (autoclaves, centrifugeuses, analyseurs)',
            'cgv.article2.list3': 'Équipements chirurgicaux (tables d\'opération, lampes scialytiques)',
            'cgv.article2.list4': 'Matériel médical (lits, fauteuils roulants, brancards)',
            'cgv.article2.list5': 'Services de maintenance et de formation',
            'cgv.article2.sub2': '2.2. Caractéristiques',
            'cgv.article2.p2': 'Les caractéristiques des produits sont présentées sur notre site internet. Les photos sont fournies à titre indicatif et ne sont pas contractuelles.',
            'cgv.article2.p3': 'TMS SARL s\'efforce de maintenir à jour les informations relatives à ses produits, mais ne peut garantir l\'absence d\'erreurs ou d\'omissions.',

            'cgv.article3.title': 'Article 3 : Commandes',
            'cgv.article3.sub1': '3.1. Processus de commande',
            'cgv.article3.p1': 'Les commandes peuvent être passées par :',
            'cgv.article3.list1': 'Email : contact@tmsarl.com',
            'cgv.article3.list2': 'Téléphone : +237 699 248 832',
            'cgv.article3.list3': 'Formulaire de contact sur notre site',
            'cgv.article3.sub2': '3.2. Validation',
            'cgv.article3.p2': 'Toute commande n\'est définitive qu\'après confirmation écrite de TMS SARL et acceptation du devis par le client. TMS SARL se réserve le droit de refuser toute commande anormale ou non conforme.',
            'cgv.article3.confirmation': 'Confirmation :',
            'cgv.article3.confirmation_text': 'Un accusé de réception de la commande sera envoyé par email dans un délai de 48 heures.',

            'cgv.article4.title': 'Article 4 : Prix et paiement',
            'cgv.article4.sub1': '4.1. Prix',
            'cgv.article4.p1': 'Les prix sont indiqués en Francs CFA (FCFA), hors taxes. Ils sont valables pour la durée indiquée sur le devis, généralement 30 jours.',
            'cgv.article4.p2': 'TMS SARL se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix applicable est celui en vigueur au moment de la validation de la commande.',
            'cgv.article4.sub2': '4.2. Modes de paiement',
            'cgv.article4.p3': 'Les paiements peuvent être effectués par :',
            'cgv.article4.payment1': 'Virement bancaire',
            'cgv.article4.payment2': 'Chèque certifié',
            'cgv.article4.payment3': 'Espèces (dans la limite légale)',
            'cgv.article4.payment4': 'Mobile Money (Orange Money, MTN Mobile Money)',
            'cgv.article4.sub3': '4.3. Conditions de paiement',
            'cgv.article4.condition1': 'Acompte : 30% à la commande',
            'cgv.article4.condition2': 'Solde : 70% avant livraison ou à la livraison selon accord',

            'cgv.article5.title': 'Article 5 : Livraison',
            'cgv.article5.sub1': '5.1. Délais',
            'cgv.article5.p1': 'Les délais de livraison sont indiqués à titre indicatif et dépendent de la disponibilité des produits. TMS SARL s\'efforce de respecter les délais annoncés, mais ne peut être tenue responsable des retards indépendants de sa volonté.',
            'cgv.article5.sub2': '5.2. Frais de livraison',
            'cgv.article5.p2': 'Les frais de livraison sont à la charge du client, sauf mention contraire sur le devis. Un devis de transport sera fourni avant validation de la commande.',
            'cgv.article5.sub3': '5.3. Réception',
            'cgv.article5.p3': 'Le client est tenu de vérifier l\'état des produits à la réception. Toute réserve doit être formulée par écrit dans un délai de 48 heures suivant la livraison.',

            'cgv.article6.title': 'Article 6 : Garantie et SAV',
            'cgv.article6.sub1': '6.1. Garantie légale',
            'cgv.article6.p1': 'TMS SARL garantit ses produits contre tout défaut de fabrication pendant une période de 12 mois à compter de la date de livraison, conformément à la législation camerounaise.',
            'cgv.article6.sub2': '6.2. Service Après-Vente',
            'cgv.article6.p2': 'TMS SARL assure un service après-vente pour tous ses produits, incluant :',
            'cgv.article6.sav1': 'Maintenance préventive et corrective',
            'cgv.article6.sav2': 'Fourniture de pièces détachées',
            'cgv.article6.sav3': 'Assistance technique à distance',
            'cgv.article6.sav4': 'Formation des utilisateurs',
            'cgv.article6.sav_contact': 'Contact SAV : +237 699 248 832 - sav@tmsarl.com',

            'cgv.article7.title': 'Article 7 : Rétractation et retour',
            'cgv.article7.sub1': '7.1. Droit de rétractation',
            'cgv.article7.p1': 'Conformément à la loi, le client dispose d\'un délai de 14 jours à compter de la réception des produits pour exercer son droit de rétractation.',
            'cgv.article7.sub2': '7.2. Conditions de retour',
            'cgv.article7.p2': 'Les produits retournés doivent être :',
            'cgv.article7.return1': 'Dans leur emballage d\'origine',
            'cgv.article7.return2': 'En parfait état de revente',
            'cgv.article7.return3': 'Accompagnés de tous les accessoires et documents',
            'cgv.article7.p3': 'Les frais de retour sont à la charge du client, sauf en cas de produit défectueux.',

            'cgv.article8.title': 'Article 8 : Responsabilité',
            'cgv.article8.p1': 'TMS SARL met tout en œuvre pour assurer la conformité des produits livrés. Sa responsabilité ne saurait être engagée en cas de :',
            'cgv.article8.list1': 'Utilisation non conforme des produits',
            'cgv.article8.list2': 'Défauts imputables au client (mauvaise installation, usage inapproprié)',
            'cgv.article8.list3': 'Dommages indirects ou immatériels',
            'cgv.article8.list4': 'Cas de force majeure',

            'cgv.article9.title': 'Article 9 : Propriété intellectuelle',
            'cgv.article9.p1': 'Tous les contenus du site (textes, images, logos, marques) sont la propriété exclusive de TMS SARL. Toute reproduction, modification ou utilisation sans autorisation est interdite.',

            'cgv.article10.title': 'Article 10 : Données personnelles',
            'cgv.article10.p1': 'Les données personnelles collectées sont traitées conformément à la loi camerounaise sur la protection des données. Pour plus d\'informations, consultez notre Politique de confidentialité.',

            'cgv.article11.title': 'Article 11 : Loi applicable et litiges',
            'cgv.article11.p1': 'Les présentes CGV sont régies par le droit camerounais. Tout litige relatif à leur interprétation ou à leur exécution est soumis à la compétence des tribunaux de Yaoundé, Cameroun.',

            'cgv.article12.title': 'Article 12 : Contact',
            'cgv.article12.p1': 'Pour toute question relative aux présentes CGV, vous pouvez nous contacter :',
            'cgv.article12.email': 'Email :',
            'cgv.article12.phone': 'Téléphone :',
            'cgv.article12.address': 'Adresse :'
        },
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.services': 'Services',
            'nav.products': 'Products',
            'nav.about': 'About',
            'nav.contact': 'Contact',

            // Hero
            'hero.badge': 'Leader in Cameroon',
            'hero.title': 'Trusted medical equipment',
            'hero.title_highlight': 'serving healthcare in Cameroon',
            'hero.subtitle': 'Since 2010 TMS SARL has supplied hospitals, clinics and laboratories across Cameroon with reliable medical equipment installed and serviced by local experts.',
            'hero.cta_products': 'Discover our products',
            'hero.cta_contact': 'Book an appointment',

            // Services
            'services.title': 'Our Services',
            'services.subtitle': 'Professional services to support your healthcare facility from purchase to maintenance.',
            'service.consultations.title': 'Medical Consultations',
            'service.consultations.desc': 'Consultations with qualified specialists to diagnose and treat various medical conditions.',
            'service.analyses.title': 'Laboratory Tests',
            'service.analyses.desc': 'Comprehensive laboratory services for accurate and fast testing with reliable results.',
            'service.imagerie.title': 'Medical Imaging',
            'service.imagerie.desc': 'Advanced imaging technologies for accurate, non-invasive diagnostics.',
            'service.pharmacie.title': 'Specialized Pharmacy',
            'service.pharmacie.desc': 'Access to specialized medicines and medical products with professional advice.',
            'service.maintenance.title': 'Maintenance & Support',
            'service.maintenance.desc': 'Preventive and corrective maintenance services for all your medical equipment.',
            'service.formation.title': 'Professional Training',
            'service.formation.desc': 'Training and support for your teams on the use of medical equipment.',
            'cta.quote': 'Request a quote',

            // Products
            'products.title': 'Our Products',
            'products.subtitle': 'A selection of high-quality medical equipment to meet your needs.',
            'product.1.title': 'Laboratory Microscope',
            'product.1.desc': 'High-precision optical microscope for medical analyses and laboratory research. 4K resolution.',
            'product.1.price': '1,200,000 XAF',
            'product.2.title': 'Digital Electrocardiogram',
            'product.2.desc': 'Modern ECG device for precise cardiac diagnostics with intuitive interface and data export.',
            'product.2.price': '3,500,000 XAF',
            'product.3.title': '3T MRI Scanner',
            'product.3.desc': '3 Tesla magnetic resonance imaging technology for neurological and oncological diagnostics.',
            'product.3.price': '45,000,000 XAF',
            'product.4.title': 'Complete Laboratory Kit',
            'product.4.desc': 'Complete kit including autoclave, centrifuge, shaker and analysis instruments.',
            'product.4.price': '8,500,000 XAF',
            'product.5.title': 'Operating Room Equipment',
            'product.5.desc': 'Surgical table, operating lights, monitoring and precision surgical instruments.',
            'product.5.price': '15,000,000 XAF',
            'product.6.title': 'Medical Equipment',
            'product.6.desc': 'Hospital beds, wheelchairs, stretchers and quality medical furniture.',
            'product.6.price': 'Quote on request',
            'product.order': 'Order',

            // Statistics
            'stat.years': 'Years of experience',
            'stat.clients': 'Satisfied clients',
            'stat.products': 'Medical products',
            'stat.specialists': 'Medical specialists',

            // Expertise
            'expert.title': 'Why Choose Us',
            'expert.subtitle': 'What makes TMS SARL your trusted partner in medical solutions in Cameroon.',
            'expert.quality.title': 'Certified Quality',
            'expert.quality.desc': 'Our products meet the strictest international standards, ensuring reliability and performance.',
            'expert.support.title': 'Expert Support',
            'expert.support.desc': 'Our team supports you from selection to installation and maintenance of your equipment.',
            'expert.local.title': 'Local Commitment',
            'expert.local.desc': 'Present in Cameroon since 2010, we actively contribute to the development of the local medical sector.',

            // About
            'about.label': 'About TMS SARL',
            'about.history.title': 'Our Story',
            'about.history.p1': 'Technologie Médicale Company Sarl (TMS SARL) was founded in 2010 with a clear vision: to supply high-quality medical and laboratory equipment to healthcare professionals in Cameroon.',
            'about.history.p2': 'Today, TMS SARL is recognized as a major player in the supply of medical equipment, with references in the largest hospitals and clinics in Cameroon.',
            'about.mission.title': 'Mission',
            'about.mission.p': 'Provide innovative medical solutions to improve healthcare quality in Cameroon.',
            'about.vision.title': 'Vision',
            'about.vision.p': 'Become the leader in medical solutions in Central Africa.',

            // Team
            'team.title': 'Our Expert Team',
            'team.subtitle': 'Experienced professionals at your service to support you in all your projects.',
            'team.member1.role': 'Technical Manager',
            'team.member1.experience': '15 years of experience in biomedical engineering',
            'team.member2.role': 'Sales & Support',
            'team.member2.experience': 'Expert in laboratory equipment',
            'team.member3.role': 'Training & Services',
            'team.member3.experience': 'Clinical training specialist',
            'team.member4.role': 'General Manager',
            'team.member4.experience': 'Digital health visionary',

            // Certifications
            'certifications.title': 'Our Certifications',
            'certifications.subtitle': 'Quality labels that guarantee the excellence of our products and services.',
            'certification.iso': 'ISO 13485',
            'certification.ce': 'CE Medical',
            'certification.fda': 'FDA Approved',
            'certification.gmp': 'GMP Certified',

            // Testimonials
            'testimonials.title': 'What our clients say',
            'testimonials.subtitle': 'Feedback from healthcare professionals who trust us.',
            'testimonial.1': 'High-performance equipment and exemplary after-sales service. A responsive and professional team.',
            'testimonial.1.author': '— Saint-Luc Clinic, Douala',
            'testimonial.2': 'Fast delivery and professional installation. The equipment perfectly meets our needs.',
            'testimonial.2.author': '— Central Hospital, Yaoundé',
            'testimonial.3': 'Products compliant with international standards. A trusted partner for our practice.',
            'testimonial.3.author': '— Private Practice, Bafoussam',

            // Contact
            'contact.title': 'Get in touch',
            'contact.subtitle': 'We are available to answer your questions and support your medical needs.',
            'contact.info.title': 'Contact Information',
            'contact.info.address': 'Address',
            'contact.info.phone': 'Phone',
            'contact.info.phone_available': 'Available 24/7',
            'contact.info.email': 'Email',
            'contact.info.email_response': 'Response within 24h',
            'contact.info.hours': 'Opening Hours',
            'contact.info.hours_week': 'Monday - Friday: 8:30am - 6:30pm',
            'contact.info.hours_sat': 'Saturday: 9:00am - 1:00pm',
            'contact.info.hours_sun': 'Sunday: Closed',

            // Form
            'form.heading': 'Send us a message',
            'form.name': 'Full name',
            'form.email': 'Email',
            'form.phone': 'Phone',
            'form.subject': 'Subject',
            'form.select.subject': 'Select a subject',
            'form.option.consultation': 'Consultation request',
            'form.option.product': 'Product information',
            'form.option.service': 'Service information',
            'form.option.devis': 'Quote request',
            'form.option.other': 'Other request',
            'form.message': 'Message',
            'form.send': 'Send message',

            // CTA
            'cta.call': 'Prefer to call us?',
            'cta.call_sub': 'Our team is available to answer your questions Monday to Saturday.',
            'cta.contact_us': 'Get in touch',

            // Footer
            'footer.links': 'Quick links',
            'footer.services': 'Services',
            'footer.newsletter_title': 'Newsletter',
            'footer.newsletter': 'Subscribe to receive our latest news and special offers.',
            'footer.subscribe': 'Subscribe',
            'footer.copy': '© 2026 Technologie Medical Company Sarl. All rights reserved.',
            'footer.legal': 'Legal notices',
            'footer.privacy': 'Privacy policy',
            'footer.cgv': 'Terms & Conditions',
            'footer.language': 'Language',

            // ============================================
            // LEGAL PAGE
            // ============================================
            'legal.title': 'Legal notices',
            'legal.subtitle': 'In accordance with the legal provisions in force in Cameroon, we inform you of the following elements.',
            'legal.last_update': 'Last updated:',

            'legal.section1.title': '1. Publisher of the site',
            'legal.section1.company': 'Company name:',
            'legal.section1.form': 'Legal form:',
            'legal.section1.capital': 'Share capital:',
            'legal.section1.rc': 'Trade register:',
            'legal.section1.tax': 'Tax number:',
            'legal.section1.address': 'Head office:',
            'legal.section1.phone': 'Phone:',
            'legal.section1.email': 'Email:',
            'legal.section1.director': 'Publication director:',

            'legal.section2.title': '2. Host of the site',
            'legal.section2.name': 'Name:',
            'legal.section2.address': 'Address:',
            'legal.section2.phone': 'Phone:',
            'legal.section2.email': 'Email:',

            'legal.section3.title': '3. Intellectual property',
            'legal.section3.p1': 'All content of the site tmsarl.com (texts, images, videos, logos, icons, graphics, etc.) is the exclusive property of TMS SARL, unless explicitly stated otherwise.',
            'legal.section3.p2': 'Any reproduction, representation, modification, publication, adaptation of all or part of the elements of the site, regardless of the means or process used, is prohibited without prior written authorization from TMS SARL.',
            'legal.section3.p3': 'The trademarks and logos present on the site are registered and protected. Any unauthorized use constitutes counterfeiting and is subject to legal proceedings.',

            'legal.section4.title': '4. Responsibility',
            'legal.section4.p1': 'TMS SARL strives to provide as accurate and up-to-date information as possible. However, it cannot guarantee the accuracy, completeness or timeliness of the information published on the site.',
            'legal.section4.important': 'Important:',
            'legal.section4.important_text': 'The information on this site is provided for information purposes only and may be modified without notice. TMS SARL declines all responsibility for any direct or indirect damage resulting from the use of the site or the information it contains.',
            'legal.section4.p2': 'TMS SARL cannot be held responsible for any viruses or other infectious elements that may affect your computer system following consultation of the site.',

            'legal.section5.title': '5. External links',
            'legal.section5.p1': 'The site may contain hypertext links to other websites. TMS SARL does not exercise any control over these sites and declines all responsibility for their content, availability or operation.',
            'legal.section5.p2': 'The presence of external links does not in any way constitute an endorsement or recommendation of their content by TMS SARL.',

            'legal.section6.title': '6. Personal data',
            'legal.section6.p1': 'In accordance with Law No. 2011/014 of December 14, 2011 on the protection of personal data in Cameroon, TMS SARL is committed to respecting the privacy of users of its site.',
            'legal.section6.p2': 'The personal data collected via the contact form (name, email, phone) are used only to respond to user requests and are in no case transmitted to third parties.',
            'legal.section6.p3': 'In accordance with the legislation, you have the right to access, rectify and delete data concerning you. To exercise these rights, contact us at: contact@tmsarl.com.',
            'legal.section6.p4': 'For more information, please see our Privacy Policy.',

            'legal.section7.title': '7. Cookies',
            'legal.section7.p1': 'The site uses cookies to improve the user experience and analyze traffic. Cookies are small text files stored on your device when you visit the site.',
            'legal.section7.p2': 'You can at any time configure your browser to refuse cookies. However, this could limit certain features of the site.',

            'legal.section8.title': '8. Applicable law',
            'legal.section8.p1': 'These legal notices are governed by Cameroonian law. Any dispute relating to the use of the site is subject to the jurisdiction of the courts of Yaoundé, Cameroon.',

            'legal.section9.title': '9. Contact',
            'legal.section9.p1': 'For any questions regarding the legal notices of the site, you can contact us:',
            'legal.section9.email': 'By email:',
            'legal.section9.phone': 'By phone:',
            'legal.section9.mail': 'By mail:',

            // ============================================
            // PRIVACY PAGE
            // ============================================
            'privacy.title': 'Privacy policy',
            'privacy.subtitle': 'We are committed to protecting your personal data in accordance with applicable Cameroonian legislation.',
            'privacy.last_update': 'Last updated:',

            'privacy.section1.title': '1. Introduction',
            'privacy.section1.p1': 'Technologie Médicale Company SARL (TMS SARL) places particular importance on the protection of your personal data. This privacy policy informs you about how we collect, use, store and protect your information when you use our website.',
            'privacy.section1.p2': 'We are committed to respecting Law No. 2011/014 of December 14, 2011 on the protection of personal data in Cameroon, as well as the fundamental principles of data protection.',

            'privacy.section2.title': '2. Data collected',
            'privacy.section2.p1': 'We collect the following personal data when you interact with our site:',

            'privacy.table.type': 'Data type',
            'privacy.table.examples': 'Examples',
            'privacy.table.purpose': 'Purpose',
            'privacy.table.row1.type': 'Identification data',
            'privacy.table.row1.examples': 'Name, first name, email, phone',
            'privacy.table.row1.purpose': 'Respond to your requests',
            'privacy.table.row2.type': 'Browsing data',
            'privacy.table.row2.examples': 'IP address, cookies, pages visited',
            'privacy.table.row2.purpose': 'Improve user experience',
            'privacy.table.row3.type': 'Communication data',
            'privacy.table.row3.examples': 'Messages via the contact form',
            'privacy.table.row3.purpose': 'Manage your requests',

            'privacy.important': 'Important:',
            'privacy.important_text': 'We only collect data strictly necessary for the purposes described above.',

            'privacy.section3.title': '3. Use of data',
            'privacy.section3.p1': 'TMS SARL uses your personal data exclusively for:',
            'privacy.section3.list1': 'Respond to your requests via the contact form',
            'privacy.section3.list2': 'Send you information about our products and services (with your consent)',
            'privacy.section3.list3': 'Improve and personalize your experience on our site',
            'privacy.section3.list4': 'Analyze site traffic and performance',
            'privacy.section3.list5': 'Comply with our legal and regulatory obligations',

            'privacy.section4.title': '4. Storage and security',
            'privacy.section4.p1': 'Your personal data is stored on secure servers and is only kept for as long as necessary to fulfill the purposes for which it was collected.',
            'privacy.section4.p2': 'We implement appropriate technical and organizational measures to protect your data against:',
            'privacy.section4.list1': 'Loss or accidental destruction',
            'privacy.section4.list2': 'Unauthorized access',
            'privacy.section4.list3': 'Unauthorized disclosure or modification',
            'privacy.section4.p3': 'The retention period for data varies according to its nature:',
            'privacy.section4.duration1': 'Contact data: 3 years from last contact',
            'privacy.section4.duration2': 'Browsing data: 13 months maximum',
            'privacy.section4.duration3': 'Communication data: 5 years for important exchanges',

            'privacy.section5.title': '5. Your rights',
            'privacy.section5.p1': 'In accordance with Cameroonian data protection law, you have the following rights:',
            'privacy.section5.right1': 'Right of access: You can obtain a copy of your personal data',
            'privacy.section5.right2': 'Right of rectification: You can modify inaccurate or incomplete data',
            'privacy.section5.right3': 'Right to erasure: You can request the deletion of your data',
            'privacy.section5.right4': 'Right to object: You can object to the use of your data',
            'privacy.section5.right5': 'Right to portability: You can retrieve your data in a readable format',
            'privacy.section5.p2': 'To exercise these rights, contact us at:',
            'privacy.response_time': 'Response time:',
            'privacy.response_time_text': 'We process your request within a maximum of 30 days.',

            'privacy.section6.title': '6. Cookies',
            'privacy.section6.p1': 'Our site uses cookies to improve your browsing experience. Cookies are small text files stored on your device.',
            'privacy.section6.sub1': '6.1 Types of cookies used',
            'privacy.section6.cookie1': 'Essential cookies: Necessary for the operation of the site',
            'privacy.section6.cookie2': 'Functional cookies: Improve user experience',
            'privacy.section6.cookie3': 'Analytical cookies: Help us understand site usage',
            'privacy.section6.sub2': '6.2 Cookie management',
            'privacy.section6.p2': 'You can configure your browser to refuse cookies or be alerted when they are placed. Please note that disabling cookies may limit certain features of the site.',

            'privacy.section7.title': '7. Sharing with third parties',
            'privacy.section7.p1': 'TMS SARL does not sell, rent or share your personal data with third parties for commercial purposes.',
            'privacy.section7.p2': 'However, we may be required to share your data with:',
            'privacy.section7.list1': 'Our technical service providers (hosting, maintenance)',
            'privacy.section7.list2': 'The competent authorities in case of legal obligation',
            'privacy.section7.p3': 'In all cases, we ensure that third parties respect the confidentiality and security of your data.',

            'privacy.section8.title': '8. Transaction security',
            'privacy.section8.p1': 'Although our site does not currently offer online transactions, we apply rigorous security measures to protect all communications between your browser and our server.',
            'privacy.section8.p2': 'Our site uses the HTTPS protocol to ensure the encryption of your data during transmission.',

            'privacy.section9.title': '9. Policy changes',
            'privacy.section9.p1': 'TMS SARL reserves the right to modify this privacy policy at any time. Changes will be published on this page with an update date.',
            'privacy.section9.p2': 'We encourage you to check this page regularly to be aware of any changes.',

            'privacy.section10.title': '10. Contact',
            'privacy.section10.p1': 'For any questions regarding this privacy policy or the exercise of your rights, you can contact us:',
            'privacy.section10.email': 'Email:',
            'privacy.section10.phone': 'Phone:',
            'privacy.section10.address': 'Address:',

            // ============================================
            // CGV PAGE
            // ============================================
            'cgv.title': 'Terms & Conditions of Sale',
            'cgv.subtitle': 'These Terms & Conditions of Sale govern the contractual relations between TMS SARL and its clients.',
            'cgv.last_update': 'Last updated:',

            'cgv.article1.title': 'Article 1: Scope of application',
            'cgv.article1.p1': 'These Terms & Conditions of Sale (T&C) apply to all sales of products and services carried out by Technologie Médicale Company SARL (TMS SARL), registered in the Yaoundé Trade Register under number RC/YAO/2023/B-XXX.',
            'cgv.article1.p2': 'Any order placed with TMS SARL implies the unconditional acceptance of these T&C by the client.',
            'cgv.article1.warning': 'Warning:',
            'cgv.article1.warning_text': 'These T&C prevail over any other condition, except prior written agreement from TMS SARL.',

            'cgv.article2.title': 'Article 2: Products and services',
            'cgv.article2.sub1': '2.1. Product description',
            'cgv.article2.p1': 'TMS SARL offers a range of medical and laboratory equipment, including:',
            'cgv.article2.list1': 'Diagnostic equipment (microscopes, ECG, MRI, scanners)',
            'cgv.article2.list2': 'Laboratory equipment (autoclaves, centrifuges, analyzers)',
            'cgv.article2.list3': 'Surgical equipment (operating tables, surgical lights)',
            'cgv.article2.list4': 'Medical equipment (beds, wheelchairs, stretchers)',
            'cgv.article2.list5': 'Maintenance and training services',
            'cgv.article2.sub2': '2.2. Characteristics',
            'cgv.article2.p2': 'The product characteristics are presented on our website. Photos are provided for information only and are not contractual.',
            'cgv.article2.p3': 'TMS SARL strives to keep product information up to date, but cannot guarantee the absence of errors or omissions.',

            'cgv.article3.title': 'Article 3: Orders',
            'cgv.article3.sub1': '3.1. Order process',
            'cgv.article3.p1': 'Orders can be placed by:',
            'cgv.article3.list1': 'Email: contact@tmsarl.com',
            'cgv.article3.list2': 'Phone: +237 699 248 832',
            'cgv.article3.list3': 'Contact form on our site',
            'cgv.article3.sub2': '3.2. Validation',
            'cgv.article3.p2': 'Any order is only final after written confirmation from TMS SARL and acceptance of the quote by the client. TMS SARL reserves the right to refuse any abnormal or non-compliant order.',
            'cgv.article3.confirmation': 'Confirmation:',
            'cgv.article3.confirmation_text': 'An order acknowledgment will be sent by email within 48 hours.',

            'cgv.article4.title': 'Article 4: Prices and payment',
            'cgv.article4.sub1': '4.1. Prices',
            'cgv.article4.p1': 'Prices are indicated in CFA francs (FCFA), excluding taxes. They are valid for the duration indicated on the quote, generally 30 days.',
            'cgv.article4.p2': 'TMS SARL reserves the right to modify its prices at any time, provided that the applicable price is that in effect at the time of order validation.',
            'cgv.article4.sub2': '4.2. Payment methods',
            'cgv.article4.p3': 'Payments can be made by:',
            'cgv.article4.payment1': 'Bank transfer',
            'cgv.article4.payment2': 'Certified check',
            'cgv.article4.payment3': 'Cash (within legal limits)',
            'cgv.article4.payment4': 'Mobile Money (Orange Money, MTN Mobile Money)',
            'cgv.article4.sub3': '4.3. Payment terms',
            'cgv.article4.condition1': 'Deposit: 30% upon ordering',
            'cgv.article4.condition2': 'Balance: 70% before delivery or upon delivery as agreed',

            'cgv.article5.title': 'Article 5: Delivery',
            'cgv.article5.sub1': '5.1. Deadlines',
            'cgv.article5.p1': 'Delivery times are indicative and depend on product availability. TMS SARL strives to meet the announced deadlines but cannot be held responsible for delays beyond its control.',
            'cgv.article5.sub2': '5.2. Delivery costs',
            'cgv.article5.p2': 'Delivery costs are the responsibility of the client, unless otherwise stated on the quote. A transport quote will be provided before order validation.',
            'cgv.article5.sub3': '5.3. Receipt',
            'cgv.article5.p3': 'The client is required to check the condition of the products upon receipt. Any reservations must be made in writing within 48 hours of delivery.',

            'cgv.article6.title': 'Article 6: Warranty and after-sales service',
            'cgv.article6.sub1': '6.1. Legal warranty',
            'cgv.article6.p1': 'TMS SARL guarantees its products against any manufacturing defect for a period of 12 months from the delivery date, in accordance with Cameroonian legislation.',
            'cgv.article6.sub2': '6.2. After-Sales Service',
            'cgv.article6.p2': 'TMS SARL provides after-sales service for all its products, including:',
            'cgv.article6.sav1': 'Preventive and corrective maintenance',
            'cgv.article6.sav2': 'Supply of spare parts',
            'cgv.article6.sav3': 'Remote technical assistance',
            'cgv.article6.sav4': 'User training',
            'cgv.article6.sav_contact': 'After-Sales Service Contact: +237 699 248 832 - sav@tmsarl.com',

            'cgv.article7.title': 'Article 7: Withdrawal and return',
            'cgv.article7.sub1': '7.1. Right of withdrawal',
            'cgv.article7.p1': 'In accordance with the law, the client has a period of 14 days from receipt of the products to exercise their right of withdrawal.',
            'cgv.article7.sub2': '7.2. Return conditions',
            'cgv.article7.p2': 'Returned products must be:',
            'cgv.article7.return1': 'In their original packaging',
            'cgv.article7.return2': 'In perfect resale condition',
            'cgv.article7.return3': 'Accompanied by all accessories and documents',
            'cgv.article7.p3': 'Return costs are the responsibility of the client, except in the case of a defective product.',

            'cgv.article8.title': 'Article 8: Liability',
            'cgv.article8.p1': 'TMS SARL does everything possible to ensure the conformity of the products delivered. Its liability cannot be incurred in the event of:',
            'cgv.article8.list1': 'Non-compliant use of products',
            'cgv.article8.list2': 'Defects attributable to the client (poor installation, inappropriate use)',
            'cgv.article8.list3': 'Indirect or immaterial damages',
            'cgv.article8.list4': 'Cases of force majeure',

            'cgv.article9.title': 'Article 9: Intellectual property',
            'cgv.article9.p1': 'All content on the site (texts, images, logos, brands) is the exclusive property of TMS SARL. Any reproduction, modification or use without authorization is prohibited.',

            'cgv.article10.title': 'Article 10: Personal data',
            'cgv.article10.p1': 'The personal data collected is processed in accordance with Cameroonian data protection law. For more information, please see our Privacy Policy.',

            'cgv.article11.title': 'Article 11: Applicable law and disputes',
            'cgv.article11.p1': 'These T&C are governed by Cameroonian law. Any dispute relating to their interpretation or execution is subject to the jurisdiction of the courts of Yaoundé, Cameroon.',

            'cgv.article12.title': 'Article 12: Contact',
            'cgv.article12.p1': 'For any questions regarding these T&C, you can contact us:',
            'cgv.article12.email': 'Email:',
            'cgv.article12.phone': 'Phone:',
            'cgv.article12.address': 'Address:'
        }
    };

    // Applique les traductions
    function applyTranslations(lang) {
        if (!translations[lang]) {
            lang = 'fr';
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = translations[lang] && translations[lang][key];

            if (translation) {
                // Si l'élément contient du HTML, on le remplace intelligemment
                if (el.children.length === 0) {
                    el.textContent = translation;
                } else {
                    // Pour les éléments avec des enfants, on cherche les enfants avec data-i18n
                    const childrenWithI18n = el.querySelectorAll('[data-i18n]');
                    if (childrenWithI18n.length > 0) {
                        childrenWithI18n.forEach(child => {
                            const childKey = child.getAttribute('data-i18n');
                            const childTranslation = translations[lang] && translations[lang][childKey];
                            if (childTranslation) {
                                child.textContent = childTranslation;
                            }
                        });
                    } else {
                        // Si pas d'enfant avec data-i18n, on remplace le contenu textuel
                        el.textContent = translation;
                    }
                }
            }
        });

        // Mettre à jour les toggles
        const toggle = document.getElementById('lang-toggle');
        if (toggle) {
            toggle.checked = (lang === 'en');
        }
        const toggleMobile = document.getElementById('lang-toggle-mobile');
        if (toggleMobile) {
            toggleMobile.checked = (lang === 'en');
        }
    }

    // Récupère la langue à utiliser
    function getStoredLanguage() {
        return localStorage.getItem('tms_lang') || 'fr';
    }

    function setStoredLanguage(lang) {
        localStorage.setItem('tms_lang', lang);
    }

    // Change la langue
    function setLanguage(lang) {
        if (!translations[lang]) {
            lang = 'fr';
        }
        applyTranslations(lang);
        setStoredLanguage(lang);
        document.documentElement.lang = lang;

        // Mettre à jour les toggles
        const toggle = document.getElementById('lang-toggle');
        if (toggle) {
            toggle.checked = (lang === 'en');
        }
        const toggleMobile = document.getElementById('lang-toggle-mobile');
        if (toggleMobile) {
            toggleMobile.checked = (lang === 'en');
        }

        // Déclencher un événement pour les autres scripts
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    // Initialisation
    function initI18n() {
        const toggle = document.getElementById('lang-toggle');
        if (toggle) {
            toggle.addEventListener('change', function() {
                const lang = this.checked ? 'en' : 'fr';
                setLanguage(lang);
            });
        }

        const toggleMobile = document.getElementById('lang-toggle-mobile');
        if (toggleMobile) {
            toggleMobile.addEventListener('change', function() {
                const lang = this.checked ? 'en' : 'fr';
                setLanguage(lang);
            });
        }

        // Détection automatique
        const savedLang = getStoredLanguage();
        const browserLang = navigator.language && navigator.language.startsWith('en') ? 'en' : 'fr';
        const initialLang = savedLang || browserLang;

        setLanguage(initialLang);
    }

    // Exposer l'API
    window.TMS_I18N = {
        translations: translations,
        setLanguage: setLanguage,
        getCurrentLanguage: getStoredLanguage,
        applyTranslations: applyTranslations
    };

    // Démarrer au chargement du DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initI18n);
    } else {
        initI18n();
    }

})();