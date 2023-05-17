// import remarkGfm from "remark-gfm";
// import createMDX from "@next/mdx";

// /** @type {import('next').NextConfig} */
// const withMDX = createMDX({
//   extension: /\.mdx?$/,
//   options: {
//     // If you use remark-gfm, you'll need to use next.config.mjs
//     // as the package is ESM only
//     // https://github.com/remarkjs/remark-gfm#install
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     providerImportSource: "@mdx-js/react",
//   },
// });

const nextConfig = {
  reactStrictMode: true,
  // Tells Next.js to automatically transpile dependencies from local packages (like in monorepos),
  //  or from external dependencies (from node_modules), if specified.  See: https://nextjs.org/docs/advanced-features/compiler#module-transpilation
  transpilePackages: ["ui"], // "ui" is my local library within the monorepo.

  // See: https://nextjs.org/docs/advanced-features/using-mdx#setup-nextmdx-in-nextjs
  // pageExtensions: ["js", "ts", "jsx", "tsx", "mdx", "mdx"],
};

// export default withMDX(nextConfig);
export default nextConfig;
