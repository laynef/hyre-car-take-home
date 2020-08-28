import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


interface ImageData {
    mime: string;
    width: number;
    height: number;
    link: string;
    thumbnailLink: string;
}

interface QueriedData {
    year: string;
    make: string;
    model: string;
    transparent: string;
    size: string;
    format: string;
}

interface Props {
    images: ImageData[];
    query: QueriedData;
}

interface GalleryItem {
    src: string;
    caption: string;
    altText: string;
}

const setItems = ({ link, year, make, model, thumbnailLink }: ImageData & QueriedData): GalleryItem => ({
    src: thumbnailLink || link,
    caption: `${year} ${make} ${model}`,
    altText: `${year} ${make} ${model}`,
})

const Gallery : React.FC<Props> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = (props.images || []).map((image: any) => setItems({ ...image, ...props.query }));

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item: GalleryItem) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="w-100"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Gallery;