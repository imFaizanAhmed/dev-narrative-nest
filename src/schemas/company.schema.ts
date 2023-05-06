/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
  @Prop({ required: true })
  name: string;

  @Prop()
  budget: number;

  @Prop()
  description: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
