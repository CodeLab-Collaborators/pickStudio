import "./style.css";
import { Link, useNavigate } from "react-router-dom";

import { FC } from "react";

interface iError {
  error?: any;
  resetErrorBoundary?: any;
}

const ErrorFile: FC<iError> = ({ error, resetErrorBoundary }) => {
  console.log(error?.message?.split("?")[1]?.split(" ")[0]);

  return (
    <div className="w-full justify-center flex items-center h-screen">
      <section className="page_404 w-full">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center " style={{}}>
                    404
                  </h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">
                    Look like your internet connection is Lost
                  </h3>

                  <p>
                    {error?.message?.split("?")[1]?.split(" ")[0] === ".map" &&
                      "cannot read displayed data because of internet, lost"}
                    !
                  </p>
                </div>
                <div className="mt-10" />
                <div className="flex justify-center cursor-pointer">
                  <div
                    className=" w-200px border rounded-md text-white p-4 mt-10 cursor-pointer"
                    style={{
                      background: "var(--gradient)",
                    }}
                    onClick={() => {
                      // navigate(-1);
                      window.location.reload();
                    }}
                  >
                    back online? reload page
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorFile;
