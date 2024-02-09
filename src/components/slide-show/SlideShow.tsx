"use client";

import React from "react";
/**
 * 1. Create a SlideShow component that renders a slideshow of images
 *    along with Next, Prev, and Reset buttons.
 * 2. The component takes an array of slides as props,
 *    where each slide has a `title` and an `image` URL.
 * 3. The slideshow should display one slide at a time,
 *    and the Next, Prev, and Reset buttons should allow the user to navigate through the slides.
 * 4. Update the component to disable the Prev and Reset buttons when the first slide is displayed,
 *    and disable the Next button when the last slide is displayed.
 * 5. Additionally, add data-testid attributes to the Next, Prev, and Reset buttons
 *    as `next-button`, `prev-button` and `reset-button` for testing purposes.
 * 6. Open the `Tests` tab and make sure all the tests pass.
 */

type Slide = {
  title: string;
  image: string;
};

const SlideShow = ({ slides }: { slides: Slide[] }) => {
  //   console.log({ slides });
  const [slide, setSlide] = React.useState(slides[0]);

  function prevSlide() {
    setSlide(slides[slides.indexOf(slide) - 1]);
  }

  function resetSlides() {
    setSlide(slides[0]);
  }

  function nextSlide() {
    setSlide(slides[slides.indexOf(slide) + 1]);
  }

  return (
    <div>
      <h2>Slide Show</h2>
      <img src={slide.image} alt={slide.title} />
      <br />
      <div
        style={{ display: "flex", flex: 1, justifyContent: "space-between" }}
      >
        <button
          data-testid="prev-button"
          onClick={() => prevSlide()}
          disabled={slides.indexOf(slide) === 0}
        >
          Prev
        </button>
        <button
          data-testid="reset-button"
          onClick={() => resetSlides()}
          disabled={slides.indexOf(slide) === 0}
        >
          Reset
        </button>
        <button
          data-testid="next-button"
          onClick={() => nextSlide()}
          disabled={slides.indexOf(slide) === slides.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SlideShow;

/**
 * Hint:
 * 1. The data-testids are already added.
 *    Make sure to not remove those attributes so the tests can pass.
 * 2. Make sure the first slide is displayed by default when the component loads.
 * 3. Only modify the `SlideShow.js` file.
 *    Any changes to other files are discarded
 */
