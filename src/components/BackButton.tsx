import { Link } from "react-router";

export function BackButton() {
  return (
    <Link className="content-center text-white" to={"/"}>
      &lt;-
    </Link>
  );
}
