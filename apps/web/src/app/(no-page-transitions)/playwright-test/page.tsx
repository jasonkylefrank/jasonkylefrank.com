import type { FC } from "react";

export const metadata = {
  title: "Playwright test!",
};

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <h2>Hello from the Playwright test page!</h2>;
};
export default page;
