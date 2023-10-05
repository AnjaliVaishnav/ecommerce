import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type userDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ type: { unique: true, required: true } })
    username: string;

    @Prop({ type: { required: true } })
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User);