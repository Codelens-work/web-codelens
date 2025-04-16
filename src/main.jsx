import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next';
import { BlogProvider } from './context/BlogContext.jsx';
import i18n from './i18n';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BlogProvider>
    <App />
    </BlogProvider>
    </I18nextProvider>
  </StrictMode>
)
