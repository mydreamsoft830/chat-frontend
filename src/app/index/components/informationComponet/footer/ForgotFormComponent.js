import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { ForgotAction } from '../../../../../actions/IndexAction';
import { connect } from 'react-redux';

class ForgotFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='login_form' style={{display : this.props.forgotformshow_flag ? 'block':'none'}}>
                <div className='form_cntnr'>
                    <button className='cls_pop'>
                        <i className='fa fa-close' onClick={this.props.forgotFormView}></i>
                    </button>
                    <h3>Password Reset</h3>
                    <form onSubmit={this.props.handleSubmit}>
                        <div className='form-group'>
                            <label>Enter your email<span>*</span></label>
                            <Field component="input" type='email' name='email'/>
                        </div>
                        <div className='form-group'>
                            <div className='sbmt_btn'> 
                                <input type='submit' value='Send' />  
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
        form: 'ForgotFormComponent',
        initialValues: {},
        onSubmit: ForgotAction,
    })(ForgotFormComponent)
));

