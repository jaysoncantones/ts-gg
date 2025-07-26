export const queryKeysFactory = {
  users: {
    byAll: () => ["USERS-AUTH"],
  },
  // organizations: {
  //   byUser: (user_party_uuid: string) => [
  //     "ORGANIZATION-BY-USER",
  //     user_party_uuid,
  //   ],
  //   byAuthor: (author_party_uuid: string) => [
  //     "ORGANIZATION-BY-AUTHOR",
  //     author_party_uuid,
  //   ],
  //   byOrg: (org_party_uuid: string) => ["ORGANIZATION-BY-ORG", org_party_uuid],
  // },
  // companies: {
  //   byUser: (user_party_uuid: string) => ["COMPANY-BY-USER", user_party_uuid],
  //   byAuthor: (author_party_uuid: string) => [
  //     "COMPANY-BY-AUTHOR",
  //     author_party_uuid,
  //   ],
  //   byOrg: (org_party_uuid: string) => ["COMPANY-BY-ORG", org_party_uuid],
  // },
  // businesses: {
  //   byAuthor: (author_party_uuid: string) => [
  //     "BUSINESS-BY-AUTHOR",
  //     author_party_uuid,
  //   ],
  //   byOrg: (org_party_uuid: string) => ["BUSINESS-BY-ORG", org_party_uuid],
  // },
  // subscriptions: {
  //   byAuthor: (author_party_uuid: string) => [
  //     "SUBSCRIPTION-BY-AUTHOR",
  //     author_party_uuid,
  //   ],
  //   byOrg: (org_party_uuid: string) => ["SUBSCRIPTION-BY-ORG", org_party_uuid],
  // },
} as const;
