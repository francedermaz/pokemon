import { render, screen } from '@testing-library/react';
import Card from './components/Card/Card';

const pokemon = {
  id: 1,
  name: "test",
  image: "www.none.com",
  types: ["grass","oil"]
}

describe("Card component", () => {
  render(<Card {...pokemon} />);
  const name = screen.getByTestId("name");

  it("name should render a name", () => {
    expect(name.innerHTML).toBe("test");
  });
})
