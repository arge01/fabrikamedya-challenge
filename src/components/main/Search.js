import React from 'react';
import {
    Modal,
    ModalHeader,
} from 'reactstrap';
import {FormData} from "./FormData";

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };
    render() {
        return (
            <div className="sect search-bar">
                <div className="search">
                    <input className="input-search" id="search" name="search" type="text" placeholder="Arama..."/>
                    <div className="new-task" onClick={this.toggle}><i className="fas fa-plus"></i> Yeni Görev</div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Görev Paneli</ModalHeader>
                    <FormData toggleModal={this.toggle}/>
                </Modal>
            </div>
        );
    }
}