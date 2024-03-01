import Link from "next/link";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <Link href="/progress-bar">
        <Button>Progress Bar</Button>
      </Link>
      <Link href="/background-changer">
        <Button>Background Changer</Button>
      </Link>
      <Link href="/modal">
        <Button>Modal</Button>
      </Link>
      <Link href="/slide-show">
        <Button>Slide Show</Button>
      </Link>
    </div>
  );
}
