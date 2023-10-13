import cn from "classnames";
import Icon from "./icon";
import "./icon-button.css";

export default function IconButton({
  children,
  className,
  useIcon = true,
  hoverElementClassName, // Class name to be applied just to the hover-effect element
  ...others // For other things such as onClick
}: {
  children: React.ReactNode;
  className?: string;
  /** Whether or not this component should wrap the `children` in an Icon (which sets a standard size and applies
   *  visual states).  Defaults to `true` */
  useIcon?: boolean;
  hoverElementClassName?: string;
  [propName: string]: any; // Type for the ...others prop. See: https://stackoverflow.com/a/58201122/718325
}) {
  const transitionDurationClass = "duration-100";
  const content = useIcon ? (
    <Icon className={`group-hover:opacity-100 ${transitionDurationClass}`}>
      {children}
    </Icon>
  ) : (
    children
  );

  return (
    <button
      className={cn("group relative inline-block h-12 w-12 p-3", className)}
      {...others}
    >
      {/* Hover-effect element */}
      <span
        className={cn(
          "iconButton__hoverElement",
          transitionDurationClass,
          hoverElementClassName
        )}
      />
      {content}
    </button>
  );
}
