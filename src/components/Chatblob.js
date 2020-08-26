import {Container, Row, Col, Nav, Image, Alert} from 'react-bootstrap';
import cn from "classname";

import styles from './chatblob.module.scss';


const Chatblob = (props) => (
  <div >
    <Row className={styles.rowheight}>
       <Col xm={12}>
           <Row >
               <Col sm={10}>
                  <Row>
                    <Col xs={8}>
                      <Row>
                         <Col xm={12}><span>Zencity</span></Col>
                      </Row>
                   
                    </Col>

                  </Row>

                  <Row>
                      <Alert variant="success">
                         Chart message that could be very long and very all that ja
                      </Alert>
                  </Row>

               </Col>

               <Col sm={2} className={styles.toptime} >

                    <Image src="/images/timicircle.jpg" roundedCircle/>

               </Col>
           </Row>
       </Col>
    </Row>
  </div>
);


export default Chatblob;
