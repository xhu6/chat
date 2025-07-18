import { Link } from "react-router-dom";

export function Back() {
  return (
    <Link className="content-center text-white" to={"/"}>
      &lt;-
    </Link>
  );
}
