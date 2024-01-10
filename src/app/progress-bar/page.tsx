import ProgressBarInit from "@/components/progress-bar";

const CenterOfPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {children}
    </div>
  );
};

export default function Page() {
  return (
    <CenterOfPage>
      <ProgressBarInit />
    </CenterOfPage>
  );
}
