import "@/styles/globals.css";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  );
}
