'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import {
  DotButton,
  PrevButton,
  NextButton,
} from './EmblaCarouselArrowsDotsButtons';
import imageByIndex from '@/lib/imageByIndex';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [textIndex, setTextIndex] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
    setTextIndex((prevTextIndex) => !prevTextIndex);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className='embla h-[530px]'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {slides.map((index) => (
              <div className='embla__slide' key={index}>
                <div className='embla__slide__number'>
                  <span>{index + 1}</span>
                </div>
                <Image
                  className='embla__slide__img'
                  src={imageByIndex(index)}
                  alt='Your alt text'
                />
              </div>
            ))}
          </div>
        </div>

        <div className='absolute bottom-5 left-5 right-5 top-5 z-10'>
          <div className='absolute ml-24 flex h-full w-full flex-col items-start justify-center'>
            <div className='p-0'>
              <div
                className={`carousel-text ${
                  textIndex ? 'active' : ''
                } text-left text-white`}
              >
                <div className='text-5xl font-semibold capitalize leading-[50px] tracking-normal text-white'>
                  Building Equipment
                </div>
                <div className='mt-5 text-lg leading-8 tracking-normal text-white'>
                  End of Catalogue Deal
                </div>
                <div>
                  <Link
                    href='#'
                    className='relative mt-8 inline-block h-12 rounded-[50px] border border-solid border-[#f8bf00] bg-[#f8bf00] px-9 text-center text-base font-semibold uppercase leading-10 tracking-[2px] text-white'
                  >
                    Discover Now
                  </Link>
                </div>
              </div>
              <div
                className={`carousel-text ${
                  textIndex ? '' : 'active'
                } text-left text-white`}
              >
                <div className='text-5xl font-semibold capitalize leading-[50px] tracking-normal text-white'>
                  New Fall Collection 2017
                </div>
                <div className='mt-5 text-lg leading-8 tracking-normal text-white'>
                  Sale Off 30% and more gift
                </div>
                <div>
                  <Link
                    href='#'
                    className='relative mt-8 inline-block h-12 rounded-[50px] border border-solid border-[#f8bf00] bg-[#f8bf00] px-9 text-center text-base font-semibold uppercase leading-10 tracking-[2px] text-white'
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='embla__buttons !left-0 right-0 z-20 w-full justify-between'>
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
