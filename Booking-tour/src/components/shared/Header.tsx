import logoWeb from "@/assets/LogoWeb.png";
import { NavLink } from "react-router-dom";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "home", label: "Trang chủ" },
  { href: "weather", label: "Thời tiết" },
  { href: "history", label: "Lịch sử" },
  { href: "booking", label: "Đơn đặt" },
  { href: "tour", label: "Tour" },
];
export default function Header() {
  return (
    <div className="header_app">
      <div className="header__logo">
        <img src={logoWeb} alt="Logo Web" />
      </div>
      <ul className="header__nav-list">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.href}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "header__nav-item"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="header__login">
        <NavLink className="header__login-signin" to="/signin">
          Đăng nhập
        </NavLink>
        <div className="header__login-separator"></div>
        <NavLink className="header__login-signup" to="/signup">
          Đăng ký
        </NavLink>
      </div>
    </div>
  );
}
