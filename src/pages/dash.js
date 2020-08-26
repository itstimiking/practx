import Layout from '../Layout';
import styles from './dash.module.scss';

import cn from 'classnames';

import {Container, Row, Col, Nav, Image} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function Dash() {
  return (

    <Layout>

        <Container fluid>

            <Row>
                
                <Col sm={3}>

                  The dash page
                             
                </Col>
                <Col sm={6}> The dash page </Col>
                <Col sm={2}> </Col>
            </Row>  

        </Container>
    </Layout>

  )
}