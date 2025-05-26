import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying({ song }) {
    const title = song?.title || "No song selected";
    const artist = song?.artist || "";

    return (
        <div className="space-y-6">
            <CoverArt song={song} />
            <SongTitle title={title} artist={artist} />
            <PlayControls />
            <VolumeControls />
        </div>
    );
}
