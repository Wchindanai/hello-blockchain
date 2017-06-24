/**
 * Created by dream on 5/8/2017 AD.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from "reactstrap";
import  Spinner from 'react-spinkit';
import TypeWriter from 'react-typewriter';
import "./home.css";


export default class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            renderType: false,
            loaded: false,
            typing: 1,
            wordIndex: 0
        };
        this.onTyed = this.onTyed.bind(this);
    }

    onTyed() {
        const index = this.state.wordIndex;
        if (this.state.typing === 1) {
            this.setState({typing: -1});
        }
        else {
            if (this.state.wordIndex === 3) {
                this.setState({typing: 1,wordIndex: 0});
            }
            else {
                this.setState({typing: 1, wordIndex: index + 1});
            }
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({loaded: true}),500);
    }

    componentWillUnmount() {
        this.setState({typing: false});
    }

    render() {
        if (this.state.loaded === false) {
            return (
                <div style={{marginTop: '25%', marginLeft: '50%'}}>
                    <Spinner spinnerName='double-bounce'/>
                </div>
            );
        }
        const style = {
            colorBG: {
                backgroundColor: 'black',
                height: '100vh'
            },
            imageBG: {
                backgroundImage: 'url(\'/img/home/bg.png\')',
                height: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center'

            }
        };
        let words = ["World  ", 'Blockchain  ', 'Bitcoin  '];
        return (
            <div className="container-fluid" style={style.colorBG}>
                <div style={style.imageBG}>
                    <div>
                        <div style={{marginLeft: '28%', height: '100px'}}>
                            <div className="divType">
                                <span style={{color: 'white', fontSize: '80px'}}>Hello </span>
                                <TypeWriter typing={this.state.typing} onTypingEnd={this.onTyed} maxDelay={200}
                                            minDelay={50}>
                                    <span className="react-typing">{words[this.state.wordIndex]}</span>
                                </TypeWriter>
                            </div>
                        </div>
                        <div style={{marginTop: "70vh", textAlign: 'center'}}>
                            <Link to='/landing'>
                                <Button color="primary" style={{width: '20%'}}>Enter Site</Button>
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

