import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  const base =
    "rounded-full px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[#C8A96A] text-black hover:bg-[#b89652] hover:scale-105",

    secondary:
      "border border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-black",

    dark:
      "bg-black text-white hover:bg-neutral-800",
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;