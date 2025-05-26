import {
  ClockFading,
  Rewind,
  Play,
  FastForward,
  Repeat
} from "lucide-react";

export default function PlayControls() {
  const commonClasses =
    "p-2 rounded-md border-2 border-transparent hover:border-black";

  return (
    <div className="flex justify-between items-center px-4 gap-2">
      {/* Speed Button */}
      <button className={commonClasses}>
        <ClockFading className="w-6 h-6 text-black" />
      </button>

      {/* Back Button */}
      <button className={commonClasses}>
        <Rewind className="w-6 h-6 text-black" />
      </button>

      {/* Play Button - slightly larger */}
      <button className={commonClasses}>
        <Play className="w-6 h-6 text-black" />
      </button>

      {/* Forward Button */}
      <button className={commonClasses}>
        <FastForward className="w-6 h-6 text-black" />
      </button>

      {/* Shuffle Button */}
      <button className={commonClasses}>
        <Repeat className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}
