import React from "react";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { useFieldContext } from ".";
import { FieldErrors } from "./field-errors";

type TextAreaFieldProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export const TextAreaField = ({ label, ...inputProps }: TextAreaFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <div className="space-y-2">
      <div className="space-y-2">
        {label && (
          <Label
            className="uppercase tracking-wider text-xs"
            htmlFor={field.name}
          >
            {label}
          </Label>
        )}
        <Textarea
          id={field.name}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          {...inputProps}
        />
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  );
};
