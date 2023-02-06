"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedMain({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    //<AnimatePresence mode="sync">
    //<AnimatePresence mode="popLayout">

    // The onExitComplete callback that scrolls the window to the top should fire when the exit animation
    //  is complete.  Some argue that is needed to ensure that the new destination page starts at the top
    //  since Next.js will try to cache the scroll position that the user was at when they navigated away
    //  from that page (and they argue it is weird to transition them into the middle of that page, if
    //  that's where they were when they left that page).
    // NOTE: Currently the onExitComplete callback does not fire (with the Beta version the app directory
    //  in Next.js v13).  Hopefully they'll fix that soon (not sure if it is an issue with Next.js v13 or
    //  Framer Motion though).
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }} // <-- Exit animation is not working with Next.js v13 app directory
        transition={{ duration: 0.45 }}
        className="prose m-6 mt-20 mb-28 grid place-items-center
                      text-gray-900 prose-a:text-blue-600
                      prose-a:no-underline md:m-7 md:mt-24 md:mb-32 md:prose-lg lg:m-8 lg:mt-28 lg:mb-36"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
