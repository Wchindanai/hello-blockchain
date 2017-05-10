/**
 * Created by dream on 5/10/2017 AD.
 */
import React from 'react';
import {Card, CardBlock, CardHeader, CardText, CardTitle} from "reactstrap";

const Section2 = () => {
    const text = "การทำงานของ Blockchain นั้น เป็นรูปแบบการเก็บข้อมูลรูปแบบหนึ่ง คล้ายๆกับระบบฐานข้อมูล" +
        "โดยจะเก็บข้อมูลนั้นลงเป็นบล็อคๆต่อกันเรื่อยๆ" +
        "โดยข้อมูลจะสามารถแชร์ไปยังทุกๆ คนได้ " +
        "โดยที่ในข้อมูลนั้นระบุว่าใครที่เป็นเจ้าของและมีสิทธิในข้อมูลนั้นจริงๆ " +
        "เมื่อบล็อกของข้อมูลได้ถูกบันทึกไว้ใน Blockchain แล้ว  มันจะเป็นเรื่องยากมากๆ ที่จะเข้าไปเปลี่ยนแปลง " +
        "เวลาที่มีใครต้องการจะเพิ่มข้อมูล ทุกๆ คนในเครือข่ายซึ่งล้วนแต่มีสำเนาของ Blockchain สามารถรัน Algorithm " +
        "เพื่อตรวจสอบ Transaction โดย Transaction ใหม่นี้จะได้รับอนุญาต ต่อเมื่อในเครือข่ายส่วนใหญ่เห็นด้วยว่ามันถูกต้อง";
    return (
        <Card>
            <CardHeader>How Blockchain do ?</CardHeader>
            <CardBlock>
                <CardTitle className="text-center cardTitle">Blockchain ทำงานอย่างไร</CardTitle>
                <CardText className="text-center p-3 fontKanit">
                    {text}
                    <img src="http://thaipublica.org/wp-content/uploads/2016/07/blockchain.png" style={{marginTop:"10px"}} alt=""/>
                </CardText>
            </CardBlock>
        </Card>
    );
}
export default Section2;