/**
 * SongTitle.tsx
 *
 * Displays the title and artist of the currently playing track.
 * - Uses two different fonts for visual contrast
 * - Expects a `Track` object as the `song` prop
 */
import { Track } from "./Api";

export default function SongTitle({ song }: { song: Track }) {
  return (
    <div>
      <p className="font-fontmain text-2xl text-text">{song.title}</p>
      <p className="font-fontalt text-text">{song.artist}</p>
    </div>
  );
}
