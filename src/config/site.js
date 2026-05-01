// src/config/site.js

// Helper to safely parse boolean strings from .env
const parseBool = (value, fallback = false) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return fallback;
};

export const siteConfig = {
  // Environment Context
  isDev: import.meta.env.MODE === 'development',
  isProd: import.meta.env.MODE === 'production',

  // Site Identity
  name: import.meta.env.VITE_SITE_NAME || 'LegalSupportNow',
  url: import.meta.env.VITE_SITE_URL || 'http://localhost:5000',
  description: import.meta.env.VITE_SITE_DESCRIPTION || 'Criminal defense law firm serving Delhi NCR.',

  // Contact Info
  contact: {
    phone: import.meta.env.VITE_CONTACT_PHONE,
    phoneDisplay: import.meta.env.VITE_CONTACT_PHONE_DISPLAY,
    email: import.meta.env.VITE_CONTACT_EMAIL,
    address: import.meta.env.VITE_CONTACT_ADDRESS,
    mapsUrl: import.meta.env.VITE_CONTACT_MAPS_URL,
    whatsapp: {
      number: import.meta.env.VITE_WHATSAPP_NUMBER,
      defaultMessage: encodeURIComponent(import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE || ''),
    }
  },

  // Business Hours
  hours: import.meta.env.VITE_BUSINESS_HOURS || 'Mon-Sat: 9AM-7PM',

  // Social
  social: {
    facebook: import.meta.env.VITE_SOCIAL_FACEBOOK,
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM,
    linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN,
    youtube: import.meta.env.VITE_SOCIAL_YOUTUBE,
  },

  // Analytics
  analytics: {
    gaId: import.meta.env.VITE_GA_MEASUREMENT_ID,
    gtmId: import.meta.env.VITE_GTM_ID,
    metaId: import.meta.env.VITE_META_PIXEL_ID,
    clarityId: import.meta.env.VITE_CLARITY_ID,
  },

  // Forms
  forms: {
    web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY,
    recaptchaKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  },

  // SEO Schema
  schema: {
    lawyerName: import.meta.env.VITE_SCHEMA_LAWYER_NAME,
    barId: import.meta.env.VITE_SCHEMA_BAR_ID,
    foundingYear: import.meta.env.VITE_SCHEMA_FOUNDING_YEAR,
  },

  // Features
  features: {
    whatsappWidget: parseBool(import.meta.env.VITE_ENABLE_WHATSAPP_WIDGET, true),
    liveChat: parseBool(import.meta.env.VITE_ENABLE_LIVE_CHAT, false),
    blog: parseBool(import.meta.env.VITE_ENABLE_BLOG, true),
    maintenance: parseBool(import.meta.env.VITE_MAINTENANCE_MODE, false),
  }
};
