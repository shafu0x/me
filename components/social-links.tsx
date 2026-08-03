import { socialLinks } from "@/lib/site";

export function SocialLinks() {
  return (
    <div className="section">
      find me on{" "}
      <a href={socialLinks.twitter} rel="me">
        twitter
      </a>
      ,{" "}
      <a href={socialLinks.github} rel="me">
        github
      </a>
      ,{" "}
      <a href={socialLinks.linkedin} rel="me">
        linkedin
      </a>
      , <a href={socialLinks.email}>shafu0x@gmail.com</a>
    </div>
  );
}
