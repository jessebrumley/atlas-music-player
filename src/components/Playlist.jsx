import PlayListItem from "./PlayListItem";

export default function Playlist({ playlist, selectedId, setSelectedId }) {
    return (
        <div>
            <h3 className="text-sm font-semibold text-zinc-500 mb-4 px-4">Playlist</h3>
            <div className="divide-y divide-zinc-700">
                {playlist.map((item) => (
                    <PlayListItem
                        key={item.id}
                        title={item.title}
                        artist={item.artist}
                        duration={item.duration}
                        isSelected={item.id === selectedId}
                        onClick={() => setSelectedId(item.id)}
                    />
                ))}
            </div>
        </div>
    );
}
