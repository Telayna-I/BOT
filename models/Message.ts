import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import User from "./User";

export class Message extends Document {
	@prop({ ref: () => User, required: true }) // Usa una función para referenciar la clase
	userId!: Ref<typeof User>;

	@prop({ required: true })
	content!: string;

	@prop({ required: false })
	response?: string;

	@prop({ default: Date.now })
	timestamp?: Date;

	@prop({ enum: ["incoming", "outgoing"], required: true })
	direction!: "incoming" | "outgoing";
}

const MessageModel = getModelForClass(Message);
export default MessageModel;
