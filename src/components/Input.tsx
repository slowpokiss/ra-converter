import { ChangeEventHandler } from "react";

interface props {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({ value, onChange }: props) {
  return (
    <input
      type="text"
      defaultValue={value}
      className="converter-item converter-input"
      onChange={onChange}
    />
  );
}
