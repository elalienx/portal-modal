// NPM Packages
import { render, screen } from "@testing-library/react";

// Project files
import App from "./App";

test("should render the download info link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn more/i);
  expect(linkElement).toBeInTheDocument();
});
