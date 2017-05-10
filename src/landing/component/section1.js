/**
 * Created by dream on 5/10/2017 AD.
 */
import React from 'react';
import '../landing.css';
import {
    Card, CardText, CardBlock,
    CardTitle, CardHeader
} from 'reactstrap';
const Section1 = () => {
    const text = " Blockchain คือ เทคโนโลยีที่มีความปลอดภัยสูง มีความนาเชื่อถืออย่างมาก โดยไม่จำเป็นต้ออาศัยคนกลาง" +
        "เพราะโดยปกติแล้วการใช้งานทางด้านการเงินหรือระบบอื่นจะต้องอาศัยคนกลางเป็นตัวดำเนินการ ซึ้ง ถ้าเกิดคนกลางนั้น" +
        "เป็นคนไม่ดีเราก็จะได้รับความเสี่ยงนั้น แต่Blockchain นั้น ไม่จำเป็นต้องอาศัยคนกลางในการทำงาน ทีนี้การใช้งาน" +
        "ทางด้านธุรกรรมออนไลน์ใดๆ จะสะดวก ประหยัด และรวดเร็วมากขึ้น";
    return (
            <Card>
                <CardHeader>What is Blockchain ?</CardHeader>
                <CardBlock>
                    <CardTitle className="text-center cardTitle">Blockchain คืออะไร ?</CardTitle>
                    <CardText className="text-center p-3 fontKanit">
                        {text}
                        <img src="https://techsauce.co/wp-content/uploads/2016/04/blockchain.png"  alt=""/>
                    </CardText>
                </CardBlock>
            </Card>
    );
};
export default Section1;