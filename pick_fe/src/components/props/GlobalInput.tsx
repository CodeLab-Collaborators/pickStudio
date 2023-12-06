import { GlobalInputProps } from "../../types";

const GlobalInput: React.FC<GlobalInputProps> = ({
  className,
  style,
  inputType,
  ...props
}) => {
  // Default Tailwind CSS classes for the input container
  const containerClasses =
    "relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 focus-within:border-black focus-within:ring-1 focus-within:ring-black";

  // Default Tailwind CSS classes for the input
  const inputClasses =
    "peer h-10 w-full border-none font-normal bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm";

  // Combine the default classes with the provided className
  const containerClassList = className
    ? `${containerClasses} ${className}`
    : containerClasses;

  return (
    <label className={containerClassList}>
      <input
        type={inputType}
        style={style}
        className={inputClasses}
        {...props}
      />
      <span className="absolute start-3 top-3 -translate-y-1/2 text-xs font-normal text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
        {props.placeholder}
      </span>
    </label>
  );
};

export default GlobalInput;
