// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
    <StartServer
        document={({ assets, children, scripts }) => (
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" href="/icon.svg" />
                    {assets}
                </head>
                <body class="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pt-4 antialiased sm:px-8">
                    <div id="app">{children}</div>
                    {scripts}
                </body>
            </html>
        )}
    />
));
