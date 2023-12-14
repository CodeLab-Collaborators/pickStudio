import { Link } from "react-router-dom";
import "./css/style.css";

const ErrorIndex = () => {
  return (
    <body>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404"></div>
          <h1>404</h1>
          <h2>
            Oops! Page cannot Be Found
            <div className="mt-2" />
          </h2>
          <p
            className="text-[#AA0707]"
            // style={{ color: "var(--primary)" }}
          >
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
          <div className="mt-5" />
          <Link to="/" style={{ color: "var(--secondary)" }}>
            Back to homepage
          </Link>
        </div>
      </div>
    </body>
  );
};

export default ErrorIndex;
