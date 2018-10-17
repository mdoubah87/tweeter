import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Tweet.css';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

class Tweet extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        remove: PropTypes.func.isRequired,
    };
    static defaultProps = {
        date: moment().format('DD/MM/YYYY'),
    }

    state = {
        isFocus : true,
    };

    handleFocus = ({type}) => {
        this.setState({isFocus: type === 'mouseleave'});
    };

    render(){

        const { avatar, fullName, username, content, date, index, remove } = this.props;
        const { isFocus } = this.state;
        return (
            <div className='wrap'>
                <div className='tweet'>
                    <div className='avatar'>
                        <img src={avatar} role='presentation' alt="avatar"/>
                    </div>
                    <div className='data'>
                        <div className='infos'>
                            <strong className='fullName'>{fullName}</strong>
                            <small className='gray'>@{username}</small>
                            <small className='gray_date'>{date}</small>
                            {username === 'Pro_Git' && (
                                <FontAwesome className='gray trash'
                                    name={isFocus ? 'trash' : 'trash-o'}
                                    onMouseEnter={this.handleFocus}
                                    onMouseLeave={this.handleFocus}
                                    onClick={() => remove (index)}
                                />

                            )}
                        </div>
                        <div className='content'>
                            <p className='cont'>{content}</p>
                        </div>
                    </div>
        
                </div>
            </div>
            //const Tweet = (props) => ( 
            // <div className='tweet'>
            //     <div className='avatar'>
            //         <img src={props.avatar} alt="avatar" className='av'/>
            //     </div>
            //     <div className='data'>
            //         <div className='info'>
            //             <strong>{props.fullName}</strong>
            //         </div>
            //         <div className='userN'>
            //             <h4>{props.username}</h4>
            //         </div>
            //         <div className='content'>
            //             <p>{props.content}</p>
            //         </div>
            //     </div>
            // </div>
            //);
        );
    }
}




export default Tweet;