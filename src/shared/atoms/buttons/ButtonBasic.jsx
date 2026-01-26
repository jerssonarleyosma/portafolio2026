import { cn } from "@utils/cn";

function ButtonBasic({ variant = "primary", size = "md", className, children, ...props}) {

    const baseStyles = "btn transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "btn-primary",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
        outline: "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-400",
    };

    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
    };

    return (
        <button className={ cn( baseStyles, variants[variant], sizes[size], className )} {...props} >
            {children}
        </button>
  );
}
export { ButtonBasic };