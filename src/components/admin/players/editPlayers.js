import React, { Component } from 'react'
import AdminLayout from '../../../HOC/adminLayout';

import FormField from '../../ui/formFields';
import {validate} from '../../ui/misc';

import Fileuploader from '../../ui/fileuploader';
import {firebasePlayers, db, firebase} from '../../../firebase';

class EditPlayers extends Component {

    state = {
        playerId: '',
        formType: '',
        formError: false,
        formSuccess: '',
        defaultImg: '',
        formData: {
                name: {
                    element: 'input',
                    value: '',
                    config: {
                        label: 'Player Name',
                        name:'name_input',
                        type: 'text'
                    },
                    validation: {
                        required: true,
                    },
                        valid: false,
                        validationMessage: '',
                        showlabel: true
                },
                lastname: {
                    element: 'input',
                    value: '',
                    config: {
                        label: 'Player Last Name',
                        name:'lastname_input',
                        type: 'text'
                    },
                    validation: {
                        required: true,
                    },
                        valid: false,
                        validationMessage: '',
                        showlabel: true
                },
                number: {
                    element: 'input',
                    value: '',
                    config: {
                        label: 'Player Number',
                        name:'number_input',
                        type: 'text'
                    },
                    validation: {
                        required: true,
                    },
                        valid: false,
                        validationMessage: '',
                        showlabel: true
                },
                position: {
                    element: 'select',
                    value: '',
                    config: {
                        label: 'Select Position',
                        name:'select_position',
                        type: 'select',
                        options: [
                            {key:'Keeper', value: 'Keeper'},
                            {key:'Defense', value: 'Defense'},
                            {key:'Midfield', value: 'Midfield'},
                            {key:'Striker', value: 'Striker'}
                        ]
                    },
                    validation: {
                        required: true,
                    },
                        valid: false,
                        validationMessage: '',
                        showlabel: true
                }, 
                image: {
                    element: 'image',
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: true
                }
        }
    }

    componentDidMount() {
        const playerId = this.props.match.params.id;

        if(!playerId) {
            // add player
            this.setState({
                formType: 'Add Player'
                })
        } else {
            //edit player
        }
    }

    updateForm(element){
        const newFormData = {
            ...this.state.formData
        }
        const newElement = {
            ...newFormData[element.id]
        }

        newElement.value = element.e.target.value;

        let validData = validate(newElement)

        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newFormData[element.id] = newElement;


        this.setState({
            formError: false,
            formData: newFormData
        })
    }

    submitForm(e){
        e.preventDefault();

        let dataToSubmit = {};
        let formisValid = true;
        
        for (const key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
            formisValid = this.state.formData[key].valid && formisValid;
        }


        if(formisValid) {
            
        } else {
            this.setState({
                formError: true
            })
        }
    }

    resetImage = () => {

    }

    storeFilename = () => {

    }

    render() {
        return (
            <AdminLayout>
                <div className="editplayers_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={(e) => this.submitForm(e)}>

                            <Fileuploader 
                                dir="players"
                                tag={"Player image"}
                                defaultImg={this.state.defaultImg}
                                defaultImgName={this.state.formData.image.value}
                                resetImage={() => this.resetImage()}
                                filename={(filename) => this.storeFilename(filename)}
                            />

                            <FormField 
                                    id={'name'}
                                    formData={this.state.formData.name}
                                    change={(element) => this.updateForm(element)}
                                />
                            <FormField 
                                    id={'lastname'}
                                    formData={this.state.formData.lastname}
                                    change={(element) => this.updateForm(element)}
                                />
                            <FormField 
                                    id={'number'}
                                    formData={this.state.formData.number}
                                    change={(element) => this.updateForm(element)}
                                />
                            <FormField 
                                    id={'position'}
                                    formData={this.state.formData.position}
                                    change={(element) => this.updateForm(element)}
                                />
                            <div className="success_label">
                                {this.state.formSuccess}
                            </div>
                            {this.state.formError ? 
                                <div className="error_label">
                                    Something went wrong
                                </div>
                                : ''
                            }
                            <div className="admin_submit">
                                <button onClick={(e) => this.submitForm(e)}>
                                    {this.state.formType}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminLayout>
        )
    }
}

export default EditPlayers;