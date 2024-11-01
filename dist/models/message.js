"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
const _1 = __importDefault(require("./")); // Asegúrate de que la ruta sea correcta
class Message {
}
__decorate([
    (0, typegoose_1.prop)({ ref: () => _1.default, required: true }) // Usa una función para referenciar la clase
    ,
    __metadata("design:type", Object)
], Message.prototype, "userId", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: false }),
    __metadata("design:type", String)
], Message.prototype, "response", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Message.prototype, "timestamp", void 0);
__decorate([
    (0, typegoose_1.prop)({ enum: ["incoming", "outgoing"], required: true }),
    __metadata("design:type", String)
], Message.prototype, "direction", void 0);
const MessageModel = (0, typegoose_1.getModelForClass)(Message);
exports.default = MessageModel;
//# sourceMappingURL=message.js.map