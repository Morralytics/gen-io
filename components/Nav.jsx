'use client';
// Import allows us to move through other pages of the app
import Link from 'next/link';
// Import will automatically optomize the image
import Image from 'next/image';
// Import hooks that will be used within this component
import { useState, useEffect } from 'react';
// Import will utilize nextjs to make signing in and out easy
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image 
          src='/assets/images/logo.svg'
          alt='Gen-io Logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Gen-io</p>
      </Link>
    </nav>
  )
}

export default Nav