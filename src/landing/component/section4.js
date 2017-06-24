/**
 * Created by dream on 5/10/2017 AD.
 */
import React from 'react';
import {Card, CardBlock, CardHeader, CardText, CardTitle} from "reactstrap";
import FontAwesome from 'react-fontawesome';

class Section4 extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader>About Me</CardHeader>
                <CardBlock>
                    <div className="d-inline-block" style={{width: "50%"}}>
                        <img src="/img/profile.jpg" width={"350px"} />
                    </div>
                    <div className="d-inline-block">
                        <CardTitle>
                            <FontAwesome name="rocket"/>
                            <span>  Chindanai Wasanachin (Dream)
                        </span>

                        </CardTitle>
                            <div>
                                <FontAwesome name="mobile" tag="i" size="2x"/>
                                <span>  Mobile : 0830071767  </span>
                            </div>
                            <div>
                                <FontAwesome name="envelope" tag="i" style={{fontSize: "20px"}}/>
                                <span><a href="mailto:dn.chindanai@gmail.com"> Email: dn.chindanai@gmail.com</a></span>
                            </div>
                            <div>
                                <FontAwesome name="puzzle-piece" tag="i" style={{fontSize: "20px"}}/>
                                <span> Hobby</span>
                                <ul>
                                    <li>
                                        <FontAwesome name="code" tag="i" style={{fontSize: "20px"}}/>
                                        <span> Coding</span>
                                    </li>
                                    <li>
                                        <FontAwesome name="futbol-o" tag="i" style={{fontSize: "20px"}}/>
                                        <span> Sport</span>
                                    </li>
                                    <li>
                                        <FontAwesome name="film" tag="i" style={{fontSize: "20px"}}/>
                                        <span> Movie</span>
                                    </li>
                                    <li>
                                        <FontAwesome name="gamepad" tag="i" style={{fontSize: "20px"}}/>
                                        <span> Games</span>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </CardBlock>
            </Card>
        );
    }
}
;

export default Section4;