/**
 * Created by dream on 5/10/2017 AD.
 */
import React from 'react';
import {Card, CardBlock, CardHeader, CardText, CardTitle} from "reactstrap";

const Section3 = () => {
    const text = "เนื่องจาก blockchain นั้นคล้ายๆกับระบบฐานข้อมูลรูปแบบหนึ่งการทำมาประยุกใช้สามารถทำได้หลายหลาย" +
        "";
  return(
      <Card>
          <CardHeader>What Blockchain can do?</CardHeader>
          <CardBlock>
              <CardTitle className="text-center cardTitle">Blockchain สามารถนำไปใช้อะไรได้บ้าง</CardTitle>
              <CardText className="text-center p-3 fontKanit">
                  {text}
              </CardText>
          </CardBlock>
      </Card>
  );
};
export default Section3;
