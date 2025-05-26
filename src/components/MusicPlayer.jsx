import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function MusicPlayer({ songs, lyrics, playlist }) {
  const currentSong = songs[0];

  if (!currentSong) return <p className="text-center">Loading...</p>;

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 text-black">
      {/* Left: Player */}
      <div className="flex-1 space-y-6">
        <CoverArt song={currentSong} />
        <SongTitle title={currentSong.title} artist={currentSong.artist} />
        <PlayControls />
        <VolumeControls />
      </div>
      {/* Right: Playlist */}
      <div className="lg:w-80">
        <h3 className="text-md font-bold text-black mt-8 mb-4 px-4">
          Playlist
        </h3>
        <div className="divide-y divide-zinc-700">
          {playlist.map((item) => (
            <PlayListItem
              key={item.id}
              title={item.title}
              artist={item.artist}
              duration={item.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
