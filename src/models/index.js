// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrganisationStatus = {
  "CREATED": "CREATED",
  "DISABLED": "DISABLED",
  "INACTIVE": "INACTIVE"
};

const { User, Organisation, UserMembership, Document } = initSchema(schema);

export {
  User,
  Organisation,
  UserMembership,
  Document,
  OrganisationStatus
};