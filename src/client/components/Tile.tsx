import * as React from 'react';
import { Col } from 'reactstrap';

interface Props {
    children: React.ReactNode;
}

const Tile: React.FC<Props> = ({ children }) => (
    <Col xds="12" sm="6" md="4">
        {children}
    </Col>
);

export default Tile;
