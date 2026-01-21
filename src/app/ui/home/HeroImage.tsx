import { heroimage } from "@/app/page.module.css";

export default function HeroImage() {
  return (<>
    <img
      src="/images/hero-image.png"
      width="3"
      height="2"
      className={heroimage}
    />
  </ >)
}