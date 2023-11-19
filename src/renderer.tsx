import "hono";
import { jsxRenderer } from "hono/jsx-renderer";

declare module "hono" {
	interface ContextRenderer {
		(content: string | Promise<string>, props?: { title?: string }): Response;
	}
}

export const renderer = jsxRenderer(
	({ children }) => {
		return (
			<html lang="en">
				<body>{children}</body>
			</html>
		);
	},
	{
		docType: true,
	},
);
