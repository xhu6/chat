import { Link } from "react-router";

export function Back() {
  return (
    <Link className="content-center text-white" to={"/"}>
      &lt;-
    </Link>
  );
}
