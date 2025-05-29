/**
 * PlayListItem.tsx
 *
 * Represents a single track entry in the playlist.
 * - Shows title, artist, and formatted duration
 * - Highlights if currently selected
 * - Calls `onClick` when clicked to trigger playback
 */
interface PlaylistItem {
  title: string;
  artist: string;
  duration: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function PlayListItem({
  title,
  artist,
  duration,
  isSelected,
  onClick,
}: PlaylistItem) {
  return (
    <div
      className={`hover:bg-transparent hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-primary hover:text-primary p-1 flex w-full cursor-pointer flex-col rounded-lg ${isSelected
        ? "bg-secondary/20 cursor-pointer shadow-lg"
        : ""
        }`}
      onClick={onClick}
    >
      <p className="ml-2 mr-2 font-fontmain font-bold text-text">{title}</p>
      <div className="flex w-full justify-between">
        <p className="ml-2 mr-2 font-fontalt text-text">{artist}</p>
        <p className="ml-2 mr-2 font-fontalt text-textMuted">
          {formatDuration(duration)}
        </p>
      </div>
    </div>
  );
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
