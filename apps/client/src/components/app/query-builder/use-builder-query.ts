import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { QueryBuilder } from "./builder-schema";
import { compile } from "./builder-template";

export const useBuilderQuery = (defaultValues: QueryBuilder) =>
  useQuery({
    queryKey: ["builder"],
    queryFn: () => compile(defaultValues),
  });

export const useBuilderMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: compile,
    onSuccess: (data) => {
      queryClient.setQueryData(["builder"], data);
    },
  });

  return {
    mutate,
  };
};
