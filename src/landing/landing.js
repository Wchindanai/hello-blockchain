/**
 * Created by dream on 5/8/2017 AD.
 */
import React from 'react';

import './landing.css';
import Section1 from './component/section1';
import Section2 from './component/section2';
import Section3 from './component/section3';
import MyIdea from './component/myidea';
import Navigation from './component/navigation';
import Section4 from "./component/section4";
import ScrollEffect from 'react-scroll-effects';

export default class Landing extends React.Component {
    render() {
        const style = {
            colorBG: {
                backgroundColor: 'darkcyan',
            },
            section:{
                backgroundColor: 'darkcyan',
                height: "100%"
            }
        };
        return (
            <div>
                {/*NavBar*/}
                <div>
                    <Navigation/>
                </div>
                {/*NavBar*/}

                {/*Container*/}
                <div className="">


                    {/*Section 1*/}
                    <section id="section1" style={style.section}>
                            <iframe className="videoBlockchain" frameBorder={0}
                                    src="https://www.youtube.com/embed/BdN_-EyB224"/>
                            <Section1/>
                        {/*<Section1/>*/}
                    </section>
                    {/*Section 1*/}

                    {/*Section2*/}
                    <section id="section2" style={style.section}>
                        <ScrollEffect animate="fadeInUp" duration={1}>
                            <Section2/>
                        </ScrollEffect>
                    </section>
                    {/*Section2*/}

                    {/*Section3*/}
                    <section id="section3" style={style.section} >
                        <ScrollEffect animate="fadeInUp" duration={1}>
                        <Section3/>
                        </ScrollEffect>
                    </section>
                    {/*Section3*/}

                    {/*MyIdea*/}
                    <section id="myIdea" style={style.section}>
                        <ScrollEffect animate="fadeInUp">
                            <MyIdea/>
                        </ScrollEffect>
                    </section>
                    {/*MyIdea*/}



                    {/*Section4*/}
                    <section id="section4" style={style.section}>
                        <ScrollEffect animate="fadeInUp" duration={2}>
                        <Section4/>
                        </ScrollEffect>
                    </section>
                    {/*Section4*/}
                </div>
            </div>

        );
    }

};
