/**
 * Created by dream on 5/10/2017 AD.
 */
import React from 'react';
import {Card, CardBlock, CardHeader, CardText, CardTitle} from "reactstrap";
import FontAwesome from 'react-fontawesome';

const Section4 = () => {
    return (
        <Card>
            <CardHeader>About Me</CardHeader>
            <CardBlock>
                <div className="d-inline-block" style={{width: "50%"}}>
                    <img src="/img/profile.jpg" width={"350px"} alt=""/>
                </div>
                <div className="d-inline-block">
                    <CardTitle>
                        <FontAwesome  name="rocket"/>
                        <span>  Chindanai Wasanachin (Dream)
                        </span>

                    </CardTitle>
                    <CardText>
                        <div>
                            <FontAwesome   name="mobile" tag="i"  size="2x"/>
                            <span>  Mobile : 0830071767  </span>
                        </div>
                        <div>
                            <FontAwesome name="envelope" tag="i" />
                            <span>  Email: dn.chindanai@gmail.com</span>
                        </div>

                    </CardText>
                </div>
            </CardBlock>
        </Card>
    );
};

export default Section4;