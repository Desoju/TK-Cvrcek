import { Outlet } from "react-router-dom";
import "./style.scss";

export const Main = ({ content }) => {
  return (
    <div className="main">
      {content}
      <Outlet />
    </div>
  );
};
