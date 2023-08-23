import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ placeholder, className, type, ...props }, ref) => {
    return (
      <input
        placeholder={placeholder}
        type={type}
        className={cn(
          "text-xs w-full cursor-pointer  rounded-[30px] shadow-[0px_2px_5px_rgba(0,0,0,.2)] outline-none px-5 py-[12px] mt-1 ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
