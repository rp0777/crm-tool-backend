import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LeadDocument = HydratedDocument<Lead>;

@Schema({
  timestamps: true,
  toObject: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.__v;
    },
  },
  toJSON: {
    virtuals: true,
  },
  versionKey: false,
})
export class Lead {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  email: string;
}

export const LeadSchema = SchemaFactory.createForClass(Lead);
