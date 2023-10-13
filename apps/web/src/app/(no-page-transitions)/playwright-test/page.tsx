import type { FC } from "react";
import PlaywrightTestContent from "./playwright-test-content";

export const metadata = {
  title: "Playwright test!",
};

interface pageProps {}

const PlaywrightTest: FC<pageProps> = ({}) => {
  return <PlaywrightTestContent />;
};
export default PlaywrightTest;
