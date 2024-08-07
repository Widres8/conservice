import type { NavigationLink } from '../models/menu.model';

export const MAIN: NavigationLink[] = [
    {
        name: 'Inicio',
        url: '/',
    },
    {
        name: 'Conocenos',
        url: '/about',
    },
    {
        name: 'Servicios',
        url: '/services',
    },
    // {
    //     name: 'Contacto',
    //     url: '/contact',
    // },
];

export const FOOTER: NavigationLink[] = [
    {
        name: 'Compañia',
        url: '#',
        children: [
            {
                name: 'Conocenos',
                url: '/about',
            },
            {
                name: 'Servicios',
                url: '/services',
            },
            // {
            //     name: 'Contacto',
            //     url: '/contact',
            // },
        ],
    },
    {
        name: 'Soporte',
        url: '#',
        children: [
            {
                name: 'Politica de privacidad',
                url: '/privacy-policy',
            },
            {
                name: 'Terminos y condiciones',
                url: '/terms-conditions',
            },
        ],
    },
];
