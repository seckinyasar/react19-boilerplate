import type { ComponentPropsWithoutRef } from "react";

interface MyIconProps extends ComponentPropsWithoutRef<"svg"> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  fill?: string;
}

export type { MyIconProps };
