export const demoQueryKeyFactory = {
  all: () => ["demo"],
  lists: () => [...demoQueryKeyFactory.all(), "list"],
  list: (filter: Record<string, any>) => [
    ...demoQueryKeyFactory.lists(),
    { filter },
  ],
  details: () => [...demoQueryKeyFactory.all(), "detail"],
  detail: (id: string | number) => [...demoQueryKeyFactory.details(), { id }],
} as const;
