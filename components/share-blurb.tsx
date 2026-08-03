import { shareBlurb, type ShareBlurbEntry } from "@/lib/site";

function renderContent(content: ShareBlurbEntry["content"]) {
  if (typeof content === "string") {
    return content;
  }

  return content.map((part, i) =>
    typeof part === "string" ? (
      part
    ) : (
      <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">
        {part.text}
      </a>
    ),
  );
}

export function ShareBlurb() {
  const visibleEntries = shareBlurb.filter((entry) => entry.shownOnWebsite);

  return (
    <>
      {visibleEntries.map((entry, i) => (
        <span key={i}>
          {renderContent(entry.content)}
          {i < visibleEntries.length - 1 ? (
            <>
              <br />
              <br />
            </>
          ) : null}
        </span>
      ))}
    </>
  );
}
