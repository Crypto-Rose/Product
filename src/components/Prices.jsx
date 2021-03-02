import React, {Fragment, useEffect} from 'react'
import { Row, Col } from 'antd';
const Prices = ({prices}) => {
    return (
        <Fragment>
            <h3>Precios</h3>
            {
                prices && (
                    prices.map((price,key)=>(
                        <Row kay={key}>
                            <Col span={12}> {price.versions[0].name}</Col>
                            <Col span={12}>{price.versions[0].price.amount}</Col>
                        </Row>
                    ))
                )
            }
        </Fragment>
    )
}

export default Prices