import { Document } from 'mongoose';

export interface Customer extends Document {
  readonly first_name: String;
  readonly last_name: String;
  readonly email: String;
  readonly phone: String;
  readonly address: String;
  readonly description: String;
  readonly created_at: Date;
}
