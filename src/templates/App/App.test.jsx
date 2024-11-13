import Home from ".";
import { renderTheme } from "../../styles/render-theme";
import { screen } from "@testing-library/react";
import { theme } from "../../styles/theme";

// Testando o tema com styled components
test("renders learn react link", () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole("heading", {
    name: "Hello World!",
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  });
});
