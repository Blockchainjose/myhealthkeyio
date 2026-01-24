import { useEffect } from 'react';

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

// Organization Schema
export const OrganizationSchema = ({
  name,
  url,
  logo,
  description,
  sameAs = [],
}: OrganizationSchemaProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'organization-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name,
      url,
      logo,
      description,
      sameAs,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@myhealthkey.io',
        contactType: 'customer service',
      },
    });

    // Remove existing script if present
    const existingScript = document.getElementById('organization-schema');
    if (existingScript) {
      existingScript.remove();
    }
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [name, url, logo, description, sameAs]);

  return null;
};

// Website Schema
export const WebsiteSchema = ({ url, name }: { url: string; name: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'website-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url,
      name,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${url}?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });

    const existingScript = document.getElementById('website-schema');
    if (existingScript) {
      existingScript.remove();
    }
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [url, name]);

  return null;
};

// FAQ Schema
export const FAQSchema = ({ faqs }: { faqs: FAQItem[] }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });

    const existingScript = document.getElementById('faq-schema');
    if (existingScript) {
      existingScript.remove();
    }
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [faqs]);

  return null;
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'breadcrumb-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });

    const existingScript = document.getElementById('breadcrumb-schema');
    if (existingScript) {
      existingScript.remove();
    }
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [items]);

  return null;
};
