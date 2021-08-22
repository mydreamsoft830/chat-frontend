import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import CountryComponent from '../../../../page/components/pageBody/CountryComponent'
import { RegisterAction } from '../../../../../actions/IndexAction';
import { connect } from 'react-redux';

const required = value => value ? undefined : 'Required'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

//const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue6 = minValue(6)


//const hasNumber = value => new RegExp(/[0-9]/).test(value) ?  undefined : 'Must has a number'
const hasNumber = value => new RegExp(/[0-9]/).test(value) ?  undefined : 'Include upper case & lowercase letters, special characters & numbers in your password.'
//const hasMixed = value => new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value) ?  undefined : 'Must has a a~z and A~Z'
const hasMixed = value => new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value) ?  undefined : 'Include upper case & lowercase letters, special characters & numbers in your password.'
//const hasSpecial = value => new RegExp(/[!#@$%^&*)(+=._-]/).test(value) ? undefined : 'Must has a special word'
const hasSpecial = value => new RegExp(/[!#@$%^&*)(+=._-]/).test(value) ? undefined : 'Include upper case & lowercase letters, special characters & numbers in your password.'


// export const strengthColor = count => {
//     if (count < 2)
//        return 'red';
//     if (count < 3)
//        return 'yellow';
//     if (count < 4)
//        return 'orange';
//     if (count < 5)
//        return 'lightgreen';
//     if (count < 6)
//        return 'green';
//  }
//  export const strengthIndicator = value => {
//     let strengths = 0;
//     if (value.length > 5)
//        strengths++;
//     if (value.length > 7)
//        strengths++;
//     if (hasNumber(value))
//        strengths++;
//     if (hasSpecial(value))
//        strengths++;
//     if (hasMixed(value))
//        strengths++;
//     return strengths;
//  }


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span style={{color : 'red'}}>{error}</span>) || (warning && <span style={{color : 'red'}}>{warning}</span>))}
      </div>
    </div>
);

class RegisterFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            countryid: '',
            phone: '',
            password: '',
            confirmpassword: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {        
        return (
            <div className='register_form'>
                <div className='form_cntnr'>
                    <h3>Register New Account</h3>
                    <form onSubmit={this.props.handleSubmit}>
                        <div className='form-group'>
                            <label>Enter your email address <span>*</span></label>
                            <Field component="input" type='email' name='email' validate={[ required,email ]} component={renderField}/>
                        </div>
                        <div className='form-group'>
                            <label>Enter your name<span>*</span></label>
                            <Field component="input" type='text' name='username' validate={[ required ]} component={renderField} />
                        </div>
                        <div className='form-group'>
                            <label>Choose Your Country</label>
                            <CountryComponent/>
                        </div>
                        <div className='form-group'>
                            <label>Mobile Number</label>
                            <Field component="input" type='text' name='phone_number'  validate={[ number ]} component={renderField}/>
                        </div>
                        
                        <div className='form-group'>
                            <div className='half_sec'>
                                <label>Password<span>*</span></label>
                                <Field component="input" type='password' name='password'  validate={[ required,hasNumber,hasMixed,hasSpecial,minValue6 ]} component={renderField} />
                            </div>
                            <div className='half_sec'><label>Confirm Password<span>*</span></label>
                                <Field component="input" type='password' name='password2'  validate={[ required,hasNumber,hasMixed,hasSpecial,minValue6 ]} component={renderField} />
                            </div>
                        </div>
                        <div style={{display : this.props.error_1 ? 'block':'none',color : 'red',marginBottom :10}}>
                            We’re sorry, your passwords don’t match.
                        </div>

                        {/* <div className='form-group'>
                            <label>Include upper case & lowercase letters, special characters & numbers in your password.</label>
                        </div> */}

                        <div className='form-group'>
                            <iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LewcH4UAAAAANkJqEQ7GQcCkqkrTI5HdDc2g-w2&amp;co=aHR0cHM6Ly9kZXYud2lzcHJpLmNvbTo0NDM.&amp;hl=en&amp;v=PRkVene3wKrZUWATSylf69ja&amp;size=normal&amp;cb=6wm4pregzs28" width='304' height='78' role='presentation' name='a-ub6zq9y89j09' frameBorder='0' scrolling='no' sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox' title=' '></iframe>
                        </div>
                        <div className='form-group'>
                            <div className='sbmt_btn'>
                                <input type='submit' value='Submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {        
        error_1 : state.index.error_1
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'RegisterFormComponent',
        initialValues: {},
        onSubmit: RegisterAction,
    })(RegisterFormComponent)
));
