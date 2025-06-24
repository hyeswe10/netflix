import { Link } from "react-router-dom";
import Membership from "./Membership";

const Main = () => {
    return (
        <main id="main">
            <div className="lang">
                <select>
                    <option selected>한국어</option>
                    <option>English</option>
                </select>
                <Link to="login">
                <button>로그인</button>
                </Link>
            </div>
            <h1>영화, 시리즈 등을 무제한으로</h1>
            <p>7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</p>
            <Membership/>
        </main>
    );
};

export default Main;