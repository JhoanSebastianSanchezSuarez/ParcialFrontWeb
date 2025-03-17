import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es: {
        translation: {
            /*Login*/
            "username": "Usuario",
            "password": "Contraseña",
            "login": "Inicia sesión",
            /*home*/
            "menu": "MENÚ",
            "stores": "TIENDAS",
            "cart": "CARRITO",
            /*error*/
            "error":"La contraseña debe tener entre 5 y 8 caracteres."
        }
    },
    en: {
        translation: {
            /*Login*/
            "username": "Username",
            "password": "Password",
            "login": "Login",
            /*home*/
            "menu": "MENU",
            "stores": "STORES",
            "cart": "CART",
            /*error*/
            "error":"Password must have between 5 and 8 characters."
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    })
    .then(() => console.log("i18n cargado correctamente"))
    .catch((error) => console.error("Error cargando i18n:", error));
export default i18n;