import React from 'react';
import { Container } from 'react-bootstrap';
import './Stuff.css'

const Stuff = () => {
    return (
        <div className="pt-5">
            <Container>
                <h1 className="py-3" style={{ fontSize: "4rem", textAlign: 'center' }}>Our Stuff</h1>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="text-start">
                            <h4>Dr. Stephanie Wosniack</h4>
                            <h1>
                                OUR TEAM
                            </h1>
                            <p>
                                Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Woshiack found her calling to help others get well.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="mx-auto w-100">
                            <img className="w-75 mx-auto" src="http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/doktorka.png" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Stuff;