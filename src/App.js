import React, {Component} from 'react';

//components
import {SideBar} from "./components/SideBar";
import {Main} from "./components/Main";

class App extends Component {
    state = {
        closePanel: true,
        closePanelMain: true,
    };
    panelToggle = () => {
        this.setState({
            closePanel: !this.state.closePanel,
        });
        if (this.state.closePanel === true) {
            this.setState({
                closePanelMain: false,
            });
        }
    };
    mainToggle = () => {
        this.setState({
            closePanelMain: this.state.closePanelMain,
        });
        if (this.state.closePanel === false) {
            this.setState({
                closePanel: true,
                closePanelMain: true,
            });
        }
    };
    render() {
        return (
            <div className="task-body">
                <button
                    className="menu-bar"
                    onClick={this.panelToggle}
                >
                    <i className="fas fa-bars"> </i>
                </button>
                <aside
                    id='sideBar'
                    className={this.state.closePanel ? 'sidebar closePanel' : 'sidebar openPanel'}
                >
                    <SideBar/>
                </aside>
                <main
                    id="main"
                    className={this.state.closePanelMain ? 'main sidebar-hide' : 'main sidebar-show'}
                    onClick={this.mainToggle}
                >
                    <Main/>
                </main>
            </div>
        );
    }
}

export default App;
