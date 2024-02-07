import Link from "next/link";
import CenterOfPage from "@/components/ui/center-of-page";

export default function Home() {
  return (
    <CenterOfPage>
      <Link href="/progress-bar">Progress Bar</Link>
      <Link href="/background-changer">Background Changer</Link>
      <Link href="/modal">Modal</Link>
    </CenterOfPage>
  );
}
