'use client';
import Link from 'next/link';
import clsx from 'clsx';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const links: { title: string; href: string; key: string }[] = [
  {
    title: 'Acoustic Insulation',
    href: '/',
    key: 'acoustic-insulation',
  },
  {
    title: 'Ceiling Insulation',
    href: '/',
    key: 'ceiling-insulation',
  },
  {
    title: 'Pipe Insulation',
    href: '/',
    key: 'pipe-insulation',
  },
  {
    title: 'Wall Insulation',
    href: '/',
    key: 'wall-insulation',
  },
  {
    title: 'Roof Insulation',
    href: '/',
    key: 'roof-insulation',
  },
  {
    title: 'Paroc Insulation',
    href: '/',
    key: 'paroc-insulation',
  },
  {
    title: 'Bradford Insulation',
    href: '/',
    key: 'bradford-insulation',
  },
];

const CategoryMenu = () => {
  return (
    <>
      <NavigationMenu
        aria-label='categoryMenu'
        className='w-full max-w-[100%] items-start justify-start'
      >
        <div className='w-full'>
          <NavigationMenuList
            data-aria-orientation='vertical'
            data-orientation='vertical'
            className='flex w-full flex-col '
          >
            {links.map((link, index) => (
              <>
                <NavigationMenuItem
                  className='relative !mx-0 flex w-full items-center border border-solid border-[#edb702] bg-[#f8bf00] py-5 leading-[60px] hover:border-white hover:bg-white'
                  key={link.key}
                >
                  <Link href={link.href} key={link.key} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={clsx(
                        navigationMenuTriggerStyle(),
                        'h-16 !bg-transparent px-5 py-5 text-2xl capitalize leading-[60px] hover:!text-[#f8bf00]'
                      )}
                      key={link.key}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </>
            ))}
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </>
  );
};

export default CategoryMenu;
