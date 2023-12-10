// import { error, resetErrorBoundary } from "react-error-boundary";

import { FC, PropsWithChildren } from "react";

interface iError {
  error?: any;
  resetErrorBoundary?: any;
}
const ComponentErrorFallBack: FC<iError> = ({ error, resetErrorBoundary }) => {
  console.log("reading: ", error);
  return (
    <div>
      ComponentErrorFallBack: {error.message}
      <button
        className="p-4 border text-20"
        onClick={() => {
          resetErrorBoundary();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ComponentErrorFallBack;
