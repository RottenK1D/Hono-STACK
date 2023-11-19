import "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { html } from "hono/html";

declare module "hono" {
	interface ContextRenderer {
		(content: string | Promise<string>, props?: { title?: string }): Response;
	}
}

export const renderer = jsxRenderer(
	({ children, title }) => {
		return (
			<html lang="en" style="display:none">
				<head>
					{html`
            <link rel="preload" as="style" href="https://esm.sh/@master/normal.css@beta?css">
            <link rel="stylesheet" href="https://esm.sh/@master/normal.css@beta?css">
            <link rel="modulepreload" href="https://esm.sh/@master/css@beta">
            <script type="module">
              import { htmx } from "https://esm.sh/htmx.org@1.9.8"
            </script>
            <script type="module">
              import { initRuntime } from 'https://esm.sh/@master/css@beta'
              initRuntime({
                variables: {
                  primary: '#000000'
                }
              })
            </script>
          `}
					<title>{title}</title>
				</head>
				<body>{children}</body>
			</html>
		);
	},
	{
		docType: true,
	},
);
