import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        }
    },
    language: {
        default: "es",
        translations: {
            es: {
                consentModal: {
                    title: "Antes de continuar",
                    description: "Usamos cookies para mejorar tu experiencia. Algunas de estas cookies son esenciales para el funcionamiento de la web, mientras que otras nos ayudan a mejorar tu experiencia.",
                    acceptAllBtn: "Aceptar",
                },
                preferencesModal: {
                    title: "Preferencias de Consentimiento",
                    acceptAllBtn: "Aceptar todo",
                    closeIconLabel: "Cerrar modal",
                    serviceCounterLabel: "Servicios",
                    sections: [
                        {
                            title: "Uso de Cookies",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        },
                        {
                            title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Más información",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                        }
                    ]
                }
            }
        }
    },
    disablePageInteraction: true
});
