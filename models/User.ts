import { prop, getModelForClass } from "@typegoose/typegoose";
import { Document, Schema } from "mongoose";

// Define la clase User

export class User extends Document {
	@prop({ required: true, unique: true })
	phoneNumber!: string;

	@prop({ required: false })
	name?: string;

	@prop({ default: Date.now })
	createdAt!: Date;

	@prop({ default: Date.now })
	updatedAt!: Date;
}

// Crea el modelo a partir de la clase User
const UserModel = getModelForClass(User);

// Middleware para actualizar la fecha de actualización
UserModel.schema.pre<User>("save", function (next) {
	this.updatedAt = new Date();
	next();
});

// Exporta el modelo
export default UserModel;
