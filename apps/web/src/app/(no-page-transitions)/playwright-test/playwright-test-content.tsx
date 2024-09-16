"use client";
import type { FC } from "react";
import { useState } from "react";
import ExpandMoreGlyph from "components/icon-glyphs/expand_more-glyph";
import IconButton from "components/icon/icon-button";

interface PlaywrightTestContentProps {}

const PlaywrightTestContent: FC<PlaywrightTestContentProps> = ({}) => {
  const [areDetailsExpanded, setAreDetailsExpanded] = useState(false);
  const [isNestedTextShown, setIsNestedTextShown] = useState(false);

  return (
    <div className="grid place-items-center">
      <h2>Hello from the Playwright test page!</h2>

      <IconButton
        data-testid="expand-details-icon"
        onClick={() => setAreDetailsExpanded((prev) => !prev)}
        className={`transition-all duration-200 ${
          areDetailsExpanded ? "rotate-180" : "rotate-0"
        }`}
      >
        <ExpandMoreGlyph />
      </IconButton>

      <div
        data-testid="details-panel"
        className={`transition-all duration-200
          ${
            areDetailsExpanded
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0"
          }`}
      >
        <div className="flex flex-col place-items-center">
          <p data-testid="details-panel-placeholder-text">
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Cras mattis consectetur purus sit amet fermentum. Integer posuere
            erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p data-testid="details-panel-placeholder-text">
            Donec id elit non mi porta gravida at eget metus. Sed posuere
            consectetur est at lobortis. Morbi leo risus, porta ac consectetur
            ac, vestibulum at eros. Donec id elit non mi porta gravida at eget
            metus.
          </p>

          <IconButton
            data-testid="show-nested-text-icon"
            onClick={() => setIsNestedTextShown((prev) => !prev)}
            className={`transition-all duration-200 ${
              isNestedTextShown ? "rotate-180" : "rotate-0"
            }`}
          >
            <ExpandMoreGlyph />
          </IconButton>
          <p
            // className={`transition-all duration-200 text-pink-700
            className={`transition-all duration-200 text-green-500
              ${
                isNestedTextShown
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0"
              }`}
          >
            This is nested hidden text
          </p>
        </div>
      </div>
    </div>
  );
};
export default PlaywrightTestContent;
