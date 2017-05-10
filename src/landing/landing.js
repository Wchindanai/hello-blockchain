/**
 * Created by dream on 5/8/2017 AD.
 */
import React from 'react';

import './landing.css';
import Section1 from './component/section1';
import Section2 from './component/section2';
import Section3 from './component/section3';
import Navigation from './component/navigation';
import Section4 from "./component/section4";
import ScrollEffect from 'react-scroll-effects';

export default class Landing extends React.Component {
    constructor() {
        super();
        this.state = {
            scrollTop: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const doc = document.documentElement;
        const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        this.setState({scrollTop: top});
    }

    render() {
        const style = {
            colorBG: {
                backgroundColor: 'darkcyan',
            },
            section1: {
                backgroundColor: 'darkcyan',
                height: "100%"
            },
            section2: {
                height: "100%",
                backgroundColor: 'darkcyan'
            },
            section3: {
                height: "100%",
                backgroundColor: 'darkcyan'
            },
            section4: {
                height: "100vh",
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
                            <iframe className="videoBlockchain" frameBorder={0}
                                    src="https://www.youtube.com/embed/BdN_-EyB224"/>
                            <Section1/>
                        {/*<Section1/>*/}
                    </section>
                    {/*Section 1*/}

                    {/*Section2*/}
                    <section id="section2" style={style.section2}>
                        <ScrollEffect animate="fadeInUp">
                            <Section2/>
                        </ScrollEffect>
                    </section>
                    {/*Section2*/}

                    {/*Section3*/}
                    <section id="section3" style={style.section3}>
                        <ScrollEffect animate="fadeInUp">
                        <Section3/>
                        </ScrollEffect>
                    </section>
                    {/*Section3*/}

                    {/*Section4*/}
                    <section id="section4" style={style.section4}>
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
