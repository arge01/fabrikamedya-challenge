import React from 'react';
import tumu from '../../img/icon/tumu-ikon.png';
import aktif from '../../img/icon/aktif-ikon.png';
import biten from '../../img/icon/bitmis-ikon.png';

export class Nav extends React.Component {
    render() {
        return (
            <nav className="nav task-nav">
                <div className="menu">
                    <ul>
                        <li className={ this.props.activeClass === 'All' ? 'active' : '' } onClick={() => this.props.classFilter('All')}>
                            <a href='#'>
                                <span className="list">{this.props.item.all}</span>
                                <span className="icon"><img src={tumu} alt={'Tümü'}/></span>
                                <span className="text">Tüm Görevler</span>
                            </a>
                        </li>
                        <li className={ this.props.activeClass === 'Active' ? 'active' : '' } onClick={() => this.props.classFilter('Active')}>
                            <a href='#'>
                                <span className="list">{this.props.item.active}</span>
                                <span className="icon"><img src={aktif} alt="Aktif"/></span>
                                <span className="text">Aktif Görevler</span>
                            </a>
                        </li>
                        <li className={ this.props.activeClass === 'Ending' ? 'active' : '' } onClick={() => this.props.classFilter('Ending')}>
                            <a href='#'>
                                <span className="list">{this.props.item.ending}</span>
                                <span className="icon"><img src={biten} alt="Biten"/></span>
                                <span className="text">Biten Görevler</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}