"use client";

import type { FC } from "react";
import HeartBrokenGlyph from "components/icon-glyphs/heart_broken-glyph";
//import { gameTokenColorClassNames } from "components/edge-function-game/edge-function-game";

interface GameTokenForDescriptionProps {
  tokenType: "local" | "network";
}

// TODO: Once I've moved have the edge-function-game project into this repo, then I'll need
//       to replace this with the import (as hinted at above) since these colors are defined
//       in the edge-function-game component (I'm putting this copy here temporarily).
const gameTokenColorClassNames = {
  local: "text-[#ffff3d]",
  network: "text-[#4ddeff]",
};

const GameTokenForDescription: FC<GameTokenForDescriptionProps> = ({
  tokenType,
}) => {
  return (
    <HeartBrokenGlyph
      className={`${
        tokenType === "local"
          ? gameTokenColorClassNames.local
          : gameTokenColorClassNames.network
      } inline h-[22px] rounded-3xl bg-black/80 p-[3px]`}
    />
  );
};
export default GameTokenForDescription;
