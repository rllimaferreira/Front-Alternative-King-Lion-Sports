import React from "react";
import 'react-bootstrap/';

export default function TestCardProd() {


    return(<>

    <section className="section-products">
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-md-8 col-lg-6">
                    <div className="header">
                        <h3>Featured Product</h3>
						<h2>Popular Products</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div id="product-1" className="single-product">
                        <div className="part-1">
                            <ul>
                                <li><a href="#">{element.id}</a></li>
                                <li><a href="#">{element.title}</a></li>
                                <li><a href="#">{element.description}</a></li>
                                <li><a href="#">{element.brand}</a></li>
                                <li><a href="#">{element.image}</a></li>
                                <li><a href="#">{element.price}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>)
}