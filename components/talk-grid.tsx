import Image from "next/image";
import { TALKS } from "@/lib/talks";

export function TalkGrid() {
  return (
    <div className="video-grid">
      {TALKS.map((talk) => (
        <a key={talk.href} href={talk.href}>
          <Image
            src={talk.img}
            alt={talk.alt}
            width={480}
            height={360}
            sizes="(max-width: 768px) 100vw, 300px"
            className="h-auto w-full"
          />
          {talk.title}
        </a>
      ))}
    </div>
  );
}
