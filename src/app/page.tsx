import Image from "next/image";
import styles from "./page.module.css";
import * as m from "@/paraglide/messages"
import { Link } from "@/lib/i18n";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>{m.hello_world()}</h1>
      <Link href="/" locale="de">DE</Link>
      <Link href="/" locale="en">EN</Link>
    </main>
  );
}
