import "@testing-library/jest-dom/vitest";
import {
  describe,
  it,
  expect,
  vi,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";
import { render, screen } from "@testing-library/react";
import PlayControls from "../components/PlayControls";
import Playlist from "../components/Playlist";
import { CurrentSongProvider } from "../components/CurrentSongContext";
import PlayListItem from "../components/PlayListItem";

const mockPlaylistData = [
  {
    id: 1,
    title: "Mock Song 1",
    artist: "Mock Artist 1",
    duration: "210",
  },
  {
    id: 2,
    title: "Mock Song 2",
    artist: "Mock Artist 2",
    duration: "255",
  },
];

describe("PlayControls", () => {
  const mockProps = {
    isPlaying: false,
    onPlayPause: vi.fn(),
    onShuffle: vi.fn(),
    isShuffled: false,
    speed: 1,
    onSpeedChange: vi.fn(),
    currentSong: "Song 1",
    setCurrentSong: vi.fn(),
    playlist: [
      { song: "Song 1", artist: "Artist 1" },
      { song: "Song 2", artist: "Artist 2" },
    ],
  };

  it("renders all SVG components correctly", () => {
    render(<PlayControls {...mockProps} />);
    expect(screen.getByRole("button", { name: /play/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /rewind/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /fastforward/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /shuffle/i })).toBeInTheDocument();
    expect(screen.getByText("1x")).toBeInTheDocument();
  });

  it("renders the Pause icon when isPlaying is true", () => {
    render(<PlayControls {...mockProps} isPlaying={true} />);
    expect(screen.getByRole("button", { name: /pause/i })).toBeInTheDocument();
  });

  it("renders the Shuffle icon in the correct color when shuffled", () => {
    render(<PlayControls {...mockProps} isShuffled={true} />);
    const shuffleButton = screen.getByRole("button", { name: /shuffle/i });
    expect(shuffleButton).toHaveClass("text-secondary");
  });
});

describe("Playlist Component", () => {
  it("renders playlist with songs", async () => {
    render(
      <CurrentSongProvider>
        <Playlist />
      </CurrentSongProvider>
    );

    expect(await screen.findByText("Playlist")).toBeInTheDocument();
    expect(await screen.findByText("Mock Song 1")).toBeInTheDocument();
    expect(await screen.findByText("Mock Artist 1")).toBeInTheDocument();
    expect(await screen.findByText("3:30")).toBeInTheDocument();
    expect(await screen.findByText("Mock Song 2")).toBeInTheDocument();
    expect(await screen.findByText("Mock Artist 2")).toBeInTheDocument();
    expect(await screen.findByText("3:00")).toBeInTheDocument(); // 180 seconds
  });
});

it("sets initial song when playlist loads", async () => {
  render(
    <CurrentSongProvider>
      <Playlist />
    </CurrentSongProvider>
  );

  const firstSongElement = await screen.findByText("Mock Song 1");
  const listItem = firstSongElement.closest("div");
  expect(listItem).toHaveClass("hover:bg-transparent");
});

it("matches snapshot", () => {
  const mockItem = {
    title: "Mock Song",
    artist: "Mock Artist",
    duration: "180",
  };
  const { container } = render(<PlayListItem item={mockItem} />);
  expect(container).toMatchSnapshot();
});
});
