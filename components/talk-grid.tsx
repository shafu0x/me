import Image from "next/image";
import { TALKS } from "@/lib/talks";

export function TalkGrid() {
  return (
    <div className="mt-2 flex flex-col gap-2.5">
      {TALKS.map((talk) => (
        <a
          key={talk.href}
          href={talk.href}
          className="flex gap-3 break-inside-avoid"
        >
          <Image
            src={talk.img}
            alt={talk.alt}
            width={80}
            height={80}
            sizes="80px"
            className="size-20 shrink-0 self-center object-cover"
          />
          <span className="flex min-h-20 flex-col justify-center leading-snug">
            <span className="text-black">{talk.title}</span>
            <span className="text-[#666]">{talk.subtitle}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
