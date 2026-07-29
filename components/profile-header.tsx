import Image from "next/image";

export function ProfileHeader() {
  return (
    <div className="section">
      <div className="profile-images">
        <Image
          src="/pfp.jpg"
          alt="shafu"
          width={120}
          height={120}
          priority
          className="profile-pfp"
        />
        <Image
          src="/speaking.png"
          alt="Sharif speaking on stage"
          width={120}
          height={120}
          className="profile-photo"
        />
      </div>
    </div>
  );
}
