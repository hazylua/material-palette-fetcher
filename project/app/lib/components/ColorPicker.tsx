import React, { FC } from "react";
import clsx from "clsx";

interface ColorPickerProps {
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({
  id,
  name,
  value,
  className,
  onChange,
}) => {
  return (
    <input
      className={clsx(
        `
        appearance-none
        border-2 border-background
        bg-background
        outline-none
        outline
        ring-2
        ring-onBackground transition-all hover:outline-2 hover:ring-primary focus:outline-2 focus:outline-primary
        focus:ring-0
        `,
        className
      )}
      onChange={onChange}
      type="color"
      id={id}
      value={value}
      name={name}
    />
  );
};

export default ColorPicker;
