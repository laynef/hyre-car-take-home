import * as React from 'react';
import { Col } from 'reactstrap';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Tile: React.FC<Props> = ({ children, ...rest }) => (
    <Col xds="12" sm="6" md="4" {...rest}>
        {children}
    </Col>
);

export default Tile;
