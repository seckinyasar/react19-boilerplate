//?✔️ Icon interface
//?✔️ Tailwind text color → currentColor sayesinde ikonu renklendirir.

interface MyIconProps extends React.SVGProps<SVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  fill?: string;
}

export type { MyIconProps };
