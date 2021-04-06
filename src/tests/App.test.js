import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(<App />);
  const h1Element = screen.getByText(/weather app/i);
  expect(h1Element).toBeInTheDocument();
});
