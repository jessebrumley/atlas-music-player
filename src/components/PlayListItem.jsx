export default function PlayListItem() {
  return (
    <div className="py-2 px-4 hover:bg-zinc-800 rounded cursor-pointer flex justify-between">
      <div>
        <p className="font-medium">Playlist Song</p>
        <p className="text-sm text-zinc-400">Artist</p>
      </div>
      <span className="text-zinc-400">⏵</span>
    </div>
  );
}
