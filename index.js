import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient(); // ✅ FIXED

app.use(express.json());

/* HEALTH CHECK */
app.get("/", (req, res) => {
	res.json({ status: "API running 🚀" });
});

/* CREATE USER */
app.post("/users", async (req, res) => {
	try {
		const user = await prisma.user.create({
			data: req.body,
		});
		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

/* GET ALL USERS */
app.get("/users", async (req, res) => {
	const users = await prisma.user.findMany();
	res.json(users);
});

/* GET USER BY ID */
app.get("/users/:id", async (req, res) => {
	try {
		const user = await prisma.user.findUnique({
			where: { id: req.params.id },
		});

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		res.json(user);
	} catch {
		res.status(400).json({ error: "Invalid ID" });
	}
});

/* UPDATE USER */
app.put("/users/:id", async (req, res) => {
	try {
		const user = await prisma.user.update({
			where: { id: req.params.id },
			data: req.body,
		});
		res.json(user);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

/* DELETE USER */
app.delete("/users/:id", async (req, res) => {
	try {
		await prisma.user.delete({
			where: { id: req.params.id },
		});
		res.json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

app.listen(3000, () => {
	console.log("🚀 Server running at http://localhost:3000");
});
