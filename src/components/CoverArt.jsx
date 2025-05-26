import placeholder from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <img
      src={placeholder}
      alt="Cover art"
      className="w-full aspect-square rounded-xl object-cover"
    />
  );
}
