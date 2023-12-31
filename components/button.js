import React, { forwardRef, memo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Button(
  {
    variant = "fill",
    style = "black",
    size = "large",
    radius = 0,
    to = "",
    children,
    block = false,
    className,
    ...others
  },
  ref
) {
  const router = useRouter();

  return (
    <>
      <a
        className={`btn btn-${variant} btn-${style}  btn-${size} ${className} ${
          block && "btn-block"
        }`}
        style={{ borderRadius: radius }}
        {...others}
      >
        {children}
      </a>
    </>
  );
}

export default memo(forwardRef(Button));
