import { createContext, createElement, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'lsn_lang'

const dict = {
  hi: {
    nav: {
      home: 'होम',
      practice: 'प्रैक्टिस एरिया',
      about: 'हमारे बारे में',
      blog: 'ब्लॉग',
      contact: 'संपर्क',
      cta: 'अभी कानूनी मदद लें',
    },
    common: {
      whatsapp: 'व्हाट्सऐप',
      callNow: 'अभी कॉल करें',
      readArticle: 'लेख पढ़ें',
      backToBlog: 'ब्लॉग पर वापस जाएँ',
      verifiedClient: 'सत्यापित क्लाइंट',
    },
    home: {
      seoTitle: 'तत्काल मामलों के लिए कानूनी मदद',
      seoDesc:
        'क्रिमिनल डिफेंस प्राथमिकता के साथ तेज़, स्पष्ट और भरोसेमंद कानूनी सहायता।',
      heroEyebrow: 'क्रिमिनल डिफेंस प्राथमिकता • तत्काल प्रतिनिधित्व',
      heroTitle:
        'स्पष्ट कानूनी रणनीति, तेज़ कार्रवाई, और व्यवस्थित केस तैयारी।',
      heroDesc:
        'LegalSupportNow उन लोगों के लिए है जिन्हें निर्णायक कानूनी मदद चाहिए—खासकर क्रिमिनल मामलों में। पहली कॉल से अगले कदम तक, हम आपको स्पष्टता और गति के साथ गाइड करते हैं।',
      heroPrimaryCta: 'अभी कानूनी मदद लें',
      heroSecondaryCta: 'व्हाट्सऐप पर सलाह',
      stats1k: '12+',
      stats1v: 'वर्षों का अनुभव',
      stats2k: '1,500+',
      stats2v: 'केस मार्गदर्शन व दस्तावेज़ीकरण',
      stats3k: 'तेज़',
      stats3v: 'तत्काल केस रूटिंग',
      successEyebrow: 'सफलता',
      successTitle: 'तैयारी और टाइमिंग पर आधारित रिकॉर्ड',
      successDesc:
        'परिणाम तथ्य, क्षेत्राधिकार और कोर्ट के विवेक पर निर्भर करते हैं। हमारा फोकस प्रक्रिया पर है: दस्तावेज़, तात्कालिकता, और कोर्ट-रेडी रणनीति।',
      successMetric1k: '700+',
      successMetric1v: 'क्रिमिनल मामलों में मार्गदर्शन',
      successMetric2k: 'मज़बूत',
      successMetric2v: 'बेल सफलता (केस-विशिष्ट)',
      successMetric3k: '24–48h',
      successMetric3v: 'तत्काल एक्शन विंडो',
      successListTitle: 'हम आमतौर पर जिन परिणामों में मदद करते हैं',
      successItems: [
        'बेल ड्राफ्टिंग, दस्तावेज़ीकरण और त्वरित पैरवी',
        'FIR समीक्षा और प्रक्रिया-गलतियों से बचने की रणनीति',
        'एविडेंस चेकलिस्ट ताकि विरोधाभास/देरी कम हो',
        'हियरिंग तैयारी: क्या फाइल करें, कब, और क्यों',
      ],
      successPanelEyebrow: 'यहाँ “सफलता” का अर्थ',
      successPanelTitle: 'स्पष्टता + टाइमिंग + कोर्ट-रेडी दस्तावेज़।',
      successPanelDesc:
        'हम संरचित इंटेक, एविडेंस प्रिज़र्वेशन और एक साफ़ नैरेटिव पर ध्यान देते हैं—खासकर जब समय कम हो।',
      successPanelCta: 'केस इंटेक शुरू करें',
      practiceEyebrow: 'प्रैक्टिस एरिया',
      practiceTitle: 'वास्तविक टाइमलाइनों के अनुसार सपोर्ट',
      practiceDesc:
        'हर मामले की शुरुआत दस्तावेज़, रिस्क आकलन और व्यावहारिक अगले कदम से होती है। क्रिमिनल लॉ हमारा प्राथमिक फोकस है।',
      trustEyebrow: 'भरोसा • प्रक्रिया',
      trustTitle: 'पेशेवर, गोपनीय, और तथ्यों पर आधारित',
      trustDesc:
        'हम अनुमान नहीं लगाते। हम तथ्य दर्ज करते हैं, रिस्क देखते हैं, और ऐसी रणनीति बनाते हैं जो कोर्ट में टिक सके।',
      trustBlocks: [
        {
          t: 'केस इंटेक और दस्तावेज़ीकरण',
          d: 'संरचित सवाल और डॉक्यूमेंट रिव्यू ताकि अस्पष्टता कम हो।',
        },
        {
          t: 'एक्शन-फर्स्ट क्रिमिनल डिफेंस',
          d: 'बेल रणनीति, कोर्ट प्लानिंग, और तात्कालिक समय-सीमाओं के अनुसार समन्वय।',
        },
        {
          t: 'स्पष्ट अपडेट और अगले कदम',
          d: 'आपको संक्षिप्त अपडेट और निर्णय-बिंदु मिलते हैं—बिना क्लटर।',
        },
      ],
      speedEyebrow: 'गति',
      speedTitle: 'तेज़ प्रतिक्रिया, संरचित वर्कफ़्लो।',
      speedDesc:
        'जब मामला तात्कालिक हो (अरेस्ट रिस्क, सक्रिय FIR, 24–48 घंटे में हियरिंग), गति तभी काम आती है जब प्रक्रिया अनुशासित हो।',
      speedSteps: [
        {
          t: '10–20 मिनट ट्रायज कॉल',
          d: 'लोकेशन, सेक्शन, तात्कालिकता और अगले कदम समझने के लिए।',
        },
        {
          t: 'लिखित डॉक्यूमेंट चेकलिस्ट',
          d: 'क्या शेयर करें और क्या नहीं—यह स्पष्ट रूप से मिलता है।',
        },
        {
          t: 'तत्काल मामलों में उसी दिन एक्शन',
          d: 'ड्राफ्टिंग, फाइलिंग तैयारी, और कोर्ट टाइमलाइन के अनुसार समन्वय।',
        },
      ],
      speedPrimaryCta: 'तत्काल कॉल-बैक माँगें',
      testimonialsEyebrow: 'टेस्टिमोनियल्स',
      testimonialsTitle: 'वास्तविक दबाव में भरोसेमंद',
      testimonialsDesc:
        'क्लाइंट्स को सबसे ज़्यादा पसंद: स्पष्टता, गति, और कोर्ट-रेडी तैयारी।',
      readyEyebrow: 'शुरू करें',
      readyTitle: 'एक बातचीत में स्पष्ट अगला कदम पाएँ।',
      readyDesc:
        'अपना केस टाइप और संदर्भ साझा करें। हम प्लान, डॉक्यूमेंट चेकलिस्ट और (यदि तात्कालिक हो) तत्काल कदम बताएँगे।',
      readyPrimaryCta: 'अभी कानूनी मदद लें',
      readySecondaryCta: 'व्हाट्सऐप करें',
    },
    practice: {
      seoTitle: 'प्रैक्टिस एरिया',
      seoDesc:
        'क्रिमिनल लॉ प्राथमिकता के साथ—संरचित इंटेक, दस्तावेज़ और स्पष्ट अगले कदम।',
      eyebrow: 'प्रैक्टिस एरिया',
      title: 'फुल-स्पेक्ट्रम सपोर्ट, क्रिमिनल-फर्स्ट फोकस',
      desc:
        'हर एंगेजमेंट की शुरुआत संरचित इंटेक, डॉक्यूमेंट चेकलिस्ट और रिस्क आकलन से होती है। रणनीति स्पष्ट, टाइमलाइन वास्तविक, और कम्युनिकेशन अनुशासित।',
      mainFocus: 'मुख्य फोकस',
      ctaEyebrow: 'कन्फ्यूज़्ड हैं?',
      ctaTitle: 'अपनी स्थिति बताइए। हम सही रूट करेंगे।',
      ctaDesc:
        'मुख्य तथ्य, लोकेशन और तात्कालिकता साझा करें। हम सही प्रैक्टिस एरिया, डॉक्यूमेंट चेकलिस्ट और अगले कदम के साथ जवाब देंगे।',
      ctaPrimary: 'अभी कानूनी मदद लें',
    },
    about: {
      seoTitle: 'हमारे बारे में',
    },
    blog: {
      seoTitle: 'ब्लॉग',
      seoDesc:
        'क्लटर-फ्री लीगल इनसाइट्स—क्रिमिनल लॉ प्राथमिकता के साथ।',
      eyebrow: 'ब्लॉग',
      title: 'क्लटर के बिना व्यावहारिक लीगल इनसाइट्स',
      desc:
        'संक्षिप्त, संरचित लेख—दस्तावेज़, टाइमलाइन और अगले कदम पर फोकस।',
      all: 'सभी',
    },
    contact: {
      seoTitle: 'संपर्क',
      seoDesc:
        'तत्काल कानूनी सहायता के लिए संपर्क करें। केस टाइप साझा करें—हम स्पष्ट अगले कदम बताएँगे।',
      eyebrow: 'संपर्क',
      title: 'क्या हुआ—बताइए। हम अगला कदम गाइड करेंगे।',
      desc:
        'इस डेमो बिल्ड में कोई बैकएंड नहीं है—संदेश आपके डिवाइस पर ही रहता है। प्रोडक्शन में इसे सुरक्षित API से जोड़ा जा सकता है।',
      formTitle: 'केस इंटेक फॉर्म',
      formDesc:
        'लोकेशन, तात्कालिकता और मुख्य तथ्य साझा करें। हम चेकलिस्ट और अगले कदम के साथ फॉलो-अप करेंगे।',
      name: 'पूरा नाम',
      email: 'ईमेल',
      phone: 'फोन',
      caseType: 'केस प्रकार',
      message: 'संदेश',
      submit: 'रिक्वेस्ट सबमिट करें',
      sending: 'भेज रहे हैं…',
      whatsappInstead: 'व्हाट्सऐप करें',
      submitted: 'सबमिट हो गया। हम जल्द संपर्क करेंगे।',
      emergencyTitle: 'इमरजेंसी नोट',
      emergencyDesc:
        'यदि तुरंत अरेस्ट रिस्क, सक्रिय FIR, या 24–48 घंटे में हियरिंग है, तो तेज़ रूटिंग के लिए सीधे कॉल करें।',
      whatsappUrgent: 'व्हाट्सऐप पर तुरंत विवरण',
      contactDetails: 'संपर्क विवरण',
      privacyTitle: 'गोपनीयता',
      privacyDesc:
        'OTP, पासवर्ड या संवेदनशील दस्तावेज़ अनजान चैनलों पर न भेजें। हम बताएँगे क्या शेयर करना है और एविडेंस कैसे सुरक्षित रखना है।',
      placeholders: {
        name: 'उदा., रिया मल्होत्रा',
        email: 'उदा., riya.malhotra@email.com',
        phone: 'उदा., +91 98xxxxxx10',
        message: 'मुख्य तथ्य, लोकेशन, तात्कालिकता और किसी भी डेडलाइन/हियरिंग डेट बताइए।',
      },
      errors: {
        nameRequired: 'नाम आवश्यक है',
        emailRequired: 'ईमेल आवश्यक है',
        emailInvalid: 'सही ईमेल दर्ज करें',
        phoneRequired: 'फोन आवश्यक है',
        phoneInvalid: 'सही फोन नंबर दर्ज करें',
        messageRequired: 'संदेश आवश्यक है',
        messageMore: 'कृपया थोड़ी और जानकारी दें (25+ अक्षर)',
      },
    },
    footer: {
      desc:
        'LegalSupportNow क्रिमिनल डिफेंस और तात्कालिक प्रतिनिधित्व को प्राथमिकता देते हुए केंद्रित कानूनी मार्गदर्शन देता है। स्पष्ट रणनीति, वास्तविक टाइमलाइन, और मजबूत कोर्ट तैयारी।',
      quickLinks: 'त्वरित लिंक',
      contact: 'संपर्क',
      rights: 'सभी अधिकार सुरक्षित।',
      premiumTag: 'प्रीमियम लीगल सपोर्ट',
    },
  },
  en: {
    nav: {
      home: 'Home',
      practice: 'Practice Areas',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      cta: 'Get Legal Help Now',
    },
    common: {
      whatsapp: 'WhatsApp',
      callNow: 'Call now',
      readArticle: 'Read article',
      backToBlog: 'Back to Blog',
      verifiedClient: 'Verified client',
    },
    home: {
      seoTitle: 'Legal help for urgent cases',
      seoDesc:
        'Fast, clear, and trustworthy legal support with a criminal-defense priority.',
      heroEyebrow: 'Criminal defense priority • urgent representation',
      heroTitle: 'Clear legal strategy, fast action, and disciplined case preparation.',
      heroDesc:
        'LegalSupportNow is built for people who need decisive legal help—especially in criminal matters. From the first call to next steps, we guide you with clarity and speed.',
      heroPrimaryCta: 'Get Legal Help Now',
      heroSecondaryCta: 'WhatsApp Consultation',
      stats1k: '12+',
      stats1v: 'Years in practice',
      stats2k: '1,500+',
      stats2v: 'Cases guided & documented',
      stats3k: 'Fast',
      stats3v: 'Urgent response routing',
      successEyebrow: 'Success',
      successTitle: 'A track record built on preparation and timing',
      successDesc:
        'Outcomes depend on facts, jurisdiction, and court discretion. What we control is process: documentation, urgency, and courtroom-ready strategy.',
      successMetric1k: '700+',
      successMetric1v: 'Criminal matters guided',
      successMetric2k: 'Strong',
      successMetric2v: 'Bail success (case-specific)',
      successMetric3k: '24–48h',
      successMetric3v: 'Typical urgent action window',
      successListTitle: 'Common outcomes we support',
      successItems: [
        'Bail application drafted, documented, and argued with urgency',
        'FIR review and next-step strategy to avoid procedural mistakes',
        'Evidence checklist to reduce contradictions and delays',
        'Hearing preparation: what to file, when, and why',
      ],
      successPanelEyebrow: 'What “success” means here',
      successPanelTitle: 'Clarity + timing + court-ready documentation.',
      successPanelDesc:
        'We focus on structured intake, evidence preservation, and a clean narrative—especially where time is tight.',
      successPanelCta: 'Start case intake',
      practiceEyebrow: 'Practice areas',
      practiceTitle: 'Focused legal support, built for real timelines',
      practiceDesc:
        'Every matter starts with documentation, risk assessment, and a practical next-steps plan. Criminal law is our priority focus.',
      trustEyebrow: 'Trust & process',
      trustTitle: 'Professional, discreet, and built around evidence',
      trustDesc:
        'We don’t guess. We document the facts, assess risk, and build a step-by-step strategy that can stand in court.',
      trustBlocks: [
        {
          t: 'Case intake & documentation',
          d: 'Structured questions and document review to remove ambiguity early.',
        },
        {
          t: 'Action-first criminal defense',
          d: 'Bail strategy, appearance planning, and coordination for urgent timelines.',
        },
        {
          t: 'Clear updates and next steps',
          d: 'You receive concise progress updates and decision points—no clutter.',
        },
      ],
      speedEyebrow: 'Speed',
      speedTitle: 'Fast response, structured workflow.',
      speedDesc:
        'In urgent matters (arrest risk, active FIR, hearing in 24–48 hours), speed only helps if the process is disciplined.',
      speedSteps: [
        {
          t: '10–20 min triage call',
          d: 'Quick intake to understand location, sections, urgency, and next step.',
        },
        {
          t: 'Document checklist in writing',
          d: 'You receive a clear list of what to share and what to avoid sharing.',
        },
        {
          t: 'Same-day action for urgent cases',
          d: 'Drafting, filing prep, and coordination based on court timelines.',
        },
      ],
      speedPrimaryCta: 'Request urgent callback',
      testimonialsEyebrow: 'Testimonials',
      testimonialsTitle: 'Trusted by clients under real pressure',
      testimonialsDesc:
        'What clients value most: clarity, speed, and courtroom-ready preparation.',
      readyEyebrow: 'Ready to move?',
      readyTitle: 'Get a clear next step in one conversation.',
      readyDesc:
        'Share your case type and context. We’ll respond with a structured plan, document checklist, and immediate actions if urgent.',
      readyPrimaryCta: 'Get Legal Help Now',
      readySecondaryCta: 'WhatsApp now',
    },
    practice: {
      seoTitle: 'Practice Areas',
      seoDesc:
        'Explore practice areas with a priority focus on criminal law, backed by structured documentation and clear next steps.',
      eyebrow: 'Practice Areas',
      title: 'Full-spectrum legal support, criminal-first focus',
      desc:
        'Every engagement begins with a structured intake, document checklist, and risk assessment. Clear strategy, realistic timelines, disciplined communication.',
      mainFocus: 'Main focus',
      ctaEyebrow: 'Not sure where you fit?',
      ctaTitle: 'Tell us your situation. We’ll route it correctly.',
      ctaDesc:
        'Share the key facts, location, and urgency. We’ll reply with the right practice area, document checklist, and next-step plan.',
      ctaPrimary: 'Get Legal Help Now',
    },
    blog: {
      seoTitle: 'Blog',
      seoDesc:
        'Practical legal insights—criminal law first, plus cyber, property, and family law.',
      eyebrow: 'Blog',
      title: 'Practical legal insights without the clutter',
      desc:
        'Quick, structured reads focused on documentation, timelines, and next steps—especially in criminal defense.',
      all: 'All',
    },
    contact: {
      seoTitle: 'Contact',
      seoDesc:
        'Contact LegalSupportNow for urgent legal support. Share your case type and we’ll respond with a structured next-step plan.',
      eyebrow: 'Contact',
      title: 'Tell us what happened. We’ll guide the next step.',
      desc:
        'No backend is used—your message stays on your device in this demo build. For production, this is ready to connect to a secure API.',
      formTitle: 'Case intake form',
      formDesc:
        'Share what matters: location, urgency, and key facts. We’ll follow up with a checklist and next steps.',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      caseType: 'Case type',
      message: 'Message',
      submit: 'Submit request',
      sending: 'Sending…',
      whatsappInstead: 'WhatsApp instead',
      submitted: 'Submitted. We’ll follow up shortly.',
      emergencyTitle: 'Emergency note',
      emergencyDesc:
        'If there is an immediate arrest risk, an active FIR, or a hearing within 24–48 hours, call directly for faster routing.',
      whatsappUrgent: 'WhatsApp urgent details',
      contactDetails: 'Contact details',
      privacyTitle: 'Discretion & privacy',
      privacyDesc:
        'Avoid sharing OTPs, passwords, or sensitive documents over unknown channels. We’ll guide what to share and how to preserve evidence safely.',
      placeholders: {
        name: 'e.g., Riya Malhotra',
        email: 'e.g., riya.malhotra@email.com',
        phone: 'e.g., +91 98xxxxxx10',
        message: 'Share the key facts, location, urgency, and any deadlines/hearing dates.',
      },
      errors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Enter a valid email',
        phoneRequired: 'Phone is required',
        phoneInvalid: 'Enter a valid phone number',
        messageRequired: 'Message is required',
        messageMore: 'Please add a bit more detail (25+ chars)',
      },
    },
    footer: {
      desc:
        'LegalSupportNow provides focused legal guidance with priority on criminal defense and urgent representation. Clear strategy, honest timelines, and strong courtroom preparation.',
      quickLinks: 'Quick links',
      contact: 'Contact',
      rights: 'All rights reserved.',
      premiumTag: 'Premium legal support',
    },
  },
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('hi')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'hi') setLang(stored)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en'
  }, [lang])

  const value = useMemo(() => {
    const t = (key) => {
      const parts = key.split('.')
      let cur = dict[lang]
      for (const p of parts) cur = cur?.[p]
      return cur ?? key
    }
    return { lang, setLang, t }
  }, [lang])

  return createElement(I18nContext.Provider, { value }, children)
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

