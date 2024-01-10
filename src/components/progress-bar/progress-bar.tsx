import "./progress-bar.css";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ transform: `translateX(${progress - 100}%)` }}
      />
    </div>
  );
};

export default ProgressBar;
