import { Helmet } from "react-helmet-async";

import { seo } from "@/config/seo";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
}

export function SEO({
  title = seo.title,
  description = seo.description,
  canonical = seo.siteUrl,
  image = seo.image,
}: SEOProps) {
  const pageTitle = title === seo.title ? title : `${title} | ${seo.siteName}`;

  const imageUrl = image.startsWith("http") ? image : `${seo.siteUrl}${image}`;

  return (
    <Helmet>
      <html lang="en" />

      <title>{pageTitle}</title>

      <meta name="description" content={description} />

      <meta name="robots" content="index,follow" />

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={seo.type} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={seo.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {seo.twitterHandle && (
        <meta name="twitter:creator" content={seo.twitterHandle} />
      )}
    </Helmet>
  );
}
