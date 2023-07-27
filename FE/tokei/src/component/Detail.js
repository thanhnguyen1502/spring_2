import React, {useEffect, useState} from 'react';
import {findById} from "../service/ProductService";
import {useParams} from "react-router";


function Detail() {
    const [data, setData] = useState(null);
    let param = useParams();
    useEffect(() => {
        const getId = async () => {
            let rs = await findById(param.idProduct);
            setData(rs)
        }
        getId();
    }, [param.idProduct]);
    console.log(data)
    return (
        <>
            <main>
                <div className="">
                    <div className="container">
                        {data && data.map((products, index) => (

                        <div className="row justify-content-center" key={index}>
                                <div className="col-lg-12" >
                                    <div className="product_img_slide ">
                                        <div className="single_product_img">
                                            <img
                                                src={products.img}
                                                alt="#"
                                                className="img-fluid"
                                                style={{margin:"0 auto", display:"block"}}
                                            />
                                        </div>
                                    </div>
                                </div>

                            <div className="col-lg-8">
                                <div className="single_product_text text-center">
                                    <h3>{products.name}<br/>
                                        rebound pillows
                                    </h3>
                                    <p>
                                        Seamlessly empower fully researched growth strategies and
                                        interoperable internal or “organic” sources. Credibly innovate
                                        granular internal or “organic” sources whereas high standards in
                                        web-readiness. Credibly innovate granular internal or organic
                                        sources whereas high standards in web-readiness. Energistically
                                        scale future-proof core competencies vis-a-vis impactful
                                        experiences. Dramatically synthesize integrated schemas. with
                                        optimal networks.
                                    </p>
                                    <div className="card_area">
                                        <div className="product_count_area">
                                            <p>Quantity</p>
                                            <div className="product_count d-inline-block">
                                                    <span className="product_count_item inumber-decrement"> {" "}<i
                                                        className="ti-minus"/> </span>
                                                <input
                                                    className="product_count_item input-number"
                                                    type="text"
                                                    defaultValue={1}
                                                    min={0}
                                                    max={10}
                                                /> <span
                                                className="product_count_item number-increment"> {" "} </span></div>
                                            <p>$5</p>
                                        </div>
                                        <div className="add_to_cart">
                                            <a href="#" className="btn_3">
                                                add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>

                </div>
                {/*================End Single Product Area =================*/}
                {/* subscribe part here */}
            </main>
        </>
    );
}

export default Detail;