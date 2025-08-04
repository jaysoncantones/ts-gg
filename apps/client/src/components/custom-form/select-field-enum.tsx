import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ZodEnum } from "zod";

import { useFieldContext } from ".";
import { FieldErrors } from "./field-errors";

type SelectFieldProps<T extends ZodEnum<[string, ...string[]]>> = {
  label?: string;
  enumSchema: T;
  defaultValue?: T["_type"];
  value?: T["_type"];
  onChange?: (val: T["_type"]) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export function SelectFieldEnum<T extends ZodEnum<[string, ...string[]]>>({
  label,
  enumSchema,
  defaultValue,
  value,
  onChange,
  placeholder = "Select...",
  disabled = false,
  className,
}: SelectFieldProps<T>) {
  const field = useFieldContext<string>();
  const options = enumSchema.options;

  const capitalize = (option: string) => {
    return option.charAt(0).toUpperCase() + option.slice(1).replace("_", " ");
  };

  return (
    <div className="space-y-2 ">
      <div className="space-y-2">
        {label && (
          <Label
            htmlFor={field.name}
            className="uppercase tracking-wider text-xs"
          >
            {label}
          </Label>
        )}
        <Select
          defaultValue={field.state.value}
          value={field.state.value}
          onValueChange={(value) => field.handleChange(value)}
          disabled={disabled}
        >
          <SelectTrigger className="w-full m-0 uppercase tracking-wider">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="uppercase tracking-wider"
              >
                {capitalize(option)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  );
}
