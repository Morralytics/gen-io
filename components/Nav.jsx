"use client";
// Import allows us to move through other pages of the app
import Link from "next/link";
// Import will automatically optomize the image
import Image from "next/image";
// Import hooks that will be used within this component
import { useState, useEffect } from "react";
// Import will utilize nextjs to make signing in and out easy
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Gen-io Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Gen-io</p>
      </Link>

      {/* Desktop Nav */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src=""
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src=""
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => {}}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
