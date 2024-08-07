import favicon from '@images/icons/favicon.svg';
import logo from '@images/logos/logo.svg';

export const SITE = {
    title: 'Conservice',
    tagline: 'Especialistas en construcción y remodelación',
    description: 'Conservice ofrece servicios de construcción con expertos para satisfacer todas las necesidades de su proyecto. Comience a explorar y comuníquese con nuestro equipo para obtener calidad y confiabilidad superiores.',
    description_short: 'Conservice ofrece servicios de construcción con expertos para satisfacer todas las necesidades de su proyecto.',
    url: 'https://conservice.com.co/',
    author: 'https://widres8.github.io/',
    favicon: favicon,
    faviconSvg: favicon,
    logo: logo,
    logo_width: 300,
    logo_height: 80,
    logo_text: 'Conservice',
};

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        inLanguage: 'es-CO',
        '@id': SITE.url,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        isPartOf: {
            '@type': 'WebSite',
            url: SITE.url,
            name: SITE.title,
            description: SITE.description,
        },
    },
};

export const OG = {
    locale: 'en_US',
    type: 'website',
    url: SITE.url,
    siteName: SITE.title,
    title: `${SITE.title}: : Hardware Tools & Construction Services`,
    description:
        "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
};
