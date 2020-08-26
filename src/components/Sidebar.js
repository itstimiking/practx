import {Container, Row, Col, Nav, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './sidebar.module.scss';

const Sidebar = () => {
    return (
        <Col sm={1} className={styles.colheight}>

            <Nav className={styles.icontext}>
              <p>PractX</p>
            </Nav>

            <Nav fill className="flex-column" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="">
                  <FontAwesomeIcon icon="bullseye" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <FontAwesomeIcon icon="users" />
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link>
                  <FontAwesomeIcon icon="calendar-alt" />
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link>
                  <FontAwesomeIcon icon="comment" />
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link>
                  <FontAwesomeIcon icon="clipboard" />
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link>
                  <FontAwesomeIcon icon="rocket" transform={{rotate: -45}} />
                </Nav.Link>
              </Nav.Item>

            </Nav>

            <div className={styles.smallimage}>
              <Image src="/images/timicircle.jpg" roundedCircle />
            </div>

          </Col>
    )
}

export default Sidebar;