'use client';

import Link from "next/link";
import { useSession } from "@supabase/auth-helpers-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const session = useSession();

  return (
    <nav className="text-black dark:text-white bg-white border-gray-200 dark:bg-gray-900 z-10 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="h-8 w-8 rounded-full bg-music-gradient flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-gradient">
            MoodMix
          </span>
        </Link>

        {/* Right section */}
        <div className="flex md:order-2 space-x-2">
          <Link href={session ? "/dashboard" : "/login"}>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              {session ? "Dashboard" : "Sign In"}
            </Button>
          </Link>
          <ThemeToggle />
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

      {/* Mobile menu */}
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li><Link href="/" className="nav-link active">Home</Link></li>
          <li><Link href="#about" className="nav-link">About</Link></li>
          <li><Link href="#features" className="nav-link">Features</Link></li>
          <li><Link href="#contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
  );

}
