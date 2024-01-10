import Link from "next/link";
import CenterOfPage from "@/components/ui/center-of-page";

export default function Home() {
  return (
    <CenterOfPage>
      <Link href="/progress-bar">Progress Bar</Link>
    </CenterOfPage>
  );
}
