import placeholder from "../assets/placeholder.svg";

export default function CoverArt({ song }) {
  const cover = song?.cover || placeholder;

  return (
    <img
      src={cover}
      alt={`${song?.title || "Song"} cover art`}
      className="w-full max-w-sm aspect-square rounded-xl object-cover mx-auto"
    />
  );
}
