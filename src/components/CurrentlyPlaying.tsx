/**
 * CurrentlyPlaying.tsx
 * 
 * Displays the currently playing song, cover art, and playback controls.
 * Uses Skeleton placeholders while data is loading.
 * 
 * Components:
 * - CoverArt: Displays the song cover or a fallback image and shows lyrics on hover.
 * - SongTitle: Displays the song title and artist.
 * - PlayControls: Handles play, pause, skip, speed, and shuffle.
 * - VolumeControls: Adjusts the volume.
 * - AudioPlayer: Loads and plays the audio file.
 * 
 * Hooks:
 * - useApi: Fetches playlist and song data from API.
 * - useCurrentSong: Gets/sets the current song from context.
 * 
 * Libraries:
 * - react-loading-skeleton: Displays skeletons while data loads.
 */
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import CoverArt from "./CoverArt.tsx";
import SongTitle from "./SongTitle.tsx";
import AudioPlayer from "./AudioPlayer.tsx";
import PlayControls from "./PlayControls.tsx";
import VolumeControls from "./VolumeControls.tsx";

import { useCurrentSong } from "./CurrentSongContext";
import { Track, useApi } from "./Api.tsx";

export default function CurrentlyPlaying() {
  const { currentSong, setCurrentSong } = useCurrentSong();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [speed, setSpeed] = useState<0.5 | 1.0 | 2.0>(1.0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledPlaylist, setShuffledPlaylist] = useState<Track[]>([]);
  const data = useApi();

  useEffect(() => {
    if (!currentSong) return;

    if (isShuffled) {
      const shuffled = data.filter((track) => track.song !== currentSong.song);
      shuffled.sort(() => Math.random() - 0.5);
      setShuffledPlaylist([currentSong, ...shuffled]);
    } else {
      setShuffledPlaylist(data);
    }
  }, [isShuffled, data, currentSong]);

  const isLoading = !currentSong;

  return (
    <div className="flex w-full flex-col justify-start gap-4 md:w-1/2">
      <div className="flex flex-col gap-6 rounded-lg p-6 bg-surface shadow-lg drop-shadow-md">
        <CoverArt
          cover={isLoading ? undefined : currentSong.cover}
          id={isLoading ? "" : currentSong.id.toString()}
        />
        {isLoading ? (
          <>
            <Skeleton height={24} width="80%" />
            <Skeleton height={16} width="40%" />
          </>
        ) : (
          <SongTitle song={currentSong} />
        )}
      </div>

      <PlayControls
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        speed={speed}
        currentSong={currentSong?.song ?? ""}
        setCurrentSong={setCurrentSong}
        onSpeedChange={(newSpeed) => setSpeed(newSpeed as 0.5 | 1.0 | 2.0)}
        playlist={isShuffled ? shuffledPlaylist : data}
        onShuffle={() => setIsShuffled((prev) => !prev)}
        isShuffled={isShuffled}
      />

      <VolumeControls volume={volume} onVolumeChange={setVolume} />

      {currentSong && (
        <AudioPlayer
          song={currentSong.song}
          playing={isPlaying}
          volume={volume}
          speed={speed}
        />
      )}
    </div>
  );
}
