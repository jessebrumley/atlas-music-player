/**
 * Custom hook to fetch and enrich playlist data.
 * - Initial request: /api/v1/playlist
 * - Per-track request: /api/v1/songs/:id for cover and song URL
 * Returns: Enriched Track[] with all data needed to display and play songs.
 */
import { useEffect, useState } from "react";

export interface Track {
  id: string | number;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  song: string;
}

export const useApi = () => {
  const [playListData, setPlaylistData] = useState<Track[]>([]);

  const fetchPlaylistData = async () => {
    const response = await fetch("/api/v1/playlist");
    const result = await response.json();

    const fetchCoverData = await Promise.all(
      result.map(async (track: Track) => {
        const response = await fetch(`/api/v1/songs/${track.id}`);
        const songData = await response.json();
        return { ...track, cover: songData.cover, song: songData.song };
      }),
    );

    setPlaylistData(fetchCoverData);
  };

  useEffect(() => {
    fetchPlaylistData();
  }, []);

  return playListData;
};
