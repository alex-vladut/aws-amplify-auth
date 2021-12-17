// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Organisation, UserMembership } = initSchema(schema);

export {
  User,
  Organisation,
  UserMembership
};