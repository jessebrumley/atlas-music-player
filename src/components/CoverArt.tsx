/**
 * CoverArt.tsx
 *
 * Renders the cover image for a song.
 * If no `cover` prop is provided or the image fails to load,
 * a default placeholder image is used instead.
 *
 * When the user hovers over the image, lyrics are fetched from the API
 * using the song ID and displayed as an overlay.
 */
import { useEffect, useState } from "react";
import placeholder from "../assets/placeholder.svg";

interface CoverArtProps {
  cover?: string;
  id?: string;
}

export default function CoverArt({ cover, id }: CoverArtProps) {
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [showLyrics, setShowLyrics] = useState(false);

  useEffect(() => {
    const fetchLyrics = async () => {
      if (!id) return;
      try {
        const res = await fetch(`/api/v1/lyrics/${id}`);
        if (!res.ok) throw new Error("Lyrics not found");
        const data = await res.json();
        setLyrics(data.lyrics);
      } catch (err) {
        setLyrics(null);
      }
    };

    setLyrics(null);
    fetchLyrics();
  }, [id]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowLyrics(true)}
      onMouseLeave={() => setShowLyrics(false)}
    >
      <img
        src={cover || placeholder}
        alt="Cover Art"
        className="rounded-lg drop-shadow-md"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = placeholder;
        }}
      />
      {showLyrics && lyrics && (
        <div className="absolute inset-0 overflow-auto whitespace-pre-wrap rounded-lg bg-background bg-opacity-90 p-4 text-sm text-text z-10">
          {lyrics}
        </div>
      )}
    </div>
  );
}
