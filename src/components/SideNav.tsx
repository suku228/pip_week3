import type { ReactElement } from "react";
import { navItems } from "../constant";
import "./styles/sideNav.css"

interface ISideNav {
  updateRoute: (str: string) => void;
}

export const SideNav: (props: ISideNav) => ReactElement = (props) => {
  const { updateRoute } = props;
  return (
    <aside className="side-nav">
      <div className="side-nav__logo">
      </div>

      <nav aria-label="Main navigation">
        <ul className="side-nav-bar-list">
          {navItems.map((item, index) => (
            <li  className="list-item" key={index}>
              <button className="route-click-btn" onClick={() => updateRoute(item.route)}>
                {item.route}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
