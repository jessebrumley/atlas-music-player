import { useEffect, useState } from "react";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

// Custom hook to fetch song, lyric, and playlist data
function useSongData() {
  const [songs, setSongs] = useState([]);
  const [lyrics, setLyrics] = useState({});
  const [playlist, setPlaylist] = useState([]);

  const playlistIds = [
    "cm3ixp4sy0thg0cmtdzukgg56",
    "soammx6oibpan244my4toqke",
    "a6pkp78whsyqdvpb5dxn64ss",
    "hdees11mmk6g078ewijlly1r",
    "sg9obf34n8qtnpq5t19w1b9a",
    "u7wkgyiyiz7xuxcueoxzb5d5",
    "kp4z671fsjcmuobji96z6p95",
    "ycvdpo1n76ap0x2u67gy9gab",
    "jxjrthcu47rrpan548evirgu",
    "kjy3ny0k1jt9p83srhdyg7mb"
  ];

  useEffect(() => {
    async function fetchData() {
      const [playlistRes, ...rest] = await Promise.all([
        fetch("/api/v1/playlist").then(res => res.json()),
        ...playlistIds.map(id =>
          fetch(`/api/v1/songs/${id}`).then(res => res.json())
        ),
        ...playlistIds.map(id =>
          fetch(`/api/v1/lyrics/${id}`).then(res => res.json())
        )
      ]);

      const songsRes = rest.slice(0, playlistIds.length);
      const lyricsRes = rest.slice(playlistIds.length);

      const lyricsMap = {};
      lyricsRes.forEach((entry, i) => {
        lyricsMap[playlistIds[i]] = entry.lyrics;
      });

      setSongs(songsRes);
      setLyrics(lyricsMap);
      setPlaylist(playlistRes);
    }

    fetchData();
  }, []);

  return { songs, lyrics, playlist };
}

function App() {
  const { songs, lyrics, playlist } = useSongData();

  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer songs={songs} lyrics={lyrics} playlist={playlist} />
      <Footer />
    </div>
  );
}

export default App;
