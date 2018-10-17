import React, { Component } from 'react';
import './Home.css';

import moment from 'moment';
import TweetBox from '../../components/TweetBox/TweetBox';
import Tweet from '../../components/Tweetes/Tweet';
import { tweets } from '../../constants';



class Home extends Component {
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
        return ( 
            <div className='homepage'>
                <div className='tweet'>
                    <TweetBox publish = {this.publish}/>
                    {tweets.map((tweet, index) => (
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

export default Home;

