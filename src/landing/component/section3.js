/**
 * Created by dream on 5/10/2017 AD.
 */
import React from 'react';
import {Card, CardBlock, CardHeader, CardText, CardTitle} from "reactstrap";

const Section3 = () => {
    const text = "เราจะได้ยินคำว่า Blockchain เกี่ยวกับการเงินเยอะมาก เพราะว่า Blockchain นั้น" +
        "เป็นระบบฐานข้อมูลที่มีความน่าเชื่อถือสูงจึงสามารถไว้ใจได้เป็นอย่างมาก งานที่ต้องใช้ความปลอดภัยสูงอย่างเช่นการเงินนั้น" +
        "เลยเลือกใช้ Blockchain กันมากขึ้นเรื่อยๆ แต่จริงๆแล้ว Blockchain นั้นจริงๆแล้ว สามารถประยุกต์ใช้" +
        "กับงานอะไรก็ เพราะขนาดระบบการเงินยังเลือกที่จะใช้ ระบบอื่นๆก็สามารถนำไปประยุกต์ใช้ได้เช่นกัน" +
        "อย่างเช่น ประเทศอังกฤษนั้นใช้ Blockchain ในการตรวจจับไวน์ปลอม ในการใช้ระบบบล็อกเชนที่ว่านี้จะช่วยบอกวันที่ผลิตที่แม่นยำ " +
        "รวมไปถึงข้อมูลของผู้ถือครองไวน์คนก่อนหน้านี้ที่เก็บไว้แบบไม่สามารถเปลี่ยนแปลงแก้ไขได้ เพราะเทคโนโลยีบล็อกเชนจะช่วยเก็บข้อมูลในอดีตแบบละ" +
        "เอียดทุกๆข้อมูลไม่มีตกหล่น โดยผู้บริโภคสามารถที่จะตรวจสอบขั้นตอนการส่งไวน์ทั้งหมดได้ ตั้งแต่จากผู้ผลิตไวน์สู่ผู้ขาย และผู้ขายสู่ผู้บริโภค";

    return (
        <Card>
            <CardHeader>What Blockchain can do?</CardHeader>
            <CardBlock>
                <CardTitle className="text-center cardTitle">Blockchain สามารถนำไปใช้อะไรได้บ้าง</CardTitle>
                <CardText className="text-center p-3 fontKanit">
                    {text}
                    <div>
                        <img src="http://www.playersmoney.com/wp-content/uploads/2016/02/blockchain.jpg"
                             style={{marginTop: "10px"}} alt=""/>
                    </div>
                </CardText>
            </CardBlock>
        </Card>
    );
};
export default Section3;
