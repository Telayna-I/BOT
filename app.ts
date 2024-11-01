import dotenv from "dotenv";
import Server from "./models/server";

// CONFIGURAR ENV
dotenv.config();

const server = new Server();

server.listen();
