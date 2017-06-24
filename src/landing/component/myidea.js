/**
 * Created by dream on 5/10/2017 AD.
 */

import React from 'react';
import '../landing.css';
import {
    Card, CardText, CardBlock,
    CardTitle, CardHeader
} from 'reactstrap';

const MyIdea = () =>{
    const myidea = "เราสามารถนำ Blockchain มาประยุกต์กับการซื้อขายรถ Classic ในประเทศไทย" +
        "เพราะทุกวันนี้การซื้อรถประเภทนี้อาจจะมีการปลอมแปลงตัวรถ เครื่องยนต์ และเลขทะเทียบ เราสามารถนำเทคโนโลยีนี้" +
        "มาป้องกันการซื้อขายรถของปลอม เพราะว่า Blockchain นั้นสามารถเก็บข้อมูลย้อนหลังในอดีตได้ว่า รถนี้ถูกนำเข้ามาในปีอะไร" +
        "นำเข้ามาโดนบริษัทอะไร หมายเลขถังคือหมายเลขอะไร และใครเป็นเจ้าของก่อนหน้านี้ ดังนั้นการใช้เทคโนโลยีนี้ จึงสามารถช่วยป้องกันการหลอกขายรถประเภทนี้ได้เพราะ " +
        "รถประเภทนี้ มีราคาที่สูง และคนไทยเรื่มนิยมเล่นรถประเภทนี้มากขึ้นเรื่อยๆ";
    return (
        <Card>
            <CardHeader>My Idea</CardHeader>
            <CardBlock>
                <CardTitle className="text-center cardTitle">My Idea</CardTitle>
                <CardText className="text-center p-3 fontKanit">
                    {myidea}
                </CardText>
            </CardBlock>
        </Card>
    );
};

export default MyIdea;