import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";

describe("Work Card", () => {
  it("renders without crashing", () => {
    render(<HomePage />);
    expect(screen.getByTestId("cardSection")).toBeInTheDocument();
  });
});
