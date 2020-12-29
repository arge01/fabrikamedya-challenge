import React from 'react';

//components
import {Header} from "./main/Header";
import {Nav} from "./main/Nav";
import {Search} from "./main/Search";
import {Footer} from "./main/Footer";
import {DataTable} from "./DataTable";
import axios from "axios";

export class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filter: 'All',
            tasks: [],
            item: [],
        };
    };
    componentDidMount() {
        axios.get('http://localhost:8000/api/api')
            .then(res => {
                const tasks = res.data.tasks;
                const item = res.data.item;
                this.setState({ tasks });
                this.setState({ item });
            })
    };

    classFilter = (filter) => {
        this.setState({filter: filter});
    };
    render() {
        return (
            <div className='chunk-flex'>
                <Header/>
                <Nav item={this.state.item} classFilter={this.classFilter} activeClass={this.state.filter}/>
                <div className="task-panel">
                    <div className="task">
                        <Search/>
                        <div className="sect body-bar">
                            <div className="scroll-container">
                                <div className="new-body">
                                    <DataTable data={this.state.tasks} activeClass={this.state.filter}/>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}