import React from 'react';
import { Card } from 'react-bootstrap';
import "./About.css";

const About = () => {
    return (
        <div className=" my-5">
            <Card className="bg-dark text-white">
                <Card.Img src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/09/page-banner.png" alt="Card image" height="350px" />
                <Card.ImgOverlay>
                    <Card.Title>Contact Us</Card.Title>
                    <Card.Text>
                        Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo non habent claritatem insitamconsequat duis autem
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <div className="my-5">
                <div className="row">
                    <div className="col-12 col-lg-4 my-3">
                        <h5>
                            New York
                        </h5>
                        <p>198 West 21th Street,<br />
                            Suite 721
                            New York NY 10010
                        </p>
                        <p>
                            mediclinic@qodeinteractive.com
                        </p>
                        <p>Phone: +(880) 101 8990 566</p>
                    </div>
                    <div className="col-12 col-lg-4 my-3">
                        <h5>
                            London
                        </h5>
                        <p>Green Hill Road,<br /> Suite 195
                            London 72847
                        </p>
                        <p>
                            mediclinic@qodeinteractive.com
                        </p>
                        <p>Phone: +(880) 101 8990 568</p>
                    </div>
                    <div className="col-12 col-lg-4 my-3">
                        <h5>
                            Amsterdam
                        </h5>
                        <p>1314 Fairmont Avenue, Suite 54 <br />
                            Amsterdam 64723
                        </p>
                        <p>
                            mediclinic@qodeinteractive.com
                        </p>
                        <p>Phone: +(880) 101 8990 567</p>
                    </div>
                    <div className="col-12 col-lg-4 my-3">
                        <h5>San Francisco</h5>
                        <p>
                            2566 Jim Rosa Lane, Suite 139 <br />
                            San Francisco 94108
                        </p>
                        <p>
                            mediclinic@qodeinteractive.com
                        </p>
                        <p>Phone: +(880) 101 8990 569</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;