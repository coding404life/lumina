import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { UseFormRegister, Path, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
  id: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  isTextArea?: boolean;
  register: UseFormRegister<T>;
  error?: string;
}

export const BookFormInput = <T extends FieldValues>({
  id,
  label,
  placeholder,
  type = "text",
  min,
  max,
  step,
  isTextArea = false,
  register,
  error,
}: Props<T>) => {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm text-light-100/80">
        {label}
      </label>
      {isTextArea ? (
        <Textarea
          id={id}
          rows={5}
          placeholder={placeholder}
          className="border-white/15 bg-white/5 text-white"
          {...register(id)}
        />
      ) : (
        <Input
          id={id}
          type={type}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          className="h-12 border-white/15 bg-white/5 text-white"
          {...register(id)}
        />
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
