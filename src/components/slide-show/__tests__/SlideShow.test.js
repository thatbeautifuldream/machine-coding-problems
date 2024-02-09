import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SlideShow from "../SlideShow";

const slides = [
  { title: "Slide 1", image: "https://example.com/slide1.png" },
  { title: "Slide 2", image: "https://example.com/slide2.png" },
  { title: "Slide 3", image: "https://example.com/slide3.png" },
];

describe("SlideShow component", () => {
  test("renders first slide on initial render", () => {
    const { getByRole } = render(<SlideShow slides={slides} />);
    const slideHeading = getByRole("heading");
    expect(slideHeading).toBeInTheDocument();
    expect(slideHeading).toHaveTextContent(slides[0].title);
    const slideImage = getByRole("img");
    expect(slideImage).toBeInTheDocument();
    expect(slideImage.src).toBe(slides[0].image);
  });

  test("renders next slide when next button is clicked", () => {
    const { getByText, getByTestId, getByRole } = render(
      <SlideShow slides={slides} />
    );
    const nextButton = getByTestId("next-button");
    fireEvent.click(nextButton);
    const slideHeading = getByText(slides[1].title);
    expect(slideHeading).toBeInTheDocument();
    const slideImage = getByRole("img");
    expect(slideImage).toBeInTheDocument();
    expect(slideImage.src).toBe(slides[1].image);
  });

  test("renders previous slide when previous button is clicked", () => {
    const { getByText, getByTestId } = render(<SlideShow slides={slides} />);
    const nextButton = getByTestId("next-button");
    fireEvent.click(nextButton);
    const previousButton = getByTestId("prev-button");
    fireEvent.click(previousButton);
    const slideImage = getByText(slides[0].title);
    expect(slideImage).toBeInTheDocument();
  });

  test("renders first slide when reset button is clicked", () => {
    const { getByText, getByTestId } = render(<SlideShow slides={slides} />);
    const nextButton = getByTestId("next-button");
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    const resetButton = getByTestId("reset-button");
    fireEvent.click(resetButton);
    const slideImage = getByText(slides[0].title);
    expect(slideImage).toBeInTheDocument();
  });

  test("disables prev and reset buttons on first slide", () => {
    const { getByTestId } = render(<SlideShow slides={slides} />);
    const previousButton = getByTestId("prev-button");
    const resetButton = getByTestId("reset-button");
    expect(previousButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  test("disables next button on last slide", () => {
    const { getByTestId } = render(<SlideShow slides={slides} />);
    const nextButton = getByTestId("next-button");
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    expect(nextButton).toBeDisabled();
  });
});
