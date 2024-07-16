import {
  AlignJustify,
  CircleUserRound,
  Home,
  List,
  MessageCircle,
  User,
} from "lucide-react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/contexts/AuthContext";
import Link from "next/link";

export default function Header() {
  return (
    // <nav className="flex justify-between items-center px-7 py-3 border-b">
    //   <Link href={"/"}>
    //     <img className="h-16" src="/logo_tag.png" alt="" />
    //   </Link>
    //   <ul className="flex gap-6 items-center">
    //     <Link href={"/"}>
    //       <li className="flex items-center gap-2">
    //         <Home />
    //         Home
    //       </li>
    //     </Link>
    //     <Link href={"/categories"}>
    //       <li className="flex items-center gap-2">
    //         <List />
    //         Categories
    //       </li>
    //     </Link>
    //     <Link href={"/"}>
    //       <li className="flex items-center gap-2">
    //         <MessageCircle />
    //         Contact Us
    //       </li>
    //     </Link>
    //   </ul>
    //   <AuthContextProvider>
    //     <LoginButton />
    //   </AuthContextProvider>
    // </nav>

    <nav>
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center px-4 py-2 border-b bg-white">
        {/* "All Sections" Button */}
        <div className="hidden md:block">
          <button className="flex items-center gap-2 bg-gray-300 text-sm font-semibold text-black px-3 py-2 rounded-md">
            <AlignJustify className="w-5 h-5" />
            All Sections
          </button>
        </div>

        {/* Logo */}
        <div className="flex-grow md:flex-grow-0 flex justify-center md:justify-center">
          <Link href="/">
            <img className="h-10 lg:h-20" src="/logo_new.png" alt="logo" />
          </Link>
        </div>

        {/* "Subscribe" and "Login" Buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden md:flex items-center gap-2 bg-gray-300 text-sm font-semibold text-black px-3 py-2 rounded-md">
            Subscribe
          </button>
          <AuthContextProvider>
            <div className="hidden md:block">
              <LoginButton />
            </div>
          </AuthContextProvider>
        </div>
      </div>

      {/* Responsive Navbar */}
      <div className="bg-white shadow dark:bg-gray-800">
        <div className="container flex flex-wrap items-center justify-left p-4 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
