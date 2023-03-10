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
  // See: https://nextjs.org/docs/advanced-features/using-mdx#setup-nextmdx-in-nextjs
  // pageExtensions: ["js", "ts", "jsx", "tsx", "mdx", "mdx"],

  experimental: {
    appDir: true,
  },
};

// export default withMDX(nextConfig);
export default nextConfig;
