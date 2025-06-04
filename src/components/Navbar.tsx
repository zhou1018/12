'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: '首页', href: '/' },
  { name: '关于我们', href: '/about' },
  { name: '服务领域', href: '/services' },
  { name: '团队介绍', href: '/team' },
  { name: '联系我们', href: '/contact' },
];

const enNavigation = [
  { name: 'Home', href: '/en' },
  { name: 'About', href: '/en/about' },
  { name: 'Services', href: '/en/services' },
  { name: 'Team', href: '/en/team' },
  { name: 'Contact', href: '/en/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const currentNavigation = isEnglish ? enNavigation : navigation;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={isEnglish ? '/en' : '/'} className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-gray-900">LAW FIRM</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {currentNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={isEnglish ? pathname.replace('/en', '') : '/en' + pathname}
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
          >
            {isEnglish ? '中文' : 'English'}
          </Link>
        </div>
      </nav>
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-900/80" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={isEnglish ? '/en' : '/'} className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-gray-900">LAW FIRM</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {currentNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href={isEnglish ? pathname.replace('/en', '') : '/en' + pathname}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isEnglish ? '中文' : 'English'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 