import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { FileField } from "./file-field";
import { TextField } from "./text-field";
import { TextAreaField } from "./textarea-field";
import { CheckboxField } from "./checkbox-field";
import { SelectField } from "./select-field";
import { SelectFieldEnum } from "./select-field-enum";
import { SubmitButton } from "./submit-button";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    FileField,
    TextField,
    TextAreaField,
    CheckboxField,
    SelectField,
    SelectFieldEnum,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
