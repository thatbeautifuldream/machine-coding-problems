import React from "react";
import SlideShow from "@/app/slide-show/SlideShow";

const slides = [
  {
    title: "First Slide",
    image: "https://placehold.co/600x400/orange/white?text=Slide%201",
  },
  {
    title: "Second Slide",
    image: "https://placehold.co/600x400/red/white?text=Slide%202",
  },
  {
    title: "Third Slide",
    image: "https://placehold.co/600x400/orange/white?text=Slide%203",
  },
  {
    title: "Last Slide",
    image: "https://placehold.co/600x400/black/white?text=Slide%204",
  },
];
export default function Page() {
  return <SlideShow slides={slides} />;
}
