import { Helmet } from "react-helmet-async";

import { seo } from "@/config/seo";

export function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: seo.person.name,

    jobTitle: seo.person.jobTitle,

    url: seo.siteUrl,

    image: `${seo.siteUrl}${seo.person.image}`,

    description: seo.description,

    knowsAbout: seo.person.skills,

    sameAs: [seo.person.github, seo.person.linkedin],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: seo.siteName,

    url: seo.siteUrl,

    description: seo.description,

    inLanguage: "en",

    publisher: {
      "@type": "Person",
      name: seo.person.name,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(person)}</script>

      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
}
