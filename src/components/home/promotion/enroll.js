import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/formFields';

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
        const NewElement = {
            ...newFormData[element.id]
        }

        NewElement.value = element.event.target.value;

        newFormData[element.id] = NewElement;

        this.setState({
            formData: newFormData
        })
    }

    submitForm() {

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
                                change ={(element) => this.updateForm(element)}

                            />
                        </div>
                    </form>
                </div>

            </Fade>
        )
    }
}

export default Enroll;