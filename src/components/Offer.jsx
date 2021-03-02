import React from "react";
import { Row, Col } from 'antd';
import Characteristics from './Characteristics'
import Prices from './Prices'

export default function Offer({dataProduct}) { 

    return(
        
        <div>
            {
                dataProduct && (
                    <div> 
                        <Row className="mt-4">
                            <Col span={6} offset={6}>
                                {dataProduct.name}
                            </Col>
                            <Col span={6} offset={6}>
                                {dataProduct.id}
                            </Col>                          
                        </Row>
                        <hr/>                        
                        <Row>
                            <Col span={12}>
                                <Prices prices={dataProduct.productOfferingPrices} />
                            </Col>
                            <Col span={12}>
                                <Characteristics characteristics={dataProduct.characteristics} />
                            </Col>
                        </Row>
                                                
                    </div>
                )
            }        
        </div>
        
    )
}
