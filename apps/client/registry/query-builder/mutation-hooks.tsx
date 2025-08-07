import { useQueryClient, useMutation } from "@tanstack/react-query";
import { demoQueryOptions } from "./query-options";

type DemoPayloadType = {
  id: string;
};

const updateMutationFn = async (demoPayload: DemoPayloadType) => {
  const response = await fetch("sample");
  return [{ id: 1 }];
};

export const useDemoMutation = () => {
  const queryClient = useQueryClient();

  // using all as a starting template but feel
  // free to add list, details and etc...
  // also consider reading the Tanstack docs
  const { queryKey } = demoQueryOptions.all();

  const mutation = useMutation({
    mutationFn: async (demoPayload: DemoPayloadType) => {
      await updateMutationFn(demoPayload);
    },
    // When mutate is called:
    onMutate: async (newDemo) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey });

      // Snapshot the previous value
      const previousDemo = queryClient.getQueryData(queryKey);

      // Optimistically update to the new value
      queryClient.setQueryData(queryKey, (old) => [newDemo, ...(old as any[])]);

      // Return a context with the previous and new todo
      return { previousDemo, newDemo };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, newDemo, context) => {
      queryClient.setQueryData(["demo", context?.newDemo.id], []);
    },
    // Always refetch after error or success:
    onSettled: () => queryClient.invalidateQueries({ queryKey }),
  });

  return {
    mutation,
  };
};
