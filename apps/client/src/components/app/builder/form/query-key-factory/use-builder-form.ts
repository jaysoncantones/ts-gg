import { useAppForm } from "~/components/custom-form";
import { useBuilderMutation } from "./use-builder-query";
import { Builder, BuilderDefaults } from "./builder-schema";

export const useBuilderForm = () => {
  const { mutate, isError } = useBuilderMutation();

  const form = useAppForm({
    defaultValues: {
      ...BuilderDefaults,
    },
    validators: {
      onChange: Builder,
    },
    onSubmit: ({ value }) => {
      mutate(value);
    },
    listeners: {
      onMount: ({ formApi }) => {
        mutate(formApi.state.values);
      },
      onChange: ({ formApi, fieldApi }) => {
        mutate(formApi.state.values);
      },
    },
  });

  return {
    form,
    isError,
  };
};
