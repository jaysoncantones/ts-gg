import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useFieldContext } from ".";
import { FieldErrors } from "./field-errors";

type TextFieldProps = {
  variance?: "default" | "muted";
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({
  variance = "default",
  label,
  ...inputProps
}: TextFieldProps) => {
  const field = useFieldContext<string>();
  const varianceOptions = {
    default: "",
    muted:
      "focus-visible:ring-3 focus-visible:border-muted border-muted focus-visible:ring-[1px]",
  };

  return (
    <div className="space-y-2 w-full">
      <div className="space-y-2">
        {label && (
          <Label
            className="uppercase tracking-wider text-xs"
            htmlFor={field.name}
          >
            {label}
          </Label>
        )}
        <Input
          id={field.name}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          className={varianceOptions[variance]}
          {...inputProps}
        />
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  );
};
