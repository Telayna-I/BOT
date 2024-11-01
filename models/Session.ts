import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./User";
import { Message } from "./Message";

export class Session extends Document {
	@prop({ ref: User, required: true })
	userId!: Ref<User>;

	@prop({ ref: Message })
	messages!: Ref<Message>[];

	@prop({ default: Date.now })
	createdAt?: Date;

	@prop({ default: Date.now })
	updatedAt?: Date;
}
const SessionModel = getModelForClass(Session);

// Middleware para actualizar la fecha de actualización
SessionModel.schema.pre<Session>("save", function (next) {
	this.updatedAt = new Date();
	next();
});

export default SessionModel;
