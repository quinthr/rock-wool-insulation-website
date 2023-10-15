import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <>
      <h1 className='relative m-0 block p-0 leading-[0]'>
        <Link href='/'>
          <Image
            src='/rock-wool insulation-logos_black.png'
            alt='Rock-wool Insulation Logo'
            height='30'
            width='200'
            layout='intrinsic'
          />
        </Link>
      </h1>
    </>
  );
};

export default Logo;
