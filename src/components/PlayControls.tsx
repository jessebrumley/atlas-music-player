/**
 * PlayControls.tsx
 *
 * Displays playback controls for the music player interface.
 * - Play/pause, rewind, fast forward, and shuffle buttons
 * - Allows cycling playback speed (0.5x, 1.0x, 2.0x)
 * - Uses props to track playback state and update current song
 * - Includes UI feedback for active shuffle state and speed setting
 */
import { Play, Pause, FastForward, Rewind, Shuffle } from "lucide-react";
import { Track } from "./Api";

interface PlayControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onShuffle?: () => void;
  isShuffled: boolean;
  speed: 0.5 | 1.0 | 2.0;
  onSpeedChange?: (speed: number) => void;
  currentSong: string;
  setCurrentSong: (track: Track) => void;
  playlist: Track[];
}

export default function PlayControls({
  isPlaying,
  onPlayPause,
  onShuffle,
  isShuffled,
  speed = 1,
  onSpeedChange,
  currentSong,
  setCurrentSong,
  playlist,
}: PlayControlsProps) {
  const onNext = () => {
    if (!currentSong || playlist.length <= 1) return;
    const currentIndex = playlist.findIndex(
      (track) => track.song === currentSong,
    );
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentSong(playlist[nextIndex]);
  };

  const onPrevious = () => {
    if (!currentSong || playlist.length <= 1) return;
    const currentIndex = playlist.findIndex(
      (track) => track.song === currentSong,
    );
    if (currentIndex === -1) return;
    const prevIndex =
      currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    setCurrentSong(playlist[prevIndex]);
  };

  return (
    <div className="flex items-center justify-between p-6 font-fontmain">
      <button
        aria-label="Change speed"
        onClick={() => onSpeedChange?.(speed === 2 ? 0.5 : speed + 0.5)}
        className="flex w-7 justify-center rounded-md font-bold text-secondary hover:text-primary hover:outline hover:outline-2 hover:outline-offset-8"
      >
        {speed}x
      </button>
      <button
        aria-label="Rewind"
        onClick={onPrevious}
        className="text-accent-green hover:outline-orange-5 flex w-7 justify-center rounded-md text-secondary hover:text-primary hover:outline hover:outline-2 hover:outline-offset-8"
      >
        <Rewind />
      </button>
      <button
        aria-label={isPlaying ? "Pause" : "Play"}
        onClick={onPlayPause}
        className="text-accent-green hover:outline-orange-5 flex w-7 justify-center rounded-md text-secondary hover:text-primary hover:outline hover:outline-2 hover:outline-offset-8"
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <button
        aria-label="fastforward"
        onClick={onNext}
        className="text-accent-green hover:outline-orange-5 flex w-7 justify-center rounded-md text-secondary hover:text-primary hover:outline hover:outline-2 hover:outline-offset-8"
      >
        <FastForward />
      </button>
      <button
        aria-label="Shuffle"
        onClick={onShuffle}
        className={`flex w-7 justify-center rounded-md hover:text-primary hover:outline hover:outline-2 hover:outline-offset-8 ${isShuffled ? "text-secondary" : "text-textMuted"
          }`}
      >
        <Shuffle />
      </button>
    </div>
  );
}
