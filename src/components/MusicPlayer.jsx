import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function MusicPlayer() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
      <div className="divide-y divide-zinc-700">
        <PlayListItem />
        <PlayListItem />
        {/* More playlist items */}
      </div>
    </div>
  );
}
