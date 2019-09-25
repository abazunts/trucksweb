import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
// import registerServiceWorker from './registerServiceWorker';
import common_ar from "./translations/ar/common.json";
import common_en from "./translations/en/common.json";

import 'react-table/react-table.css'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en
    },
    ar: {
      common: common_ar
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next} initialLanguage={'en'}>
    <App />
  </I18nextProvider>,
  document.getElementById('root'));
// registerServiceWorker();
