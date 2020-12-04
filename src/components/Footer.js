import React from "react";
// import styled from "styled-components";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const FooterPage = () => {
  return (
          //  <div>
    <MDBFooter color="grey darken-4" className="font-small pt-4 mt-4 w-auto p-3">
      <MDBContainer fluid className="text-center text-md-left" style = {{padding:"16px", fontFamily: "Century Gothic"}}>
        <MDBRow className = "d-flex justify-content-around">
          <MDBCol md="3" className="text-center">
            <h6 className="title">About Us</h6> <br />
            <p style = {{fontSize: "12px", letterSpacing: "1.5px", lineHeight: "1.5"}}>
            DAFAH. A charity organization aimed towards creating a
            direct connection between the donor and the organization
            whereas anyone can open the website, create an account and simply
            submit a form with the item that they want to donate. We will then
            contact them to pick up the item to take it to its new home. 
            </p>
          </MDBCol>
          <MDBCol md="3" className="text-center">
            <h6 className="title">Contact Us</h6> <br />
              <p style = {{fontSize: "12px", letterSpacing: "1.5px", lineHeight: "1.5"}}>ADDRESS <br />
              Al- Sha'ab St. 29, Al-Jandaweel, Amman, Jordan <br />
              PHONE # <br />
              +962 7 980 7680<br />
              +962 7 800 7680<br />
              E-MAIL<br />
              dafah.organization@dafah.com </p>
          </MDBCol>
          <div></div>
          <MDBCol md="3" className="text-center" style = {{lineHeight: "1.6"}}>
            <h6 className="title">Contributors</h6> <br />
            <div>
            <img src = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg" 
            alt = "United Nations"
            width="55" height="50"
            className = "rounded-circle"/> 
            <br />
            <a href="https://www.un.org/en/" target="_blank" style = {{fontSize: "12px", letterSpacing: "1.5px"}}>United Nations</a>
            <br /> <br />
            <img src = "https://1000logos.net/wp-content/uploads/2017/06/emblem-UNICEF-500x386.jpg" 
            alt = "UNICEF"
            width="55" height="50"
            className = "rounded-circle"
            /> 
            <br/>
            <a href="https://www.unicef.org/" target="_blank" style = {{fontSize: "12px", letterSpacing: "1.5px"}}>UNHCR</a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} DAFAH - All Rights Reserved
        </MDBContainer>
      </div>
    </MDBFooter>
    // </div>
  );
}
export default FooterPage;