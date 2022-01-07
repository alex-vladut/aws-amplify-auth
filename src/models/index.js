// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrganisationStatus = {
  "CREATED": "CREATED",
  "DISABLED": "DISABLED",
  "INACTIVE": "INACTIVE"
};

const { User, UserMembership, Organisation, Document } = initSchema(schema);

export {
  User,
  UserMembership,
  Organisation,
  Document,
  OrganisationStatus
};