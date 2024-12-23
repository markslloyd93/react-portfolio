import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Work Card", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByTestId("cardSection")).toBeInTheDocument();
  });
});
