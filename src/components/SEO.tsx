import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    // Page Title
    document.title = `${title} | Jharokha Haveli Udaipur - Resort & Restaurant`;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Open Graph Metadata
    const ogTags = [
      { property: 'og:title', content: `${title} | Jharokha Haveli` },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'Jharokha Haveli' }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // LocalBusiness structured schema markup
    let schemaScript = document.getElementById('local-business-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'local-business-schema';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "JHAROKHA HAVELI",
      "description": "Experience premium hotel rooms, a luxury resort environment, and authentic lakeside fine dining in Udaipur, Rajasthan.",
      "url": window.location.origin,
      "telephone": "+91 76655 83595, +91 99989 99716",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Naga Nagri, Amrai Ghat ChandPol, Near Leela Staff Gate, Cheerwa, Ambamata",
        "addressLocality": "Udaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "313004",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.5815355,
        "longitude": 73.6779349
      },
      "priceRange": "$$$",
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
    };

    schemaScript.textContent = JSON.stringify(schemaData);
  }, [title, description, keywords]);

  return null;
}
