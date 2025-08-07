import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useBuilderQuery as useBuilderFactoryQuery } from "../query-key-factory/use-builder-query";
import {
  Builder as BuilderFactory,
  BuilderDefaults as BuilderFactoryDefaults,
} from "../query-key-factory/builder-schema";
import { output } from "./builder-template";

const queryKey = ["builder-options"];

export const useBuilderQuery = () => {
  const { data } = useBuilderFactoryQuery(BuilderFactoryDefaults);
  const query = useQuery({
    queryKey: [...queryKey, data],
    queryFn: () => output(data?.data || BuilderFactoryDefaults),
    enabled: !!data,
  });

  return query;
};

export const useBuilderMutation = () => {
  const queryClient = useQueryClient();
  const { mutate, isError } = useMutation({
    mutationFn: output,
    onMutate: (data) => {
      const result = BuilderFactory.safeParse(data);
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
