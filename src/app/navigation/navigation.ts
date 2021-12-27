import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'profil',
        title    : 'Profil',
        translate: 'NAV.PROFIL',
        type     : 'group',
        children : [
            {
                id       : 'joueur',
                title    : 'Joueur',
                translate: 'NAV.JOUEUR',
                type     : 'item',
                icon     : 'work',
                url      : '/pages/professionel',
            }, 
            {
                id       : 'configuration',
                title    : 'Configuration',
                translate: 'NAV.CONFIGURATION',
                type     : 'collapsable',
                icon     : 'person',
                children : [
                    {
                        id        : 'edition',
                        title     : 'Edition',
                        type      : 'item',
                        url       : '/pages/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id        : 'configuration',
                        title     : 'Configuration',
                        translate : 'NAV.CONFIGURATION',
                        type      : 'item',
                        url       : '/pages/configuration',
                        exactMatch: true
                    },
                    {
                        id        : 'vieprivee',
                        title     : 'Vie Privee',
                        type      : 'item',
                        url       : '/pages/e-commerce/products/1/printed-dress',
                        exactMatch: true
                    },
                    {
                        id        : 'recherche',
                        title     : 'Recherche',
                        type      : 'item',
                        url       : '/pages/e-commerce/orders',
                        exactMatch: true
                    }
                ]
            },        
            {
                id       : 'professionel',
                title    : 'Professionel',
                translate: 'NAV.PROFESSIONAL',
                type     : 'item',
                icon     : 'work',
                url      : '/pages/professionel',
            },
            {
                id       : 'contacts',
                title    : 'Contacts',
                translate: 'NAV.CONTACTS',
                type     : 'item',
                icon     : 'work',
                url      : '/pages/contacts',
            }
        ]
    },
    {
        id       : 'sport',
        title    : 'Sport',
        translate: 'NAV.SPORT',
        type     : 'group',
        children : [
            {
                id       : 'profil',
                title    : 'Profil',
                translate: 'NAV.PROFIL',
                type     : 'collapsable',
                icon     : 'person',
                children : [
                    {
                        id        : 'edition',
                        title     : 'Edition',
                        type      : 'item',
                        url       : '/pages/e-commerce/products',
                        exactMatch: true
                    }
                ]
            },
        ]
    },
    {
        id       : 'equipe',
        title    : 'Equipe',
        translate: 'NAV.EQUIPE',
        type     : 'group',
        children : [
            {
                id       : 'equipe',
                title    : 'Equipe',
                translate: 'NAV.EQUIPE',
                type     : 'item',
                icon     : 'email',
                url      : '/pages/equipe',
                badge    : {
                    title    : '25',
                    translate: 'NAV.EQUIPE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'association',
                title    : 'Association',
                translate: 'NAV.ASSOCIATION',
                type     : 'item',
                icon     : 'group',
                url      : '/pages/association',
            },
            {
                id       : 'entreprise',
                title    : 'Entreprise',
                translate: 'NAV.ENTREPRISE',
                type     : 'item',
                icon     : 'business',
                url      : '/pages/entreprise',
            }
        ]
    },
    {
        id       : 'commerce',
        title    : 'Commerce',
        translate: 'NAV.ECOMMERCE',
        type     : 'group',
        children : [
            {
                id       : 'vendre',
                title    : 'Vendre',
                translate: 'NAV.ECOMMERCE',
                type     : 'collapsable',
                icon     : 'shopping_cart',
                children : [
                    {
                        id        : 'products',
                        title     : 'Products',
                        type      : 'item',
                        url       : '/pages/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id        : 'productDetail',
                        title     : 'Product Detail',
                        type      : 'item',
                        url       : '/pages/e-commerce/products/1/printed-dress',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'Orders',
                        type      : 'item',
                        url       : '/pages/e-commerce/orders',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Order Detail',
                        type      : 'item',
                        url       : '/pages/e-commerce/orders/1',
                        exactMatch: true
                    }
                ]
            },
            {
                id       : 'acheter',
                title    : 'Acheter',
                translate: 'NAV.ECOMMERCE',
                type     : 'collapsable',
                icon     : 'person',
                children : [
                    {
                        id        : 'edition',
                        title     : 'Edition',
                        type      : 'item',
                        url       : '/pages/e-commerce/products',
                        exactMatch: true
                    }
                ]
            },
        ]
    }
];
