'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import clsx from 'clsx';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const ProductColumn = () => {
  const [showActions, setShowActions] = useState(false);
  const handleMouseEnter = () => {
    setShowActions(true);
  };

  const handleMouseLeave = () => {
    setShowActions(false);
  };
  return (
    <>
      <div className='relative -mx-4 flex w-full  max-w-[25%] flex-col flex-wrap px-4'>
        <div
          className='bg-white'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='relative z-[3] overflow-hidden'>
            <div className='absolute left-4 top-3 z-50 h-auto min-h-[auto] min-w-[auto] rounded-none border border-solid border-black bg-[#c69f73] px-3 pb-1 pt-2 text-center text-[14px] uppercase tracking-[0.5px] text-white shadow-lg'>
              New
            </div>
            <Link href='#' className='flex justify-center bg-transparent'>
              <Image
                src='/paroc-rockwool.jpg'
                height={330}
                width={330}
                alt='Paroc Rockwool'
              />
            </Link>
            <div
              className={`${
                showActions ? 'block' : 'hidden'
              } absolute right-6 top-3 z-[2] flex transition-all duration-300 ease-in`}
            >
              <div className='mb-3 text-center'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className='mb-3 text-center'>
                      <Link
                        href='#'
                        className='relative inline-block h-[36px] w-[36px] rounded-[50%] border-none bg-white p-0 text-center capitalize leading-[36px] text-[#6c757d] no-underline shadow-md hover:bg-[#f8bf00] hover:text-white'
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          className='mt-4'
                          style={{
                            width: '18px',
                            height: '18px',
                          }}
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to Wishlist</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden pb-1 text-center'>
            <h3 className='mb-3 mt-3 text-3xl leading-4'>
              <Link
                href='#'
                className='text-[14px] font-normal capitalize leading-5 text-black'
              >
                Baguette Diamond
              </Link>
            </h3>
            <div className='mt-0 text-[14px] font-normal leading-6 text-black transition-all duration-500'>
              <span>$162.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductColumn;
