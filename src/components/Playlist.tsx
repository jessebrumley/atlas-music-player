/**
 * Playlist.tsx
 *
 * Renders the list of tracks available to play.
 * - Pulls track data from useApi() and current selection from context
 * - Highlights the current song and sets a default on initial load
 * - Each track is rendered using <PlayListItem>
 * - While loading, displays skeleton placeholders using react-loading-skeleton
 */

import PlayListItem from "./PlayListItem.tsx";
import { useApi } from "./Api.tsx";
import { useCurrentSong } from "./CurrentSongContext";
import { useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Playlist() {
  const { currentSong, setCurrentSong } = useCurrentSong();
  const data = useApi();

  useEffect(() => {
    if (data && data.length > 0 && !currentSong) {
      setCurrentSong(data[0]);
    }
  }, [data, currentSong, setCurrentSong]);

  return (
    <div className="flex flex-1 flex-col gap-4">
      <p className="font-fontmain w-full pl-6 pr-6 pt-4 pb-4 text-3xl text-text rounded-lg bg-surface drop-shadow-md shadow-lg">
        Playlist
      </p>
      <div className="flex flex-1 flex-col justify-between gap-2 rounded-lg p-4 bg-surface drop-shadow-md shadow-lg">
        {!data.length ? (
          Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="p-2">
              <Skeleton height={20} className="mb-1" />
              <Skeleton width="60%" height={14} />
            </div>
          ))
        ) : (
          data.map((track) => (
            <PlayListItem
              key={track.id}
              title={track.title}
              artist={track.artist}
              duration={track.duration}
              isSelected={currentSong?.id === track.id}
              onClick={() => setCurrentSong(track)}
            />
          ))
        )}
      </div>
    </div>
  );
}
