import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  keywords?: string;
}

const DEFAULT_OG_IMAGE = 'https://myhealthkey.io/og-image.png';
const SITE_NAME = 'HealthKey Protocol';

export const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
  keywords = 'health data ownership, Web3 health, Solana health data, wearable data monetization, health data wallet, blockchain health records, HIPAA compliant, $HEALTH token',
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'HealthKey Protocol');
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', SITE_NAME, true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@HealthKeyPro');
    updateMetaTag('twitter:creator', '@HealthKeyPro');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonicalUrl) {
      updateMetaTag('og:url', canonicalUrl, true);
      updateMetaTag('twitter:url', canonicalUrl);
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Robots meta
    if (noIndex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }
  }, [title, description, canonicalUrl, ogImage, type, noIndex, keywords]);

  return null;
};
