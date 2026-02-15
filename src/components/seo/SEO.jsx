import React from 'react';

const SEO = ({ title, description, keywords, image, url, type = 'website', schema }) => {
  const siteTitle = "U.S.T Enterprises";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = "https://www.ustenterprises.in"; // 🔴 REPLACE with your actual domain
  // Ensure trailing slash to match Netlify's URL structure
  const rawUrl = url ? `${siteUrl}${url}` : `${siteUrl}/`;
  const fullUrl = rawUrl.endsWith('/') ? rawUrl : `${rawUrl}/`;
  const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}/assets/og-default.jpg`;

  return (
    <>
      {/* --- Standard Metadata --- */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />

      {/* --- Open Graph (Facebook/LinkedIn) --- */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteTitle} />

      {/* --- Twitter Card --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />

      {/* --- JSON-LD Structured Data (Google Rich Results) --- */}
      {schema && (
        Array.isArray(schema)
          ? schema.map((s, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(s)}
            </script>
          ))
          : (
            <script type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          )
      )}
    </>
  );
};

export default SEO;