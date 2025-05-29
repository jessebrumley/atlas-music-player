/**
 * MusicPlayer.tsx
 *
 * Main layout component for the music player interface.
 * - Displays the currently playing song and the playlist side by side
 * - Uses responsive flex layout: column on small screens, row on larger screens
 */
import CurrentlyPlaying from "./CurrentlyPlaying.tsx";
import Playlist from "./Playlist.tsx";

export default function MusicPlayer() {
  return (
    <div className="flex flex-row mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row md:space-x-6 p-10 gap-4">
        <CurrentlyPlaying />
        <Playlist />
      </div>
    </div>
  );
}
