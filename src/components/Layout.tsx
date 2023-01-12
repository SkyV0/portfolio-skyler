import * as React from 'react';
import Home from './Home';

export default function Layout({ children }: { children: React.ReactNode }) {

  return <>
    <Home/>
      {children}
  </>
}

