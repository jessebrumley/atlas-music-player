import { useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer({ songs, playlist }) {
  const [selectedId, setSelectedId] = useState(playlist[0]?.id);

  const currentSong = songs.find((song) => song.id === selectedId);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 text-black">
      {/* Left: Currently Playing */}
      <div className="flex-1">
        <CurrentlyPlaying song={currentSong} />
      </div>

      {/* Right: Playlist */}
      <div className="lg:w-80 mt-6 lg:mt-0">
        <Playlist
          playlist={playlist}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>
    </div>
  );
}
