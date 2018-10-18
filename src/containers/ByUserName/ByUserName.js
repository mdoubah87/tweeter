import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ByUserName.css';

import moment from 'moment';
import TweetBox from '../../components/TweetBox/TweetBox';
import Tweet from '../../components/Tweetes/Tweet';
import { tweets } from '../../constants';



class ByUserName extends Component {
    static propTypes = {
        params: PropTypes.object.isRequired,
    };

    state = {
        tweets,
    }
  
    publish = tweet => {
      const { tweets } = this.state;
      
      this.setState({
        tweets: [{
            avatar: 'images/avatar5.png',
            username: 'Pro_Git',
            fullName: 'PROGIT',
            content: tweet,
            date: moment().format('DD/MM/YYYY'), 
          },
          ...tweets,
        ]
      });
    };

    remove = index => {
        const { tweets } = this.state;
        this.setState({tweets: tweets.filter((tweet, i) => i !== index)});
    };
    render(){

        const { tweets } = this.state;
        const { params } = this.props;

        return ( 
            <div className='homepage'>
             <h1>{params.username}</h1>
             <TweetBox publish = {this.publish}/>
                <div className='tweet'>
                    {tweets.map((tweet, index) => tweet.username === params.username && (
                        <Tweet
                            key={index}
                            index={index}
                            remove={this.remove}
                             {...tweet}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default ByUserName;