import type { FC } from "react";
import classNames from "classnames";

interface CommonAnchorProps {
  /** CSS class name for styling the cursor */
  cursorClass?: string;
  /** CSS class name for styling the border of the anchor (usually just a bottom border to serve as the "underline") */
  borderClass?: string;
  fontWeightClass?: string;
  [propName: string]: any; // (Optional) Type for an "others" prop (so we can spread any other props like an onClick onto the anchor). See: https://stackoverflow.com/a/58201122/718325
}

/**
 * Will open the user's default email app to send an email.
 */
interface MailToAnchorProps {
  type: "mailto";
  // Note that the "children" prop will be ignored for this case since the "href" prop
  //  will be used for both the children and the href of the anchor.
  href: string;
}
/**
 * Will open the link in a new tab so users don't lose context of this website.
 */
interface ExternalAnchorProps {
  type: "external";
  href: string;
  children: React.ReactNode;
}

interface InternalAnchorProps {
  type: "internal";
  // Optional because sometimes we just use an onClick instead of an href for this type of anchor
  href?: string;
  children: React.ReactNode;
}

type AnchorProps =
  | (MailToAnchorProps & CommonAnchorProps)
  | (ExternalAnchorProps & CommonAnchorProps)
  | (InternalAnchorProps & CommonAnchorProps);

/**
 * Abstracts the html anchor element with appropriately-packaged props.  For example, every time we want
 * an anchor to "open in new tab" (i.e., an "external" link), we have to have 2 specific props on the html
 * anchor. In that example, this componenent "packages" those 2 props for you when you specify that the link
 * is an "external" link.
 *
 * Note that for anchors that go to a different route within the website, Next.js's Link component should probably be used.
 */
const Anchor: FC<AnchorProps> = ({
  type,
  cursorClass,
  borderClass,
  fontWeightClass,
  href,
  children,
  ...others
}) => {
  let constructedProps;

  const classNameProp = {
    // Note: Several styles for the <a> element are currently being applied via global styles and/or style in a layout file in consuming projects.
    className: classNames(
      cursorClass ?? "cursor-pointer", // needed for "internal links" which don't specify an href since the browser won't automatically use a pointer cursor in that case.
      borderClass,
      fontWeightClass
    ),
  };

  switch (type) {
    case "mailto":
      constructedProps = {
        href: `mailto:${href}`,
        children: href,
      };
      break;
    case "external":
      constructedProps = {
        href,
        target: "_blank",
        rel: "noreferrer",
        children,
      };
      break;
    case "internal":
      constructedProps = {
        children,
      };
      break;
  }

  return <a {...constructedProps} {...classNameProp} {...others} />;
};

export default Anchor;
