import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';
import '@/styles/base.css';
import '@/styles/sandbox.css';
import '@/styles/embla.css';

const Carousel = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <div className='w-full'>
        <section className='sandbox__carousel'>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
      </div>
      ;
    </>
  );
};

export default Carousel;
