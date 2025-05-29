/**
 * VolumeControls.tsx
 *
 * Displays a volume slider and icon.
 * - Lets the user adjust playback volume (0–100)
 * - Uses a gradient-filled slider bar to show the current level
 * - Sends updates via `onVolumeChange` prop
 */
import { AudioLines } from "lucide-react";

interface VolumeControlsProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export default function VolumeControls({
  volume,
  onVolumeChange,
}: VolumeControlsProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-surface p-6 shadow-lg drop-shadow-md">
      <AudioLines
        className="text-secondary"
        aria-label="volume"
        role="img"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(parseInt(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg accent-primary"
        style={{
          background: `linear-gradient(to right, rgb(99, 102, 241) ${volume}%, rgb(15, 23, 42) ${volume}%)`,
        }}
        aria-label="Volume control"
      />
    </div>
  );
}
