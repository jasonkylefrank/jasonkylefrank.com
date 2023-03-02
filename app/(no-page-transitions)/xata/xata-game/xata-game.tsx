import cn from "classnames";
import ChevronLeftGlyph from "components/icon-glyphs/chevron_left-glyph";
import ChevronRightGlyph from "components/icon-glyphs/chevron_right-glyph";
import ExpandLessGlyph from "components/icon-glyphs/expand_less-glyph";
import ExpandMoreGlyph from "components/icon-glyphs/expand_more-glyph";
import IconButton from "components/icon/icon-button";
import CompanyLogo from "../xata-logo";
import styles from "./xata-game.module.css";

export default function XataGame() {
  const iconButtonHoverElementClassNameProp = {
    hoverElementClassName:
      "rounded-lg top-0 bottom-0 left-0 right-0 scale-75 group-hover:opacity-10",
  };

  return (
    <section className={styles.root}>
      <IconButton
        className={styles.upArrow}
        onClick={() => console.log("clicked")}
        {...iconButtonHoverElementClassNameProp}
      >
        <ExpandLessGlyph />
      </IconButton>

      <IconButton
        className={styles.leftArrow}
        {...iconButtonHoverElementClassNameProp}
      >
        <ChevronLeftGlyph />
      </IconButton>

      <span
        className={cn(
          styles.gameBoard,
          "relative h-72 justify-self-stretch rounded-lg bg-gray-800 text-white"
        )}
      >
        <span className="absolute top-[calc(50%-24px)] left-[calc(50%-24px)]">
          <CompanyLogo className="h-[40px]" wingsFill="#bbbbbb" />
        </span>
      </span>

      <IconButton
        className={styles.rightArrow}
        {...iconButtonHoverElementClassNameProp}
      >
        <ChevronRightGlyph />
      </IconButton>
      {/* </div> */}

      <IconButton
        className={styles.downArrow}
        {...iconButtonHoverElementClassNameProp}
      >
        <ExpandMoreGlyph />
      </IconButton>
    </section>
  );
}
