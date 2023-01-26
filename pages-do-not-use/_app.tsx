//import "../styles/globals.css";
import type { AppProps } from "next/app";
import MDXComponents from "components-do-not-use/MDXComponents";
import { MDXProvider } from "@mdx-js/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
