import "@testing-library/jest-dom/vitest";
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CoverArt from "../components/CoverArt";

const mockCover = "https://example.com/cover.jpg";
const mockLyrics = "These are test lyrics.";
const mockId = "test-song-id";

describe("CoverArt", () => {
  it("renders with provided cover image", () => {
    render(<CoverArt cover={mockCover} />);
    const img = screen.getByAltText(/cover art/i);
    expect(img).toHaveAttribute("src", mockCover);
  });

  it("renders placeholder if no cover provided", () => {
    render(<CoverArt />);
    const img = screen.getByAltText(/cover art/i);
    expect(img.src).toContain("data:image/svg+xml");
  });

  it("displays lyrics on hover after fetching", async () => {
    render(<CoverArt id={mockId} />);
    const container = screen.getByRole("img", { name: /cover art/i }).parentElement!;
    fireEvent.mouseEnter(container);

    await waitFor(() => {
      expect(screen.getByText(mockLyrics)).toBeInTheDocument();
    });

    fireEvent.mouseLeave(container);
    await waitFor(() => {
      expect(screen.queryByText(mockLyrics)).not.toBeInTheDocument();
    });
  });

  it("matches snapshot", () => {
    const { container } = render(<CoverArt cover={mockCover} />);
    expect(container).toMatchSnapshot();
  });
});
