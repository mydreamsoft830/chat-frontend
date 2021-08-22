import React, { Component } from 'react';
import Moment from 'react-moment';
import {connect} from 'react-redux';

class UrlItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (            
            <div className="alert_item2" style={{height :630}}>
                <ul className="item_actns2">
                    <li onClick={()=>this.props.urlEdit(this.props.id)} className="edit_pro2 edit_opn2"><i className="fa fa-pencil" aria-hidden="true"></i></li>
                    <li onClick={()=>this.props.urlBell(this.props.userUrl.id)} style={{opacity : this.props.userUrl.bell ? 1 : 0.2}}><a href='#p'> <i className="fa fa-bell" aria-hidden="true"></i></a></li>
                    <li onClick={()=>this.props.urlRemove(this.props.userUrl.id)} className="trsh_opn2"><i className="fa fa-trash" aria-hidden="true"></i></li>
                </ul>
                <div style={{backgroundRepeat:'no-repeat',backgroundPosition: 'center', backgroundImage:'url('+this.props.userUrl.image+')',backgroundSize: 'cover',width : '100%',height :330}}>

                </div>
                {/* <figure>
                    <img src={this.props.userUrl.image} alt=''/>
                </figure> */}
                <div className="item_dtl2">
                    {/* <span className="mta_date2">Last Update : 29 Nov, 2019</span> */}
                    <span className="mta_date2">
                        Last Update :&nbsp;
                        <Moment format="D MMM YYYY" withTitle>
                            {this.props.userUrl.last_at}                            
                        </Moment>
                    </span>
                    <h4>{this.props.userUrl.name}</h4>
                    <h5>{this.props.userUrl.domain}</h5>
                    <ul className="prc_estimate2">
                        <li><label>Desired Price : </label>   {this.props.userUrl.currency} {this.props.userUrl.desired_price}</li>
                        <li><label>Original Price :  </label>   {this.props.userUrl.currency} {this.props.userUrl.current_price}</li>
                    </ul>
                    <div className="prc_grade2" style={{position: 'absolute', bottom :10}}>
                        <a target='_bank' href={this.props.userUrl.short_url}><button>Shop Now</button></a>
                        <span className="prcnt2">{Math.round((this.props.userUrl.current_price-this.props.userUrl.desired_price)/this.props.userUrl.current_price*100,1)}% <img src="/images/down-arrow.svg" alt=''/></span>
                    </div>
                </div>
            </div>
        );
    } 
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UrlItemComponent);
