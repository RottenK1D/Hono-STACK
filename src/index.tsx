import { Hono } from "hono";
import { renderer } from "./renderer";

const app = new Hono();

app.get("*", renderer);

app.get("/", (c) => {
	return c.render(
		<div hx-post="/clicked" hx-swap="outerHTML">
			Click me
		</div>,
	);
});

app.post("/clicked", (c) => c.render(<div>Hello FROM HTMX</div>));

export default app;
