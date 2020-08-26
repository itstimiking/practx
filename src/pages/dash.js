import Layout from '../Layout';
import cn from 'classnames';

import {Container, Row, Col, Nav, Image} from 'react-bootstrap';


import Sidebar  from '../components/Sidebar';
import Chathead  from '../components/Chathead';
import Chatblob from '../components/Chatblob';



export default function Dash() {
  return (

    <Layout>

        <Row>

          <Sidebar />
          

          <Col sm={11}>
            <Container fluid>

              <Row>
    
                  <Col sm={3}>

                    <Chathead />
                    <Chathead />
                    <Chathead />
                    <Chathead selected="yes"/>
                    <Chathead />
                    <Chathead />
                    <Chathead />
                 
                  </Col>

                  <Col sm={6}>
                    <Chatblob />
                    <Chatblob />
                    <Chatblob />
                  </Col>

                  <Col sm={3}> More Cols </Col>

              </Row> 

            </Container>

          </Col>
        </Row>

    </Layout>

  )
}