import React, { useState } from "react";
import { Select,Row, Col,Layout, Menu, Breadcrumb } from 'antd';
import offert from '../components/ofertas.json'
import Offer from '../components/Offer'
const { Option } = Select;
const { Header, Content, Footer } = Layout;

export default function Home() {  
    const [dataProduct, setDataProduct] = useState(null)

    const onChange = (e) => { 
        setDataProduct(offert[e].versions[0])
    }
    return(
        <div>
            <Layout className="layout">
                <Header>    
                    <Select
                        showSearch
                        style={{ width: 400 }}
                        onChange={onChange}
                        placeholder="Select a product"
                        optionFilterProp="children"                       
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >   
                        {
                            offert.map((data,key)=>
                                <Option                          
                                    key={key}                          
                                >
                                    {data.versions[0].name}
                                </Option>
                            ) 
                        }                
                    </Select>                             
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Offer dataProduct={dataProduct}/>   
                </Content>
                <Footer style={{ textAlign: 'center' }}>Rose ©2021 Created by Rosa</Footer>
            </Layout>                       
        </div>
        
    )
}
