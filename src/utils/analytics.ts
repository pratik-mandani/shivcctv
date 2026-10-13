export const GOOGLE_ADS_ID = 'AW-18495754208';
export const GOOGLE_CONVERSION_ID = 'AW-18495754208/zu3pCIWcipIdEOCfu_NE';

export function trackPhoneConversion() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_CONVERSION_ID,
    });
  }
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', { content_name: 'Phone Call' });
  }
}

export function trackWhatsAppConversion(label?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_CONVERSION_ID,
    });
  }
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', { content_name: label || 'WhatsApp Inquiry' });
  }
}
