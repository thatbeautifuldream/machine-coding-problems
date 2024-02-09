import Link from "next/link";
import CenterOfPage from "@/app/_components/CenterOfPage";

export default function Home() {
  return (
    <CenterOfPage>
      <Link href="/progress-bar">Progress Bar</Link>
      <Link href="/background-changer">Background Changer</Link>
      <Link href="/modal">Modal</Link>
      <Link href="/slide-show">Slide Show</Link>
    </CenterOfPage>
  );
}
