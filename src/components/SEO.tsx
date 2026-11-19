import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  image?: string;
  schema?: string; // Optional JSON-LD schema string
}

export const SEO: React.FC<SEOProps> = ({ title, description, type = 'website', image, schema }) => {
  const siteName = "WebMantu Digital";
  const fullTitle = title.endsWith(siteName) ? title : `${title} | ${siteName}`;
  const { pathname } = useLocation();
  const canonical = `https://webmantu.com${pathname === "/" ? "/" : pathname.replace(/\/+$/, "")}`;
  const socialImage = new URL(image || "/Logo/WEBMANTU%20DIGITAL.png", "https://webmantu.com").href;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />

      {/* Schema / JSON-LD for AI & GEO */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
};
