import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <header className="header task-header">
                <div className="title">
                    <a className="icon icon-spinner11"></a>
                    <h4>Görev Yönetim Paneli</h4>
                </div>
            </header>
        );
    }
}