"use client";

import {
  motion,
  Variants,
  useAnimationControls,
  TargetAndTransition,
} from "framer-motion";
import { useEffect } from "react";
import TwitchLogo from "./twitch-logo";
import Avatar from "./avatar";
import PlusIcon from "./plus-icon";
import { useMediaQuery } from "lib/useMediaQuery";

//#region --- Framer Motion Variants ---
interface TwitchOverlayVariants extends Variants {
  allHidden: TargetAndTransition;
  scrimVisible: TargetAndTransition;
  twitchLogoRevealed: TargetAndTransition;
  pairRevealed: TargetAndTransition;
  allAscended: TargetAndTransition;
}

const wrapperVariants: TwitchOverlayVariants = {
  allHidden: { y: "0vh" },
  scrimVisible: {},
  twitchLogoRevealed: {},
  pairRevealed: {},
  allAscended: { y: "-100vh" },
};

const purpleScrimVariants: TwitchOverlayVariants = {
  allHidden: {
    opacity: 0,
  },
  scrimVisible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  twitchLogoRevealed: {},
  pairRevealed: {},
  allAscended: {},
};

// Constants for the main "pair" of elements: the Twitch logo and my avatar
const pairConstants = {
  outOfViewY: "-60vh",
  getStartingX: (nagative: boolean) => {
    const plusIconHalfWidth = "24px"; // Half the width of the plus icon that appears between the logo and avatar
    // We have to use this weird syntax for creating a negative value via the calc() function.  See: https://stackoverflow.com/a/25205523/718325
    return nagative
      ? `calc(-1 * 50% - ${plusIconHalfWidth})`
      : `calc(50% + ${plusIconHalfWidth})`;
  },
  pairRevealedXShift: {
    // The horizontal distance (in pixels) to travel from center into the "pairRevealed" state
    largeScreen: 240,
    smallScreen: 180,
  },
};

const twitchLogoVariants: TwitchOverlayVariants = {
  allHidden: {
    y: pairConstants.outOfViewY,
    x: pairConstants.getStartingX(true),
    opacity: 1,
  },
  scrimVisible: {},
  twitchLogoRevealed: {
    y: "0vh",
    transition: {
      duration: 0.3,
      //type: "spring",
      // damping: 16,
      // stiffness: 120,
    },
  },
  pairRevealed: {
    x: -pairConstants.pairRevealedXShift.largeScreen,
  },
  allAscended: {},
};

const avatarVariants: TwitchOverlayVariants = {
  allHidden: {
    opacity: 0,
    x: pairConstants.getStartingX(false),
  },
  scrimVisible: {},
  twitchLogoRevealed: {},
  pairRevealed: {
    opacity: 1,
    x: pairConstants.pairRevealedXShift.largeScreen,
  },
  allAscended: {},
};

const plusIconVariants: TwitchOverlayVariants = {
  allHidden: {
    opacity: 0,
  },
  scrimVisible: {},
  twitchLogoRevealed: {},
  pairRevealed: {
    opacity: 1,
  },
  allAscended: {},
};

function setUpVariants() {
  const variants = [
    wrapperVariants,
    purpleScrimVariants,
    twitchLogoVariants,
    avatarVariants,
    plusIconVariants,
  ];
  // Set up common timing properties so that variants for each element run in-sync
  variants.forEach((variant) => {
    variant.pairRevealed.transition = {
      delay: 0.8,
      type: "tween", // 'spring' is default
      duration: 0.3,
    };
    variant.allAscended.transition = {
      delay: 0.8,
      type: "tween",
      duration: 0.34,
    };
  });
}
setUpVariants();

function updateVariantsForScreenSize(isSmallScreen: boolean) {
  let xValue;

  if (isSmallScreen) {
    xValue = pairConstants.pairRevealedXShift.smallScreen;
  } else {
    xValue = pairConstants.pairRevealedXShift.largeScreen;
  }
  twitchLogoVariants.pairRevealed.x = -xValue;
  avatarVariants.pairRevealed.x = xValue;
}

//#endregion --- end Framer Motion Variants ---

export default function TwitchOverlay({
  animationCount,
}: {
  animationCount: number;
}) {
  const animationControls = useAnimationControls();
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  async function runAnimationStates() {
    animationControls.set("allHidden");
    await animationControls.start("scrimVisible");
    await animationControls.start("twitchLogoRevealed");
    // Delay happens here (currently defined in the variants or the setup function)
    await animationControls.start("pairRevealed");
    // Delay happens here too
    await animationControls.start("allAscended");
  }

  useEffect(() => {
    updateVariantsForScreenSize(isSmallScreen);
    runAnimationStates();
  }, [animationCount]);

  return (
    <motion.div
      variants={wrapperVariants}
      animate={animationControls}
      className="not-prose fixed top-0 left-0 right-0 z-50 h-full bg-white"
    >
      <motion.div
        variants={purpleScrimVariants}
        className="grid h-full place-items-center bg-[#9147FF] opacity-0"
      >
        <div className="flex items-center">
          <motion.span
            variants={avatarVariants}
            className="inline-block opacity-0"
          >
            <Avatar className="h-20 w-20 sm:h-36 sm:w-36" />
          </motion.span>
          <motion.span
            variants={plusIconVariants}
            className="inline-block opacity-0"
          >
            <PlusIcon className="h-12 w-12 fill-white opacity-70" />
          </motion.span>
          <motion.span
            variants={twitchLogoVariants}
            className="inline-block opacity-0 "
          >
            <TwitchLogo className="h-20 sm:h-36" />
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}
