import Logo from './Logo';
import Search from './Search';
import Cart from './Cart';

const Header = () => {
  return (
    <>
      <header className='relative block w-full'>
        <div className='z-9999 relative left-0 top-0 mb-0 w-full'>
          <div className='bg-white'>
            <div className='mx-auto w-full max-w-[1440px] px-4'>
              <div className='relative mt-0 inline-block w-full bg-transparent px-0 py-5'>
                <div className='-mx-4 flex flex-wrap items-center'>
                  <div className='relative min-h-[1px] w-full max-w-[25%] px-4 text-left'>
                    <Logo />
                  </div>
                  <div className='relative min-h-[1px] w-full max-w-[41.67%] px-4 text-left'>
                    <Search />
                  </div>
                  <div className='relative min-h-[1px] w-full max-w-[33.33%] overflow-visible px-4 text-right'>
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
