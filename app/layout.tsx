import cn from "classnames";
import "./globals.css";
import { Poppins } from "@next/font/google";
import AppBar from "./app-bar/app-bar";

// TODO: Consider finding a variable-weight font so I don't need to specify the weights
const poppins = Poppins({
  variable: "--font-poppins", // This creates a CSS variable. See it in-use in Tailwind.config
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // I believe this tells the Next font engine to go ahead and swap from the default font
  //  to our desired custom one, even if it does not load within 100ms.
  //  See: (1) https://github.com/vercel/next.js/issues/43692#issuecomment-1336436755
  //       (2) https://nextjs.org/docs/basic-features/font-optimization#choosing-font-display
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(poppins.className, "h-full")}>
      <head />
      {/* The 'auto' setting for the middle row allows it to take up all remaining space while
          also not collapsing any smaller than that row's content (in this case the <main>
          element is that 'auto' row) */}
      <body className="grid h-full grid-rows-[56px_auto_56px] justify-items-center">
        <AppBar />

        <main
          className="prose m-6 mt-20 mb-28 grid place-items-center
                   text-gray-900 prose-a:text-blue-600 prose-a:no-underline
                     md:m-7 md:mt-24 md:mb-32 md:prose-lg lg:m-8 lg:mt-28 lg:mb-36"
        >
          {children}
        </main>

        <footer className="grid w-screen place-items-center border-t border-black/10 bg-gray-100 px-4 text-xs opacity-70 sm:text-sm">
          <p className="text-center">
            Custom-built with
            <svg
              className="mx-1 inline-block h-4 opacity-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            with Next.js, Tailwind.css, and Vercel
          </p>
        </footer>
      </body>
    </html>
  );
}
