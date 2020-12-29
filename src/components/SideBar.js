import React from 'react';
import user from '../upload/images/user.png';

export class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar-main">
                <div className="user-img"> <img src={user}  alt={'user'}/> </div>
                <div className="left-button">
                    <ul>
                        <li className="active">
                            <a>
                                <span className="fa icon-menu"> </span>
                                <span className="point">9</span>
                                <span>GÖREVLER</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="fa icon-cog"> </span>
                                <span>AYARLAR</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="close-panel">
                    <a>
                        <span className="icon-kapat_ikon"> </span>
                        <span className="text">KAPAT</span>
                    </a>
                </div>
            </div>
        );
    }
}