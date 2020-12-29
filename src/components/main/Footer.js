import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <div className='sect footer-bar'>
                <div className="all-select">
                    <a id="all-select" href="#">Hepsini Seç <i className="fas fa-check-square"></i></a>
                    <a id="select-delete" href="#">Seçicileri Sil <i className="fas fa-trash"></i></a>
                    <a id="select-inherit" href="#">Seçimleri Kaldır <i className="far fa-square"></i></a>
                </div>
            </div>
        );
    }
}