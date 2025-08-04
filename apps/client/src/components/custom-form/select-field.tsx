import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useFieldContext } from ".";
import { FieldErrors } from "./field-errors";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  className?: string;
  label?: string;
  options: SelectOption[];
  placeholder?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const SelectField = ({
  className,
  label,
  options,
  placeholder = "Select...",
  ...selectProps
}: SelectFieldProps) => {
  const field = useFieldContext<string>();

  const capitalize = (text: string) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
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
          disabled={selectProps.disabled}
        >
          <SelectTrigger
            id={field.name}
            onBlur={field.handleBlur}
            className={`w-full m-0 uppercase tracking-wider ${className}`}
          >
            <SelectValue placeholder={placeholder}>
              {/* {capitalize(field.state.value) || placeholder} */}
              {/* {field.state.value || placeholder} */}
              {/* <SelectValue placeholder="Select a fruit" /> */}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {options.map((option, index) => (
              <SelectItem
                key={index}
                value={option.value}
                className="uppercase tracking-wider"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  );
};
