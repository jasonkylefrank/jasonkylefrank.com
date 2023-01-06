import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="prose max-w-none prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:underline-offset-2"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
