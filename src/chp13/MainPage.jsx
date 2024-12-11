import Cardex1 from "./Cardex1";
import React from "react";
import ProfileCard from "./ProfileCard";
    function MainPage() {
        return (
            <div className="main-container">
                <h1>홈페이지메인화면</h1>

                <ProfileCard/>

                <Cardex1 className="notice-card" title="공지사항">
                    <p>여기는 공지사항</p>
                    <p>최ㅣㄴ송싱역기</p>
                </Cardex1>

                <Cardex1 className="event-card" title="이벤트">
                    <p>현제 진행ㅇ중인이벤트릴확인</p>
                    <ul>
                        <li>이벤트1:할인 쿠폰</li>
                        <li>이벤트2: 무료배송</li>
                    </ul>
                </Cardex1>

                <Cardex1 className="inquiry-card" title="문의하기">
                    <p>궁금한점이 있으면 언제든ㅣㅈ 문의</p>
                    <button>문의하기</button>
                </Cardex1>
            </div>
        );
    }
    export default MainPage;