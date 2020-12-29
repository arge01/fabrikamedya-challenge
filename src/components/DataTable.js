import React from 'react';
import {TaskData} from "../data/TaskData";

export class DataTable extends React.Component {
    render() {
        return (
            <div className="task-table">
                <table className="table-col">
                    <TaskData data={this.props.data} activeClass={this.props.activeClass}/>
                </table>
            </div>
        );
    }
}