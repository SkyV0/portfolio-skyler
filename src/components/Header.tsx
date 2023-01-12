import React, { useState, useEffect } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { useTheme } from 'next-themes';

const navigation = [
  { name: 'Home', href: '/', current: false },
   { name: 'About', href: '/about', current: false }
]
function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ')
}
function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);


  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
<>
        <div className="w-10 h-10 text-black rounded-full bg-white p-2  hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" role="button" onClick={() => setTheme('light')} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          </div>
          </>
      )
    }
    else {
      return (
        <>
        <div className="w-10 h-10 text-black rounded-full bg-white p-2  hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" role="button" onClick={() => setTheme('dark')} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          </div>
          </>
      )
    }
  };
  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg dark:bg-gray-800'}`}>
    <>
    <Disclosure as="nav">
     {({ open }) => (
       <>
         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
           <div className="relative flex h-16 items-center justify-between">
             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
               {/* Mobile menu button*/}
               <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-gray-800 dark:text-white dark:hover:bg-gray-800">
                 <span className="sr-only">Open main menu</span>
                 {open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-6 w-6">
                          <path strokeLinecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                 ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-6 w-6">
                            <path strokeLinecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                 )}
               </Disclosure.Button>
                </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <h1 className="text-3xl ml-8 flex justify-left items-center font-bold text-black dark:text-white">Welcome, </h1>
          </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
         
               <div className="hidden sm:ml-6 sm:block">
                 <div className="flex space-x-4">
                   {navigation.map((item) => (
                     <a
                       key={item.name}
                       href={item.href}
                       className={classNames(
                         item.current ? ' text-white bg-red-600 dark:text-white' : 'text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-gray-800 dark:hover:text-white',
                         'px-3 py-2 rounded-md text-sm font-medium'
                       )}
                       aria-current={item.current ? 'page' : undefined}
                     >
                       {item.name}
                     </a>
                   ))}
                 </div>
                 
               </div>
             </div>
             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               {/* Profile dropdown */}
               <Menu as="div" className="relative ml-3">
               </Menu>
                <div className="container pl-2 py-4 flex justify-between items-center">
             {renderThemeChanger()}
           </div>

             </div>
           
           </div>
         </div>

         <Disclosure.Panel className="sm:hidden">
           <div className="space-y-1 px-2 pt-2 pb-3">
             {navigation.map((item) => (
               <Disclosure.Button
                 key={item.name}
                 as="a"
                 href={item.href}
                 className={classNames(
                   item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-white',
                   'block px-3 py-2 rounded-md text-base font-medium'
                 )}
                 aria-current={item.current ? 'page' : undefined}
               >
                 {item.name}
               </Disclosure.Button>
             ))}
              
           </div>
         </Disclosure.Panel>
  
       </>
     )}
      </Disclosure>
      </>
    </header>
  );
}

export default Header;
