import cn from "classnames";
import Icon from "./icon";

export default function IconButton({
  children,
  className,
  useIcon = true,
  hoverElementClassName, // Class name to be applied just to the hover-effect element
  ...others // For other things such as onClick
}: {
  children: React.ReactNode;
  className?: string;
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
          `absolute top-1 left-1 right-1 bottom-1 scale-50 rounded-full bg-current opacity-0 ${transitionDurationClass} group-hover:scale-100 group-hover:opacity-[13%]`,
          hoverElementClassName
        )}
      />
      {content}
    </button>
  );
}
