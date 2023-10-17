'use client';

import * as React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const NavMenu = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  navigationMenuTriggerStyle(),
                  'text-2xl uppercase leading-[56px] tracking-[2px]'
                )}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  navigationMenuTriggerStyle(),
                  'text-2xl uppercase leading-[56px] tracking-[2px]'
                )}
              >
                Shop
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  navigationMenuTriggerStyle(),
                  'text-2xl uppercase leading-[56px] tracking-[2px]'
                )}
              >
                Contact us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  navigationMenuTriggerStyle(),
                  'text-2xl uppercase leading-[56px] tracking-[2px]'
                )}
              >
                About us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavMenu;
