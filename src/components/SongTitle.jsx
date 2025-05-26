export default function SongTitle({ title, artist }) {
  return (
    <div className="text-center space-y-1">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-zinc-400">{artist}</p>
    </div>
  );
}
