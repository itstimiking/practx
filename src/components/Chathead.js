import {Container, Row, Col, Nav, Image, Alert} from 'react-bootstrap';
import cn from "classname";

import styles from './chathead.module.scss';


const Chathead = (props) => (
  <div className={props.selected === "yes"? styles.profileboxselected: styles.profilebox}>
    <Row className={styles.rowheight}>
       <Col xm={12}>
           <Row >
               <Col sm={10}>
                  <Row>

                    <Col xs={3} className={styles.profileimage}>
                      <Image src="/images/timicircle.jpg" rounded />
                    </Col>

                    <Col xs={8}>

                      <Row >
                        <Col xm={12}><h4>Timi Ambaye </h4></Col>
                      </Row>

                      <Row>
                         <Col xm={12}><span>Zencity</span></Col>
                      </Row>
                   
                    </Col>

                  </Row>

                  <Row>
                  <Alert variant="success">
                          profile update or any message that should be displayed
                      </Alert>
                  </Row>

               </Col>

               <Col sm={2} className={styles.toptime} >

                    <span>13:00</span>
                    <Image src="/images/timicircle.jpg" roundedCircle/>

               </Col>
           </Row>
       </Col>
    </Row>
  </div>
);


export default Chathead;
