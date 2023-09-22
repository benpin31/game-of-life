import { ChangeEvent } from "react";

type ChooseSizeInputProps = {
  value: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
};

export const ChooseSizeInput = ({
  value,
  onChange,
  id,
  label,
}: ChooseSizeInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <input
        type="number"
        id={id}
        name={id}
        className="border-2 p-1 rounded w-full"
        value={value ?? ""}
        onChange={onChange}
      />
    </div>
  );
};
