import Carousel from '@/components/Carousel';
import CategoryMenu from '@/components/CategoryMenu';
import Header from '@/components/Header';
import PromoBox from '@/components/PromoBox';

export default function Home() {
  return (
    <>
      <div className='mx-auto my-0 max-w-[1470px] shadow-2xl'>
        <Header />
        <main className='block p-0'>
          <div className='relative'>
            <div className='mx-auto w-full max-w-[1440px] px-4'>
              <div className='-mx-4  flex min-h-0 flex-wrap items-start'>
                <div className='relative my-0 min-h-[1px]  w-full max-w-[25%] px-4'>
                  <div className='flex h-[60px] cursor-pointer items-center bg-black pl-5 text-xl font-bold uppercase text-white'>
                    Categories
                  </div>
                  <div className=''>
                    <CategoryMenu />
                  </div>
                </div>
                <div className='relative min-h-[1px] w-full max-w-[75%] px-4 '>
                  <Carousel />
                </div>
              </div>
            </div>
            <div className='mx-auto mb-0 mt-8 w-full max-w-[1440px] px-4'>
              <div className='-mx-4 flex min-h-0 flex-row flex-wrap content-center items-center'>
                <PromoBox
                  url='#'
                  image='promobox1.png'
                  header1='DeWALT'
                  header2='Power tools'
                  buttonText='Shop now'
                />
                <PromoBox
                  url='#'
                  image='promobox1.png'
                  header1=''
                  header2='Stone Cutter'
                  buttonText='Shop now'
                />
                <PromoBox
                  url='#'
                  image='promobox1.png'
                  header1=''
                  header2='Wall Chaser'
                  buttonText='Shop now'
                />
              </div>
            </div>
            <div className='mx-auto mb-0 mt-24 w-full max-w-[1440px] px-4'>
              <div className='my-0'>
                <h3 className='relative m-0 flex w-full flex-wrap items-center justify-center text-center text-4xl capitalize leading-none text-black'>
                  <span className='featured-products-heading relative m-0 font-bold'>
                    Featured Products
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </main>
      </div>
      ;
    </>
  );
}
