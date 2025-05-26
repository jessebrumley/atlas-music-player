export default function PlayListItem({ title, artist, duration, isSelected, onClick }) {
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-2 rounded cursor-pointer ${isSelected ? "bg-slate-400 text-white font-bold" : ""
        }`}
    >
      <div>
        <p>{title}</p>
        <p className="text-sm">{artist}</p>
      </div>
      <span className="text-sm">{formatDuration(duration)}</span>
    </div>
  );
}
