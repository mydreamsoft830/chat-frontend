import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { ResetAction } from '../../../../../actions/IndexAction';
import { connect } from 'react-redux';

class ResetFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='login_form' style={{display : this.props.resetformshow_flag ? 'block':'none'}}>
                <div className='form_cntnr'>
                    <button className='cls_pop'>
                        <i className='fa fa-close' onClick={this.props.resetFormView}></i>
                    </button>
                    <h3>Reset Password</h3>
                    <form onSubmit={this.props.handleSubmit}>
                        <div className='form-group'>
                            <label>Enter your email / Username <span>*</span></label>
                            <Field component="input" type='email' name='email'/>
                        </div>
                        <div className='form-group'>
                            <label>4 digit security key<span>*</span></label>
                            <Field component="input" type='number' name='pw_token' maxlength='4' minLength='4'/>
                        </div>
                        <div className='form-group'>
                            <label>New Password<span>*</span></label>
                            <Field component="input" type='password' name='password'/>
                        </div>
                        <div className='form-group'>
                            <div className='sbmt_btn'> 
                                <input type='submit' value='Reset' />  
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
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'ResetFormComponent',
        initialValues: {},
        onSubmit: ResetAction,
    })(ResetFormComponent)
));

