import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <p href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </p>
          <p href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </p>
          <p href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </p>
          <p href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </p>
          <p href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </p>
          <p href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </p>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus saepe ex minus totam excepturi esse perspiciatis iure
                quibusdam explicabo veniam, ut ad inventore hic reprehenderit
                ipsa, quae rerum aliquid.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <p href="#!" className="text-reset">
                  Fruit & Vegetables
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Starchy Food
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Dairy
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Fat
                </p>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <p href="#!" className="text-reset">
                  Pricing
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Settings
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Orders
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Help
                </p>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <p className="text-reset fw-bold text-decoration-none">
          Fit Foodie Finds
        </p>
      </div>
    </MDBFooter>
  );
};

export default Footer;
