import Image from "next/image";
import styles from "./page.module.css";

import HeroImage from "@/app/ui/home/HeroImage"
import About from "@/app/ui/home/About"

export default function Home() {
  return (
    <main>
      <HeroImage />
      <About />
    </main>
  );
}
