'use client'
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
    <div>Nav</div>
  )
}

export default Nav