import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const useToggleOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  return [isOpen, toggle];
};
export default props => {
  const { children } = props;

  const [isOpen, toggleNavbar] = useToggleOpen(false);

  return (
    <div>
      <Head>
        <title>FoodAdvisor + Next.js = 💖</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav>
        <Link href="/">
          <a className="logo">FoodAdvisor</a>
        </Link>
      </nav>
      <div className="main">{children}</div>
      <footer>Footer</footer>
    </div>
  );
};
