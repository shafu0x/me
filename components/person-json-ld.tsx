import {
  fullName,
  jobTitle,
  shareBlurbText,
  siteName,
  siteUrl,
  socialLinks,
} from "@/lib/site";

export function PersonJsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: fullName,
    alternateName: siteName,
    url: siteUrl,
    jobTitle,
    description: shareBlurbText,
    image: `${siteUrl}/pfp.jpg`,
    sameAs: [socialLinks.twitter, socialLinks.github, socialLinks.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
