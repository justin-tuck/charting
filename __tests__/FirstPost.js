import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FirstPost from "../pages/posts/first-post";


it("Renders appropriately", () => {
  render(<FirstPost />);
  expect(
    screen.getByRole("heading", { name: "First Post" })
  ).toBeInTheDocument();
});