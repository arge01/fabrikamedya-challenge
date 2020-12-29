import React from 'react';
import {
    Button,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

export class FormData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            placeholder: 'Görev giriniz.',
        };
    };
    textAreaChange = (event) => {
        this.setState({value: event.target.value});
    };
    addTask = (event) => {
        const text = this.state.value;
        this.setState({value: event.target.value});
        if ( this.state.value === "" ){
            this.setState({placeholder: 'Boş Kayıt Yapamazsınız!'});
        } else {
            this.props.toggleModal();
        }
        console.log(text);
        event.preventDefault();
    };
    render() {
        return (
            <div>
                <ModalBody>
                    <div className="form-group">
                        <label htmlFor="txtApplication">Yeni Görev</label>
                    </div>
                    <div className="form-group">
                        <form className='action-form' onSubmit={this.addTask}>
                                <textarea
                                    className="form-control"
                                    id="add-task"
                                    placeholder={this.state.placeholder}
                                    cols="30"
                                    rows="10"
                                    value={this.state.value}
                                    onChange={this.textAreaChange}
                                />
                        </form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.addTask}>Kaydet</Button>
                    <Button color="secondary" onClick={this.props.toggleModal}>Çık</Button>
                </ModalFooter>
            </div>
        );
    }
}