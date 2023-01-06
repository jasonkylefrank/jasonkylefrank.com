import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      // className="prose max-w-none prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:underline-offset-2"
      className="prose max-w-none prose-a:border-b prose-a:border-blue-600 prose-a:border-opacity-40
               prose-a:text-blue-600 prose-a:no-underline hover:prose-a:border-b-2 hover:prose-a:border-opacity-80"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
