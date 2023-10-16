import CategoryMenu from '@/components/CategoryMenu';
import Header from '@/components/Header';

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
                  <div className='flex h-16 cursor-pointer items-center bg-black pl-5 text-base font-bold uppercase text-white'>
                    Categories
                  </div>
                  <div className=''>
                    <CategoryMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      ;
    </>
  );
}
