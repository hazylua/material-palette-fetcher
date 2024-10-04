import { FC } from "react";

interface FormInputProps {
  name?: string;
  placeholder?: string;
  value?: string;
  type?: React.HTMLInputTypeAttribute;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInput: FC<FormInputProps> = ({
  name = '',
  placeholder = '',
  value = '',
  type = 'text',
  onKeyDown,
  onChange,
}) => {
  return (
    <input
      className="
        appearance-none rounded
        border border-outline
        bg-background
        px-2 py-1
        outline-none
        hover:border-primary
        focus:border-current focus:outline-primary focus:ring-0
      "
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
};

export default FormInput;
