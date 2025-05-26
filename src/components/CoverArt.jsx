import placeholder from "../assets/placeholder.svg";

export default function CoverArt({ song }) {
  const cover = song?.cover || placeholder;

  return (
    <img
      src={cover}
      alt=""
      aria-hidden="true"
      className="w-full max-w-sm aspect-square rounded-xl object-cover mx-auto"
    />
  );
}
