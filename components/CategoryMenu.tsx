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

const links: { title: string; href: string }[] = [
  {
    title: 'Acoustic Insulation',
    href: '/',
  },
  {
    title: 'Ceiling Insulation',
    href: '/',
  },
  {
    title: 'Pipe Insulation',
    href: '/',
  },
  {
    title: 'Wall Insulation',
    href: '/',
  },
  {
    title: 'Roof Insulation',
    href: '/',
  },
  {
    title: 'Paroc Insulation',
    href: '/',
  },
  {
    title: 'Bradford Insulation',
    href: '/',
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
            className='flex w-full flex-col'
          >
            {links.map((link) => (
              <>
                <NavigationMenuItem
                  className='relative !mx-0 flex h-16 w-full items-center border border-solid border-[#edb702] bg-[#f8bf00] leading-10 hover:border-white hover:bg-white'
                  key={link.title}
                >
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={clsx(
                        navigationMenuTriggerStyle(),
                        '!bg-transparent px-5 text-base capitalize leading-10 tracking-widest hover:!text-[#f8bf00]'
                      )}
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
