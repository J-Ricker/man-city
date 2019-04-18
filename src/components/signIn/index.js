import React, { Component } from 'react'
import FormField from '../ui/formFields';
import { validate } from '../ui/misc';



export default class SignIn extends Component {
    
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
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name:'password_input',
                    type: 'password',
                    placeholder: 'enter your password'
                },
                validation: {
                    required: true,
                },
                valid: {
                    valid: false,
                    validationMessage: ''
                }
            }
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

        let dataToSubmit = {

        }
        let formisValid = true;
        
        for (const key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
            formisValid = this.state.formData[key].valid && formisValid;
        }

        if(formisValid) {
            console.log(dataToSubmit);
        } else {
            this.setState({
                formError: true
            })
        }
    }
    
    render() {
        return (
        <div className="container">
            <div className="signin_wrapper"
                style={{margin: "100px"}}
            >
            <form onSubmit={(e) => this.submitForm(e)}>
                <h2>Please Login</h2>
                <FormField 
                    id={'email'}
                    formData={this.state.formData.email}
                    change={(element) => this.updateForm(element)}
                            />
                <FormField 
                    id={'password'}
                    formData={this.state.formData.password}
                    change={(element) => this.updateForm(element)}
                            />
                <button onClick={(e) => this.submitForm(e)}>Log in</button>
            </form>

            </div>
        </div>
        )
    }
}
