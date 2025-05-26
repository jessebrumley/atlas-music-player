export default function PlayListItem({ title, artist, duration }) {
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 hover:bg-slate-100 rounded transition-colors duration-200">
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-zinc-400 font-bold">{artist}</p>
      </div>
      <span className="text-sm text-zinc-500 font-bold">{formatDuration(duration)}</span>
    </div>
  );
}
