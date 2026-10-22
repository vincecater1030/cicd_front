import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
        <Link to="/">HOME-jude</Link>
        <Link to="/joinForm">회원가입 들어와라</Link>
        <Link to="/loginForm">로그인 할수있냐</Link>
        <Link to="/saveForm">글쓰기 좀 허냐?</Link>
      </div>
    </>
  );
};

export default Header;
