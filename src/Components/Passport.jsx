import React, { useState } from "react";
import passport from "../pass.jpg";
import Form from "./Form";
import { toPng } from "html-to-image";

const Passport = () => {
  const [data, setdata] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fathersName: "",
    mothersName: "",
    permanentAddress: "",
    emergencyContact: "",
    relationship: "",
    emergencyContactAddress: "",
    telephoneNo: "",
    passportNo: "",
    nid: "",
    year: "",
    month: "",
    day: "",
    dob: "",
    deliveryDate: "",
    expiryDate: "",
    image: null,
  });

  const Data = (datas) => {
    setdata(datas);
  };

  const takeScreenshot = () => {
    const node = document.getElementById("passport");

    if (!node || !data.image) {
      console.error("Form data or image is missing.");
      return;
    }

    setTimeout(() => {
      toPng(node, { cacheBust: true, quality: 1.0 })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `passport.png`;
          link.click();
        })
        .catch((error) => {
          console.error("Error taking screenshot:", error);
        });
    }, 500); // Ensure image is rendered before screenshot
  };

  return (
    <div className="container">
      <Form data={Data} />
      <button onClick={takeScreenshot}>Save Passport</button>
      <div className="passport" id="passport">
        <p className="full-name">{`${data.firstName} ${data.middleName} ${data.lastName}`}</p>
        <p className="fathers-name">{data.fathersName}</p>
        <p className="mothers-name">{data.mothersName}</p>
        <p className="address">{data.permanentAddress}</p>
        <p className="emergency-name">{data.emergencyContact}</p>
        <p className="relationship">{data.relationship}</p>
        <p className="e-address">{data.emergencyContactAddress}</p>
        <p className="telephone">{data.telephoneNo}</p>
        <p className="passport-2-1">{data.passportNo}</p>
        <p className="nid-2-1">{data.nid}</p>
        <p className="bottom-nid-passport">
          {`${data.passportNo || ""}7BGD${data.year?.slice(2) || ""}${
            data.month || ""
          }${data.day || ""}4M3201222${data.nid || ""}<<<<72`}
        </p>
        <p className="last-name">{data.lastName}</p>
        <p className="f-m-name">{`${data.firstName} ${data.middleName}`}</p>
        <p className="dob">{data.dob}</p>
        <p className="delevery">{data.deliveryDate}</p>
        <p className="expiry">{data.expiryDate}</p>
        <p className="bottom-name">
          {`P<BGD${data.lastName || ""}<<${data.firstName || ""}<<${
            data.middleName || ""
          }<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`}
        </p>
        {data.image && (
          <>
            <img src={data.image} alt="" className="personal-image-1" />
            <img src={data.image} alt="" className="personal-image-2" />
            <img src={data.image} alt="" className="personal-image-3" />
          </>
        )}
        {data.signature && (
          <>
            <img src={data.signature} alt="" className="signature" />
          </>
        )}
        <p className="dob2">{`${data.day || ""}.${data.month || ""}.${
          data.year?.slice(2) || ""
        }`}</p>
        <img src={passport} alt="passport background" />
      </div>
    </div>
  );
};

export default Passport;
