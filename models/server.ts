import express, { Application } from "express";
import cors from "cors";

import userRoutes from "../routes/users";
import { dbConnection } from "../database/config";

class Server {
	private app: Application;
	private port: string;
	private apiPaths = {
		users: "/api/users",
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || "8000";

		this.dbconnect();
		// Metodos iniciales
		this.middlewares();
		this.routes();
	}

	// MIDDLEWARES
	middlewares() {
		// cors
		this.app.use(cors());

		// lectura de body
		this.app.use(express.json());

		// carpeta publica
		this.app.use(express.static("public"));
	}

	async dbconnect() {
		await dbConnection();
	}

	routes() {
		this.app.use(this.apiPaths.users, userRoutes);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Servidor corriendo en el puerto ${this.port}.`);
		});
	}
}

export default Server;
