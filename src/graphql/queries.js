/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const getOrganisation = /* GraphQL */ `
  query GetOrganisation($id: ID!) {
    getOrganisation(id: $id) {
      id
      name
      createdById
      createdBy {
        id
        email
        phone
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrganisations = /* GraphQL */ `
  query ListOrganisations(
    $id: ID
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrganisations(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        createdById
        createdBy {
          id
          email
          phone
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserMembership = /* GraphQL */ `
  query GetUserMembership($id: ID!) {
    getUserMembership(id: $id) {
      id
      organisationId
      organisation {
        id
        name
        createdById
        createdBy {
          id
          email
          phone
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      userId
      createdAt
      updatedAt
    }
  }
`;
export const listUserMemberships = /* GraphQL */ `
  query ListUserMemberships(
    $id: ID
    $filter: ModelUserMembershipFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserMemberships(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        organisationId
        organisation {
          id
          name
          createdById
          createdAt
          updatedAt
        }
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userMembershipsByUser = /* GraphQL */ `
  query UserMembershipsByUser(
    $userId: ID
    $organisationId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userMembershipsByUser(
      userId: $userId
      organisationId: $organisationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organisationId
        organisation {
          id
          name
          createdById
          createdAt
          updatedAt
        }
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
