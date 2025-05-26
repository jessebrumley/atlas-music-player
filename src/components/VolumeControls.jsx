export default function VolumeControls() {
  return (
    <div className="flex items-center gap-2">
      <span>🔉</span>
      <input type="range" min="0" max="100" className="w-full" />
    </div>
  );
}
