import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true})
export class User {
    @Prop({ type: String, required: true})
    name: string;

    @Prop({ type: String, required: true, unique: true })
    email: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: Boolean, required: false, default: true })
    active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);