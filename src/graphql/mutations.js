/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const createOrganisation = /* GraphQL */ `
  mutation CreateOrganisation(
    $input: CreateOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    createOrganisation(input: $input, condition: $condition) {
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
export const updateOrganisation = /* GraphQL */ `
  mutation UpdateOrganisation(
    $input: UpdateOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    updateOrganisation(input: $input, condition: $condition) {
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
export const deleteOrganisation = /* GraphQL */ `
  mutation DeleteOrganisation(
    $input: DeleteOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    deleteOrganisation(input: $input, condition: $condition) {
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
export const createUserMembership = /* GraphQL */ `
  mutation CreateUserMembership(
    $input: CreateUserMembershipInput!
    $condition: ModelUserMembershipConditionInput
  ) {
    createUserMembership(input: $input, condition: $condition) {
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
export const updateUserMembership = /* GraphQL */ `
  mutation UpdateUserMembership(
    $input: UpdateUserMembershipInput!
    $condition: ModelUserMembershipConditionInput
  ) {
    updateUserMembership(input: $input, condition: $condition) {
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
export const deleteUserMembership = /* GraphQL */ `
  mutation DeleteUserMembership(
    $input: DeleteUserMembershipInput!
    $condition: ModelUserMembershipConditionInput
  ) {
    deleteUserMembership(input: $input, condition: $condition) {
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
