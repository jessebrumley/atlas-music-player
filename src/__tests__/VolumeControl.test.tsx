import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import VolumeControls from "../components/VolumeControls";

describe("VolumeControls", () => {
  const defaultProps = {
    volume: 50,
    onVolumeChange: vi.fn(),
  };

  it("renders volume slider at initial value", () => {
    render(<VolumeControls {...defaultProps} />);
    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveValue("50");
  });

  it("renders AudioLines icon with correct styling", () => {
    render(<VolumeControls {...defaultProps} />);
    const audioIcon = screen.getByRole("img", { hidden: true });
    expect(audioIcon).toBeInTheDocument();
    expect(audioIcon).toHaveClass("text-secondary");
  });

  it("calls onVolumeChange handler when value changes", () => {
    const onVolumeChange = vi.fn();
    render(<VolumeControls volume={50} onVolumeChange={onVolumeChange} />);
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: "80" } });
    expect(onVolumeChange).toHaveBeenCalledWith(80);
  });

  it("applies gradient background based on volume", () => {
    render(<VolumeControls volume={75} onVolumeChange={vi.fn()} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveStyle({
      background:
        "linear-gradient(to right, rgb(99, 102, 241) 75%, rgb(15, 23, 42) 75%)",
    });
  });

  it("enforces volume min/max range", () => {
    render(<VolumeControls {...defaultProps} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("min", "0");
    expect(slider).toHaveAttribute("max", "100");
  });

  it("container has expected styling", () => {
    render(<VolumeControls {...defaultProps} />);
    const wrapper = screen.getByRole("slider").parentElement;
    expect(wrapper).toHaveClass(
      "flex",
      "items-center",
      "gap-4",
      "rounded-lg",
      "bg-surface",
      "p-6",
      "shadow-lg",
      "drop-shadow-md"
    );
  });

  it("volume slider has correct attributes and classes", () => {
    render(<VolumeControls {...defaultProps} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("type", "range");
    expect(slider).toHaveClass(
      "h-2",
      "w-full",
      "cursor-pointer",
      "appearance-none",
      "rounded-lg",
      "accent-primary"
    );
  });

  it("matches snapshot at volume 50", () => {
    const { container } = render(
      <VolumeControls volume={50} onVolumeChange={() => { }} />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot at volume 10", () => {
    const { container } = render(
      <VolumeControls volume={10} onVolumeChange={() => { }} />
    );
    expect(container).toMatchSnapshot();
  });
});
