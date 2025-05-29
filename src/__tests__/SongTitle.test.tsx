import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SongTitle from "../components/SongTitle";
import type { Track } from "../components/Api";

describe("SongTitle component", () => {
  const renderWithTrack = (track: Track) => render(<SongTitle song={track} />);

  it("renders song title and artist with correct styles", () => {
    const mockTrack: Track = {
      id: 1,
      title: "Shimmer",
      artist: "Echo Sun",
      duration: 200,
      audio: "audio.mp3",
      cover: "cover.jpg",
    };

    renderWithTrack(mockTrack);

    expect(screen.getByText("Shimmer")).toBeInTheDocument();
    expect(screen.getByText("Echo Sun")).toBeInTheDocument();

    expect(screen.getByText("Shimmer")).toHaveClass("font-fontmain", "text-2xl", "text-text");
    expect(screen.getByText("Echo Sun")).toHaveClass("font-fontalt", "text-text");
  });

  it("renders alternate track correctly", () => {
    const mockTrack: Track = {
      id: 2,
      title: "Ocean Glow",
      artist: "Neon Drift",
      duration: 180,
      audio: "glow.mp3",
      cover: "glow.jpg",
    };

    renderWithTrack(mockTrack);

    expect(screen.getByText("Ocean Glow")).toBeInTheDocument();
    expect(screen.getByText("Neon Drift")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const mockTrack: Track = {
      id: 3,
      title: "Twilight Breeze",
      artist: "Dream Shapes",
      duration: 240,
      audio: "twilight.mp3",
      cover: "twilight.jpg",
    };

    const { container } = renderWithTrack(mockTrack);
    expect(container).toMatchSnapshot();
  });
});
