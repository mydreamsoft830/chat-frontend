import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderComponent from '../../components/informationComponet/header/HeaderComponent'
import FaqComponent from '../../components/informationComponet/indexBody/FaqComponent'
import FooterComponent from '../../components/informationComponet/footer/FooterComponent'
import LoginFormComponent from '../../components/informationComponet/footer/LoginFormComponent'
import ForgotFormComponent from '../../components/informationComponet/footer/ForgotFormComponent'
import ResetFormComponent from '../../components/informationComponet/footer/ResetFormComponent'

class FaqContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginformshow_flag : false,
            forgotformshow_flag : false,
            resetformshow_flag : false,
        };
        this.loginFormView = this.loginFormView.bind(this);
        this.forgotFormView = this.forgotFormView.bind(this);
        this.resetFormView = this.resetFormView.bind(this);
    }

    componentDidMount() {
       
    }
    
    componentWillUnmount() {

    }

    loginFormView() {
        this.setState({loginformshow_flag : !this.state.loginformshow_flag})
    }

    forgotFormView() {
        this.setState({
            forgotformshow_flag : !this.state.forgotformshow_flag,
            loginformshow_flag : !this.state.loginformshow_flag
        })
    }
    resetFormView() {
        this.setState({
            resetformshow_flag : !this.state.resetformshow_flag,
            forgotformshow_flag : false,
            loginformshow_flag : this.state.resetformshow_flag,
        })
    }
    
    render() {
        return (
            <div className="main_container">
                <header className='site_hdr'><HeaderComponent indexName={'faq'} loginFormView={this.loginFormView}/></header>   
                <FaqComponent/>
                <footer className='site_ftr'><FooterComponent indexName={'faq'}/></footer>
                <LoginFormComponent loginformshow_flag={this.state.loginformshow_flag} loginFormView={this.loginFormView} forgotFormView={this.forgotFormView}/>
                <ForgotFormComponent forgotformshow_flag={this.state.forgotformshow_flag} forgotFormView={this.forgotFormView} resetFormView={this.resetFormView}/>
                <ResetFormComponent resetformshow_flag={this.state.resetformshow_flag} resetFormView={this.resetFormView}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FaqContainer);

