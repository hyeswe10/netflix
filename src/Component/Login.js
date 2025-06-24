import { useState } from "react";


const Login = () => {
    const [isEmail,setIsEmail] = useState(false);
    const [isPw,setIsPw] = useState(false);
    return (
        <div id="login-page">
            <div className="login-wrap">
            <h1>로그인</h1>
            <label>
                <input
                    onBlur={(e)=>{
                        if(e.target.value === ''){
                            setIsEmail(true);
                        } else{
                            setIsEmail(false);
                        }
                    }}
                />
                <span>이메일 주소 또는 휴대폰 번호</span>
            </label>
            { isEmail && <p className="error">ⓧ 정확한 이메일 주소나 전화번호를 입력하세요.</p> }
            <label>
                <input
                    onBlur={(e)=>{
                        if(e.target.value.length < 3){
                            setIsPw(true);
                        } else{
                            setIsPw(false);
                        }
                    }}
                />
                <span>비밀번호</span>
            </label>
            { isPw && <p className="error">ⓧ 비밀번호는 4~60자 사이여야 합니다.</p> }
            <button>로그인</button>
            <p>또는</p>
            <button>로그인 코드 사용하기</button>
            <a href="#">비밀번호를 잊으셨나요?</a>
            <label>
                <input type="checkbox"/>
                <span>로그인 정보 저장</span>
            </label>
            <div className="sign-up">
                <p>클론: 프로젝트가 어떻게 만들어졌는지 궁금하신가요?</p>
                <a href="#" target="_blank">깃허브에서 살펴보세요</a>
                <p>이 페이지는 <strong>포트폴리오</strong> 용도로 제작된 클론 프로젝트입니다.</p>
            </div>
            </div>
        </div>
    );
};

export default Login;