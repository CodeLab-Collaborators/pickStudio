import { GlobalButtonProps } from "../../types";

const GlobalButton: React.FC<GlobalButtonProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  // default Tailwind CSS classes for the button
  const defaultClasses =
    " w-full text-white rounded-md py-3 px-6 text-base font-medium ease-in transition-all hover:bg-[#00000011]";

  // Combine the default classes with the provided className
  const buttonClasses = className
    ? `${defaultClasses} ${className}`
    : defaultClasses;

  return (
    <div>
      <button style={style} type="button" className={buttonClasses} {...props}>
        {children}
      </button>
    </div>
  );
};

export default GlobalButton;
