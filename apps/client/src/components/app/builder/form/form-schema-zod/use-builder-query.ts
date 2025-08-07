import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Builder } from "./builder-schema";
import { output } from "./builder-template";

const queryKey = ["builder-factory"];

export const useBuilderQuery = (defaultValues: Builder) => {
  const query = useQuery({
    queryKey,
    queryFn: () => output(defaultValues),
  });

  return query;
};

export const useBuilderMutation = () => {
  const queryClient = useQueryClient();
  const { mutate, isError } = useMutation({
    mutationFn: output,
    onMutate: (data) => {
      const result = Builder.safeParse(data);
      if (!result.success) {
        const message = result.error.errors.map((e) => e.message).join(", ");
        throw new Error(message);
      }
      return;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    mutate,
    isError,
  };
};
