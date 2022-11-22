import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  ro: {
    translation: {
      register_title: "Înregistreaza-te",
      'firstName': 'nume',
      'lastName': 'prenume',
      'email': 'email',
      'confirmEmail': 'confirmare email',
      'password': 'parola',
      'confirmPassword': 'confirmare parola',
      'register_btn': 'înregistrează-te',
      'Login_title':'Autentificăte-te',
      'Login_button':'Autentificăte-te',
    },
  },
  en: {
    translation: {
      register_title: "Register",
      'firstName': '',
      'lastName': '',
      'email': '',
      'confirmEmail': '',
      'password': '',
      'confirmPassword': '',
      
    },
  },
};
i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "ro",
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });
export default i18next;