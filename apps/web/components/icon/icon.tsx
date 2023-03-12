import cn from "classnames";

export enum IconState {
  Active = "Active",
  Focused = "Focused",
  Inactive = "Inactive",
}

export default function Icon({
  children,
  className,
  state = IconState.Active,
}: {
  children: React.ReactNode;
  className?: string;
  state?: IconState;
}) {
  let stateClass;

  switch (state) {
    case IconState.Active:
      stateClass = "opacity-60";
      break;
    case IconState.Focused:
      stateClass = "opacity-100";
      break;
    case IconState.Inactive:
      stateClass = "opacity-30";
      break;
  }

  return (
    <span
      className={cn("inline-block h-6 w-6 text-current", stateClass, className)}
    >
      {children}
    </span>
  );
}
