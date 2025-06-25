import { RiMovie2AiFill } from "react-icons/ri";
const DetailBar = () => {
  return (
    <div className="detail-bar">
      <RiMovie2AiFill className="detail-icon"/>
      <div className="detail-txt">
        <div className="txt">
        <p>
          <strong>7,000</strong>원이면 만날 수 있는 넷플릭스</p>
          <p>가장 경제적인 광고형 멤버십을 이용해 보세요
        </p>
        </div>
        <button>자세히 알아보기</button>
      </div>
    </div>
  );
};

export default DetailBar;