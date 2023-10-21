import Image from 'next/image';
import Link from 'next/link';

const PromoBox = ({
  url,
  image,
  header1,
  header2,
  buttonText,
}: {
  url: string;
  image: string;
  header1: string;
  header2: string;
  buttonText: string;
}) => {
  return (
    <>
      <div className='relative my-0 min-h-[1px] w-1/3 max-w-[33.33%] px-4 py-0 '>
        <div className='relative'>
          <div className=''>
            <div className='relative h-auto max-w-[100%] overflow-hidden'>
              <Link href={url}>
                <Image
                  src={`/${image}`}
                  height={269}
                  width={450}
                  alt={header1}
                  className='scale-100 transform transition-transform hover:scale-110'
                />
              </Link>
            </div>
          </div>
          <div className='absolute bottom-0 right-[15%] top-0 z-[1] flex transform flex-col justify-center text-center'>
            <div className='mb-3 text-lg font-normal capitalize leading-6 tracking-[0.75px] text-black no-underline'>
              {header1}
            </div>
            <div className='mb-5 p-0 text-2xl  font-normal uppercase leading-6 tracking-[0.75px] text-black no-underline'>
              {header2}
            </div>
            <div className='mt-3'>
              <Link
                href='#'
                className='promo-button relative mb-0 h-auto min-w-[auto] border-0 bg-transparent p-0 text-sm font-normal uppercase leading-6 tracking-[2.5px] text-black'
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoBox;
