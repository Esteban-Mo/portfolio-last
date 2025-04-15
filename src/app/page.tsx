import Image from "next/image";
import styles from "./page.module.css";
import StarryBackground from "./components/StarryBackground/StarryBackground";

export default function Home() {
  return (
    <div>
      <StarryBackground />
    </div>
  );
}
