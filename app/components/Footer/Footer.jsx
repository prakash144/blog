import React from "react";

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-10">
          <div>
            <p class="font-semibold text-gray-800 dark:text-white">
              Quick Links
            </p>
            <div class="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Home
              </a>
              <a
                href="#"
                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Who We Are
              </a>
              <a
                href="#"
                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Our Philosophy
              </a>
            </div>
          </div>
          <div>
            <p class="font-semibold text-gray-800 dark:text-white">
              Industries
            </p>
            <div class="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Retail & E-Commerce
              </a>
              <a
                href="#"
                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Information Technology
              </a>
              <a
                href="#"
                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Finance & Insurance
              </a>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 dark:border-gray-700" />
        <div class="flex flex-col items-center justify-between lg:flex-row">
          <div class="flex flex-wrap items-center -mx-2 mb-4 lg:mb-0">
            <p class="mx-2 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              &copy; 2024 The Rational Observer. All Rights Reserved.
            </p>
          </div>
          <div class="flex -mx-2">
            <div class="flex gap-2 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="20"
                height="20"
                alt="fb"
              />
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="20"
                height="20"
                alt="tw"
              />
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="20"
                height="20"
                alt="inst"
              />
              <img
                src="https://www.svgrepo.com/show/94698/github.svg"
                class=""
                width="20"
                height="20"
                alt="gt"
              />
              <img
                src="https://www.svgrepo.com/show/22037/path.svg"
                width="20"
                height="20"
                alt="pn"
              />
              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="20"
                height="20"
                alt="in"
              />
              <img
                src="https://www.svgrepo.com/show/22048/dribbble.svg"
                class=""
                width="20"
                height="20"
                alt="db"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
