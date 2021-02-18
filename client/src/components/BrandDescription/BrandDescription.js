import React from 'react';

function BrandDescription() {
    return (
        <div className="p-0 m-0 container-fluid d-flex justify-content-center">
            <div className="p-0 m-0 row">
                <div className="cardBackground card col-md-9 col-xs-12">
                    <div className="card-body">
                        <h5 className="card-title">About Valet</h5>
                        <p className="card-text">
                            Have you ever driven to the beach on a sunny day? How about through the city on a busy night?
                            Or maybe you drive to commute to your work at small business?
                            The worst part of all this?
                            <br />
                            Finding a parking spot.
                            <br />
                            That’s where Valet comes in. Valet lets anyone share their unused car spaces for a small fee.
                            <br />
                            Let us find the perfect spot for you.

                        </p>
                    </div>
                </div>

                <div className="text-center cardBackground card col-md-3 col-xs-12">
                    <div className="card-body">
                        <h5 className="card-title">Follow Us!</h5>
                        <a href="/">
                            <span className="fa-stack facebookLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </span>
                        </a>
                        <a href="/">
                            <span className="fa-stack twitterLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </span>
                        </a>
                        <a href="/">
                            <span className="fa-stack instagramLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </span>
                        </a>
                        <a href="/">
                            <span className="fa-stack linkedinLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </span>
                        </a>
                        <a href="/">
                            <span className="fa-stack googleLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-google fa-stack-1x"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandDescription;
