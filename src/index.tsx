import { Hono } from "hono";
import { renderer } from "./renderer";
import { html } from "hono/html";

const app = new Hono();

app.get("*", renderer);

app.get("/", (c) => {
	return c.render(<h1 class="font:50 italic fg:red">Hello!</h1>);
});

export default app;
