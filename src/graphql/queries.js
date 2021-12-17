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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrganisations = /* GraphQL */ `
  query SyncOrganisations(
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganisations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserMemberships = /* GraphQL */ `
  query SyncUserMemberships(
    $filter: ModelUserMembershipFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserMemberships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
