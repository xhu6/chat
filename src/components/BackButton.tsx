import { Link } from "react-router";

import arrowBackIcon from "assets/icons/arrow_back_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

export function BackButton() {
  return (
    <Link className="content-center" to={"/"}>
      <img src={arrowBackIcon} alt="" className="h-8 w-8" />
    </Link>
  );
}
