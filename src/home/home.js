/**
 * Created by dream on 5/8/2017 AD.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from "reactstrap";
import TypeOut from 'react-typeout';
import "./home.css";


export default class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            renderType: false,
            text: ""
        };
        this.onHeaderTyped = this.onHeaderTyped.bind(this);
    }

    onHeaderTyped() {
        this.setState({
            renderType: true
        });
    }

    render() {
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
        let words = ["World", 'Blockchain', 'Bitcoin'];
        return (
            <div className="container-fluid" style={style.colorBG}>
                <div style={style.imageBG}>
                    <div>
                        <div style={{marginLeft: '28%', height: '100px'}}>
                            <div className="divType">
                                <span style={{color: 'white', fontSize: '80px'}}>Hello </span>
                                <TypeOut words={words} className='react-typing'/>
                            </div>
                        </div>
                        <div style={{marginTop: "33%", textAlign: 'center'}}>
                            <Link to={'landing'}>
                                <Button color="primary" style={{width: '20%'}}>Enter Site</Button>
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

