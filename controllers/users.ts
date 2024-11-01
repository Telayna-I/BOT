import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
	res.json({
		msg: "GET USERS",
	});
};

export const getUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	res.json({
		msg: "GET USER",
		id,
	});
};

export const postUser = async (req: Request, res: Response) => {
	const { body } = req;

	console.log(body);

	res.json({
		msg: "POST USER",
		body,
	});
};

export const putUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;

	res.json({
		msg: "PUT USER",
		id,
		body,
	});
};

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	res.json({
		msg: "DELETE USER",
		id,
	});
};
