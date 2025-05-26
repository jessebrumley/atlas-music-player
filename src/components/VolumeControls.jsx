import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VolumeControls() {
  const [muted, setMuted] = useState(false);          // click to mute
  const [volume, setVolume] = useState(50);           // last known volume
  const [sliderValue, setSliderValue] = useState(50); // volume slider

  const toggleMute = () => {
    if (muted) {
      // Unmuting: restore previous volume
      setSliderValue(volume);
    } else {
      // Muting: store current slider value
      setVolume(sliderValue);
      setSliderValue(0);
    }
    setMuted(!muted);
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);
    if (!muted) {
      setVolume(newValue);
    }
  };

  return (
    <div className="flex items-center gap-4 px-4">
      <button onClick={toggleMute}>
        {muted ? (
          <VolumeX className="w-5 h-5 text-black" />
        ) : (
          <Volume2 className="w-5 h-5 text-black" />
        )}
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleChange}
        className="w-full accent-black"
      />
    </div>
  );
}
