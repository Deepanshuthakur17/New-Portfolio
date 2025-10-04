import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-300 py-8 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="inline"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.1-1.7-1.1-1.7-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.7-1.4-2.5-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.6.1-3.3 0 0 .9-.3 3 .9.9-.2 1.8-.3 2.7-.3s1.8.1 2.7.3c2.1-1.2 3-.9 3-.9.6 1.7.2 3 .1 3.3.7.9 1.1 2 1.1 3.2 0 4.5-2.7 5.5-5.2 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6C20.7 21.4 24 17 24 12 24 5.65 18.85.5 12 .5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="inline"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.76 0 5-2.239 5-5V5c0-2.761-2.24-5-5-5zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.622c-1.137 0-2.06-.934-2.06-2.084 0-1.15.923-2.083 2.06-2.083 1.137 0 2.06.933 2.06 2.083 0 1.15-.923 2.084-2.06 2.084zm15.112 12.83h-3.56v-5.605c0-1.336-.027-3.054-1.86-3.054-1.861 0-2.147 1.454-2.147 2.958v5.701h-3.56V9h3.417v1.561h.048c.476-.902 1.637-1.854 3.37-1.854 3.605 0 4.271 2.373 4.271 5.458v6.287z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="inline"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.56c-.89.4-1.83.67-2.82.79a4.92 4.92 0 002.16-2.71 9.84 9.84 0 01-3.12 1.2 4.91 4.91 0 00-8.38 4.47A13.94 13.94 0 011.67 3.15a4.91 4.91 0 001.52 6.56 4.9 4.9 0 01-2.22-.61v.06a4.91 4.91 0 003.94 4.81 4.93 4.93 0 01-2.21.08 4.91 4.91 0 004.59 3.42A9.86 9.86 0 010 19.54a13.89 13.89 0 007.55 2.21c9.06 0 14.02-7.51 14.02-14.02 0-.21 0-.43-.02-.64A10.05 10.05 0 0024 4.56z" />
            </svg>
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} <span className="font-semibold">Deepanshu Thakur</span>. All Rights Reserved.
        </p>

        <p className="text-xs mt-2 text-gray-400">
          Designed & Built using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
}
