import cn from "classnames";
import "./globals.css";
import { Poppins } from "@next/font/google";
import AppBar from "./app-bar/app-bar";

// TODO: Consider finding a variable-weight font so I don't need to specify the weights
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className="grid h-full grid-rows-[56px_auto_56px]">
        <AppBar />

        <main
          className="prose grid max-w-none place-items-center p-5 pb-24
                   text-gray-900 prose-a:text-blue-600 prose-a:no-underline
                     md:prose-lg md:p-6 md:pb-24 lg:p-8 lg:pb-24"
        >
          {children}
        </main>

        <footer className="grid place-items-center border-t border-black/10 bg-gray-100 px-4 text-xs opacity-70 sm:text-sm">
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
