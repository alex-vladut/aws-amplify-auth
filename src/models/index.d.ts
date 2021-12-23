import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum OrganisationStatus {
  CREATED = "CREATED",
  DISABLED = "DISABLED",
  INACTIVE = "INACTIVE"
}



type UserMetaData = {
  readOnlyFields;
}

type OrganisationMetaData = {
  readOnlyFields;
}

type UserMembershipMetaData = {
  readOnlyFields;
}

type DocumentMetaData = {
  readOnlyFields;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly phone?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Organisation {
  readonly id: string;
  readonly name: string;
  readonly status?: OrganisationStatus | keyof typeof OrganisationStatus;
  readonly createdById?: string;
  readonly createdBy?: User;
  readonly createdAt: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Organisation>);
  static copyOf(source: Organisation, mutator: (draft: MutableModel<Organisation>) => MutableModel<Organisation> | void): Organisation;
}

export declare class UserMembership {
  readonly id: string;
  readonly organisationId: string;
  readonly organisation: Organisation;
  readonly userId: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<UserMembership>);
  static copyOf(source: UserMembership, mutator: (draft: MutableModel<UserMembership>) => MutableModel<UserMembership> | void): UserMembership;
}

export declare class Document {
  readonly id: string;
  readonly name: string;
  readonly parentId?: string;
  readonly parent?: Document;
  readonly organisationId: string;
  readonly organisation: Organisation;
  readonly createdAt: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Document>);
  static copyOf(source: Document, mutator: (draft: MutableModel<Document>) => MutableModel<Document> | void): Document;
}