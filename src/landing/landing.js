/**
 * Created by dream on 5/8/2017 AD.
 */
import React from 'react';

import './landing.css';
import Section1 from './component/section1';
import Section2 from './component/section2';
import Section3 from './component/section3';
import Navigation from './component/navigation';




export default class Landing extends React.Component {

    render() {
        const style = {
            colorBG: {
                backgroundColor: 'darkcyan',
            },
            section1:{
                backgroundColor: 'darkcyan',
                height:"100%"
            },
            section2:{
                height:"100%",
                backgroundColor: 'darkcyan'
            },
            section3:{
                height:"100%",
                backgroundColor: 'darkcyan'
            },
            section4:{
                height:"100%",
                backgroundColor: 'darkcyan'
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
                    <section id="section1" style={style.section1}>
                        <iframe className="videoBlockchain" frameBorder={0} src="https://www.youtube.com/embed/BdN_-EyB224"/>
                        <Section1/>
                        {/*<Section1/>*/}
                    </section>
                    {/*Section 1*/}

                    {/*Section2*/}
                    <section id="section2" style={style.section2}>
                        <Section2/>
                    </section>
                    {/*Section2*/}

                    {/*Section3*/}
                    <section id="section3" style={style.section3}>
                        <Section3/>
                    </section>
                    {/*Section3*/}

                    {/*Section4*/}
                    <section id="section4" style={style.section4}>

                    </section>
                    {/*Section4*/}
                </div>
            </div>

        );
    }

};
