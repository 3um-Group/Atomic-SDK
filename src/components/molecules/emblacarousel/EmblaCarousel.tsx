import React, { useEffect, useCallback, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton } from '../../atoms/dotbutton/DotButton';
import { ArrowButton } from '../../atoms/arrowbutton/ArrowButton';
import useEmblaCarousel from 'embla-carousel-react';
import Image from '../../atoms/image/Image'; // Assuming the path to the Image component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBed, faBath, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

type Slide = {
  src: string;
  alt?: string;
  address: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqFeet: number;
};

type Alignment = 'left' | 'center' | 'right';

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
  slidesToScroll?: number;
  autoplay?: boolean;
  delay?: number;
  pauseOnHover?: boolean;
  arrowButtonAlignment?: Alignment;
  dotButtonAlignment?: Alignment;
  showArrowButtons?: boolean;
  showDotButtons?: boolean;
  className?: string;
  showOverlay?: boolean;
};

const EmblaCarousel: React.FC<PropType> = ({
  slides,
  options,
  slidesToScroll = 1,
  autoplay = false,
  delay = 3000,
  pauseOnHover = true,
  arrowButtonAlignment = 'left',
  dotButtonAlignment = 'right',
  showArrowButtons = false, 
  showDotButtons = false, 
  className = '',
  showOverlay = false, 
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    slidesToScroll,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const play = () => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
    };

    const interval = setInterval(() => {
      if (!isHovered) {
        play();
      }
    }, delay);

    return () => clearInterval(interval);
  }, [emblaApi, autoplay, delay, isHovered]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Determine alignment classes for Arrow and Dot buttons
  const arrowAlignmentClass = arrowButtonAlignment === 'left'
    ? 'justify-start'
    : arrowButtonAlignment === 'right'
    ? 'justify-end'
    : 'justify-center';

  const dotAlignmentClass = dotButtonAlignment === 'left'
    ? 'justify-start'
    : dotButtonAlignment === 'right'
    ? 'justify-end'
    : 'justify-center';

  // Use provided className if it exists, otherwise default to the base class
  const containerClassName = className ? className : 'relative max-w-4xl mx-auto';

  return (
    <div
      className={`${containerClassName}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              className="flex-[0_0_100%] p-2 relative"
              key={index}
            >
              <Image
                src={slide.src}
                alt={slide.alt || `Slide ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
              {/* Property Details Overlay */}
              {showOverlay && (
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-60 p-4 rounded-md text-black">
                  <h2 className="font-bold text-lg">{slide.address}</h2>
                  <p className="semi-bold">{slide.location}</p>
                  <p className="font-bold">{slide.price}</p>
                  <p className="semi-bold">
                    <FontAwesomeIcon icon={faBed} className="mr-1" /> {slide.beds} Beds |{' '}
                    <FontAwesomeIcon icon={faBath} className="mr-1" /> {slide.baths} Baths |{' '}
                    <FontAwesomeIcon icon={faRulerCombined} className="mr-1" /> {slide.sqFeet} Sq Ft
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center px-4 mt-4">
        {showArrowButtons && (
          <div className={`flex ${arrowAlignmentClass} space-x-2 w-full`}>
            <ArrowButton onClick={scrollPrev} disabled={!emblaApi?.canScrollPrev()} direction="prev" />
            <ArrowButton onClick={scrollNext} disabled={!emblaApi?.canScrollNext()} direction="next" />
          </div>
        )}
        {showDotButtons && (
          <div className={`flex ${dotAlignmentClass} space-x-2 w-full`}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmblaCarousel;