import { useAppForm } from "~/components/custom-form";
import { useBuilderMutation } from "./use-builder-query";
import { QueryBuilder, QueryBuilderDefaults } from "./builder-schema";

export const useBuilderForm = () => {
  const { mutate } = useBuilderMutation();

  const form = useAppForm({
    defaultValues: {
      ...QueryBuilderDefaults,
    },
    validators: {
      onChange: QueryBuilder,
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
  };
};
