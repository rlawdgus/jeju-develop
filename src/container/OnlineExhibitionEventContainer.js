import React from 'react';

const OnlineExhibitionEventContainer = () => {

    return (
        <>
            <div className="modalbg"></div>
            <div className="modal ">
                {/* event1 */}
                {/* <div className="eventin">
                    <h3><strong>이벤트 참여 후</strong>전시관 둘러보기</h3>
                    <span>행사 종료 후 추첨을 통하여 경품을 지급해 드립니다.</span>
                    <p><img src={require("../static/img/img_eventin.png")} /></p>
                    <a href="" className="btin">참여하기</a>
                    <a href="" className="btclose">다음에</a>
                </div> */}
                {/* event2 */}
                <div className="eventtxt">
                    <h3>이벤트 참여를 위한 회원정보 입력</h3>
                    <span className="inf">*는 필수 입력 항목 입니다.</span>
                    <dl className="fir">
                        <dt>이름</dt>
                        <dd><input type="text" placeholder="영문, 숫자, _ 만 입력 가능, 최소 3자 이상" style={{ width: '100%' }} /></dd>
                    </dl>
                    <dl>
                        <dt>소속 </dt>
                        <dd><input type="text" style={{ width: '100%' }} /></dd>
                    </dl>
                    <dl>
                        <dt>직함</dt>
                        <dd><input type="text" style={{ width: '100%' }} /></dd>
                    </dl>
                    <dl>
                        <dt>휴대폰 번호 </dt>
                        <dd><input type="text" style={{ width: '100%' }} /></dd>
                    </dl>
                    <dl>
                        <dt>전화 번호 </dt>
                        <dd><input type="text" style={{ width: '100%' }} /></dd>
                    </dl>
                    <dl>
                        <dt>이메일 주소 </dt>
                        <dd><input type="text" style={{ width: '43%' }} />@<input type="text" style={{ width: '45%' }} /></dd>
                    </dl>
                    <div className="privacy">
                        <h4>· 개인정보취급방침</h4>
                        <span>
                            <strong>개인정보취급방침</strong>

                        ㈜이노윙(이하 “회사”)는 정보통신망 이용촉진 및 정보보호에 관한 법률, 개인정보보호법에 따라
                        모든 고객님의 개인정보보호 및 권익을 보호하기 위하여 수집, 보유된 정보를 적법하고 적정하게 취급할 것입니다.

                        "회사"는 개인정보와 관련한 고객님의 고충을 원활하게 처리할 수 있도록 관련 법령에 의거한
                        개인정보 취급방침을 정하여 "회사"의 서비스를 이용하는 고객님의 권익보호에 최선을 다하겠습니다.
                        본 개인정보처리방침은 ㈜이노윙이 제공하는 서비스 이용에 적용되며 다음과 같은 내용을 담고 있습니다.

                        제12조 (서비스의 이용 신청에 대한 승낙과 거절)
                    </span>
                        <em><strong>*</strong>동의합니다. <input type="checkbox" id="p1" name="" className="leftch" /><label
                            for="p1"><span></span> </label></em>
                    </div>
                    <a href="" className="btin">응모하기 </a>
                </div>
            </div>
        </>
    )
}

export default OnlineExhibitionEventContainer;