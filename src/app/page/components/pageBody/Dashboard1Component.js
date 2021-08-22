import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CircleSpinner } from "react-spinners-kit";
import {NotificationManager} from 'react-notifications';
import * as api from '../../../../api/UrlApi';

var _defaultImag = 'https://wispri-yelena.s3.ap-northeast-1.amazonaws.com/avatar/avatar-2020-02-13-12_11_28-search.png';

class DashboardComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            original_price : 0,
            desired_price : 0,
            _d : null,
            max_price : 0,
            fetchingState : false,
            image : _defaultImag,
            url : '',
            urlinfo : null,
            saveDisable : false

        };
        this.fetchPrice=this.fetchPrice.bind(this);
        this._handleChange=this._handleChange.bind(this);
        this._handleChange2=this._handleChange2.bind(this);
        this.urlSave=this.urlSave.bind(this);
        this.compareData=this.compareData.bind(this); 
        this.formatField=this.formatField.bind(this);        
    }

    _handleChange(e){
        this.setState({
            url : e.target.value
        });
    }

    async compareData(){
        if(Number(this.state.original_price)>0 && Number(this.state.desired_price)>0)
            await this.setState({
                _d : Number(((Number(this.state.original_price)-Number(this.state.desired_price))/Number(this.state.original_price)*100).toFixed(0))                
            });
        else
            await this.setState({
                _d : null
            });
        if((Number(this.state.original_price)>Number(this.state.desired_price) && Number(this.state.original_price) > 0)
            || (Number(this.state.original_price) === 0 && Number(this.state.desired_price) === 0)){
            await this.setState({
                saveDisable : false
            });
        }else{
            await this.setState({
                saveDisable : true
            });
        }    
    }

    async _handleChange2(e){
        await this.setState({
            desired_price : e.target.value
        });
        this.compareData();
    }

    _messageAlert(msg) {
        NotificationManager.success(msg,
            '',8000);
    }

    fetchPrice = async() => {        
        if(this.state.url){
            this.state.url && this.setState({
                fetchingState : true
            });
            var res = await api.UrlFetch(this.state.url).catch(err=> {
                NotificationManager.error('Hmm, this URL seems incorrect. Please try again.',
                '',8000);
                this.setState({
                    fetchingState : false,
                    original_price : null
                });
            });
            //console.log('res',res)
            if(res && res.data){
                var data =  res.data ;
                if(res.data.url === undefined){
                    NotificationManager.error('Hmm, this URL seems incorrect. Please try again.',
                    '',8000);
                    await this.setState({
                        original_price : null,
                        image : _defaultImag,
                        urlinfo : null,
                        fetchingState : false
                    });
                    this.compareData();
                } else {
                    NotificationManager.success('URL fetch successful',
                    '',8000);
                    await this.setState({
                        original_price : data.current_price,
                        image : data.image,
                        urlinfo : res.data,
                        fetchingState : false
                    });
                    this.compareData();
                }
            }                
        } 
    }

    urlSave() {   
        (async () => {
            console.log(this.state)
            if( this.state.url !== null && this.state.desired_price > 0 && this.state.url !== null && Number(this.state.original_price)>Number(this.state.desired_price)) {                
                var res = await api.UrlSave({
                    userid:this.props.user.userId,
                    url:this.state.url,
                    desired_price:this.state.desired_price,
                    urlinfo:this.state.urlinfo,
                });
                var data = res.data;
                if(data.success){
                    NotificationManager.success('Congrats! Your alert has been set.',
                    '',8000);
                    await this.formatField();
                    this.props.urlLoad();
                }else{
                    NotificationManager.error(data.error,
                        '',8000);
                }
            } else {
                NotificationManager.error('Fill out all fields!',
                '',8000);
            }
        })();         
    }

    async formatField(){
        await this.setState({
            desired_price : 0,
            original_price : 0,
            _d : null,
            max_price : 0,
            fetchingState : false,
            image : _defaultImag,
            url : '',
            urlinfo : null,
            saveDisable : false
        });
    }

    render() {        
        return (
            <div className='src_product2'>
                <div className='container2'>
                    <h3>Hello {this.props.user.profile.display_name}!, let’s get started</h3>
                    <form>                        
                        <div className='pro_form2'>                        
                            <input  type='hidden' name='userid'/>
                            <input  type='url' value={this.state.url}  onChange={this._handleChange}  placeholder='Enter or paste your product URL' name='url'/>
                            <button type='button' onClick={this.fetchPrice}>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td style={{width :35,paddingLeft :10,marginRight :10}}>
                                                <CircleSpinner
                                                    size={23}
                                                    style={{float: 'left'}}
                                                    color="#e8f0fe"
                                                    loading={this.state.fetchingState}
                                                />
                                            </td>
                                            <td> Fetch Price</td>
                                        </tr>
                                    </tbody>                                    
                                </table>
                            </button>
                        </div>
                        <div className='price_sec2'>
                            <div className='img_sec2'>
                                <img src={this.state.image} alt=''/>
                            </div>
                            <div className='price_alrt2'>
                                <div className='alrt_sec2'>
                                    <label style={{fontSize: 16, color: '#4aa999',paddingTop: 11 , width :360 }}>Desired price : &nbsp;</label>
                                    <input  type='number' disabled={this.state.fetchingState} value={this.state.desired_price} onChange={this._handleChange2} max={this.state.max_price} style={{color: '#66ac99',fontSize: 17}} placeholder='' name='desired_price'/>
                                    {/* <button type='button'>Price Alert</button> */}
                                    <button type='button'  onClick={this.urlSave}  style={{padding :5,minWidth: 149}}>Set your alert now</button>
                                </div>
                                <div className='alrt_sec2' style={{paddingLeft: 115,display : (!this.state.saveDisable)  ? 'none' : 'block'}}>
                                    <p style={{marginTop: 15, color :'red'}}>Desired price cannot be more than the original price</p>
                                </div>
                                <ul>
                                    <li><label>Original price :</label> &nbsp;&nbsp;&nbsp;  {Number(this.state.original_price) >0 ? this.state.original_price : ''}</li>
                                    <li><label>Price Difference : </label>  {this.state._d && this.state._d>0 ? this.state._d + '%' : '  '}</li>
                                </ul>
                                {/* <button>Add to price alert</button> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    } 
}

const mapStateToProps = (state, ownProps) => {
    let initialValues = {
        userid : ownProps.user.userId
    };
    return {        
        initialValues
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardComponent));