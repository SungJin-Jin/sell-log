import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import './MainHeadInfo.scss'

class MainHeadInfo extends Component {
    render() {
        const name = cookie.load('name');

        return (
            <div className="reN_header_info">
                <div className="log_area">
                    { cookie.load('name') ? (
                            <Link to="/mypage/userInfo" className="btn_myN_list">안녕하세요<br /><span className="btn_cm_login">{cookie.load('name')}</span> 환영합니다!</Link>
                        ) : (
                            <Link to="/auth" className="btn_myN_list">안녕하세요<br /><span className="btn_cm_login">로그인</span>이 필요합니다</Link>
                        )
                    }
                    
                </div>
                <ul className="log_etc clearfix">
                    <li className="reN_barkete">
                        <Link to="/">장바구니</Link>
                    </li>
                    <li className="reN_delivery">
                        <Link to="/" className="btn_delivery_h">배송조회</Link>
                    </li>
                    <li className="reN_fav">
                        <Link to="/" className="btn_fav">좋아요</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MainHeadInfo;