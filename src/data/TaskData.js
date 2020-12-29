import React from 'react';

export class TaskData extends React.Component {
    render() {
        const items = this.props.data.map((item, i) => {
            let task = '';
            item.tanimi === 1 ? task = 'active-task' : task = 'ending-task';
            if ( this.props.activeClass === 'All' ) {
                return (
                    <tr key={i} id={'task-' + i} className={'tasks ' + task + ' ui-state-default'}>
                        <td>
                            <label className="cont">
                                <input className="checkbox" type="checkbox" value={i}
                                       defaultChecked={item.tanimi === 1 ? false : true}/>
                                <span className="checkmark"></span>
                            </label>
                        </td>
                        <td className="table-text">
                            {item.adi}
                        </td>
                        <td>
                            <a
                                data-id={i}
                                href="#"
                                className="table-bottom delete-table deleted"
                            >
                                <i className="fa fa-trash"></i>
                            </a>
                        </td>
                        <td>
                            <a
                                href="#"
                                className="table-down table-bottom bottom-table"
                            >
                                <i className="fa fa-caret-down"></i>
                            </a>
                        </td>
                    </tr>
                )
            } else if ( this.props.activeClass === 'Active' && item.tanimi === 1  ) {
                return (
                    <tr key={i} id={'task-' + i} className={'tasks ' + task + ' ui-state-default'}>
                        <td>
                            <label className="cont">
                                <input className="checkbox" type="checkbox" value={i}
                                       defaultChecked={item.tanimi === 1 ? false : true}/>
                                <span className="checkmark"></span>
                            </label>
                        </td>
                        <td className="table-text">
                            {item.adi}
                        </td>
                        <td>
                            <a
                                data-id={i}
                                href="#"
                                className="table-bottom delete-table deleted"
                            >
                                <i className="fa fa-trash"></i>
                            </a>
                        </td>
                        <td>
                            <a
                                href="#"
                                className="table-down table-bottom bottom-table"
                            >
                                <i className="fa fa-caret-down"></i>
                            </a>
                        </td>
                    </tr>
                )
            } else if ( this.props.activeClass === 'Ending' && item.tanimi === 0  ) {
                return (
                    <tr key={i} id={'task-' + i} className={'tasks ' + task + ' ui-state-default'}>
                        <td>
                            <label className="cont">
                                <input className="checkbox" type="checkbox" value={i}
                                       defaultChecked={item.tanimi === 1 ? false : true}/>
                                <span className="checkmark"></span>
                            </label>
                        </td>
                        <td className="table-text">
                            {item.adi}
                        </td>
                        <td>
                            <a
                                data-id={i}
                                href="#"
                                className="table-bottom delete-table deleted"
                            >
                                <i className="fa fa-trash"></i>
                            </a>
                        </td>
                        <td>
                            <a
                                href="#"
                                className="table-down table-bottom bottom-table"
                            >
                                <i className="fa fa-caret-down"></i>
                            </a>
                        </td>
                    </tr>
                )
            }
        });
        return (
            <tbody>
                {items}
            </tbody>
        );
    }
}