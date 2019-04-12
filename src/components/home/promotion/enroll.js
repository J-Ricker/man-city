import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';
import { firebasePromo } from '../../../firebase';

class Enroll extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name:'email_input',
                    type: 'email',
                    placeholder: 'enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: {
                    valid: false,
                    validationMessage: ''
                }
            }
        }
    }

    updateForm(element) {
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

    resetFormSuccess(type) {
        const newFormData = {
            ...this.state.formData
        }

        for(let key in newFormData) {
            newFormData[key].value = '';
            newFormData[key].valid = '';
            newFormData[key].validationMessage = '';
        }

        this.setState({
            formError: false,
            formData: newFormData,
            formSuccess: type ? 'Congratulations' : 'Already in database'
        });

        this.clearSuccess();
    }

    clearSuccess() {
        setTimeout(() => {
            this.setState({
                formSuccess: ''
            })
        }, 2000) 
    }

    submitForm(e) {
        e.preventDefault();

        let dataToSubmit = {

        }
        let formisValid = true;
        
        for (const key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
            formisValid = this.state.formData[key].valid && formisValid;
        }

        if(formisValid) {
            firebasePromo.orderByChild('email').equalTo(dataToSubmit.email).once('value')
            .then((snapshot) => {
                if(snapshot.val() === null) {
                    firebasePromo.push(dataToSubmit);
                    this.resetFormSuccess(true)
                } else {
                    this.resetFormSuccess(false)
                }
            })
        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(e) => this.submitForm(e)} >
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField 
                                id={'email'}
                                formData={this.state.formData.email}
                                change={(element) => this.updateForm(element)}

                            />

                            {this.state.formError ? <div className="error_label">
                                Something is wrong here, try again.
                            </div> 
                            : null}
                            <div className="success_label">
                                {this.state.formSuccess}
                            </div>
                            <button onClick={(e) => this.submitForm(e)}>Enroll</button>
                        </div>
                    </form>
                </div>
            </Fade>
        )
    }
}

export default Enroll;