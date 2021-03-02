import React, {Fragment} from 'react'
import { Row, Col } from 'antd';

const Characteristics = ({characteristics}) => {
    return (
        <Fragment>
            <h3>Caracteristicas</h3>
            {                
                characteristics && (
                    characteristics.map((feature, key)=>(
                        <Row key={key}>
                            
                            <Col span={12}> {feature.versions[0].name}</Col>
                            <Col span={12}> {feature.versions[0].displayValue ? feature.versions[0].displayValue : null}</Col>
                        </Row>
                    ))
                )
            }
        </Fragment>
    )
}

export default Characteristics