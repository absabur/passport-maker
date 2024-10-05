import React, { useState } from "react";
import "./Form.css"; // Link the CSS file

const Form = ({ data }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [mothersName, setMothersName] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [relationship, setRelationship] = useState("");
  const [emergencyContactAddress, setEmergencyContactAddress] = useState("");
  const [telephoneNo, setTelephoneNo] = useState("");
  const [dob, setDob] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [nid, setNid] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [passportNo, setPassportNo] = useState("");
  const [image, setImage] = useState(null);
  const [signature, setSignature] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    data({
      firstName,
      middleName,
      lastName,
      fathersName,
      mothersName,
      permanentAddress,
      telephoneNo,
      dob,
      day,
      month,
      year,
      nid,
      deliveryDate,
      expiryDate,
      passportNo,
      image,
      signature,
      emergencyContact,
      relationship,
      emergencyContactAddress,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };
  const handleSignatureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignature(reader.result);
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            placeholder="Md"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Middle Name:
          <input
            type="text"
            placeholder="Abdul"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            placeholder="Mozid"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Fathers Name:
          <input
            type="text"
            placeholder="Mohammad ali"
            value={fathersName}
            onChange={(e) => setFathersName(e.target.value)}
          />
        </label>
        <label>
          Mothers Name:
          <input
            type="text"
            placeholder="Mst moraina"
            value={mothersName}
            onChange={(e) => setMothersName(e.target.value)}
          />
        </label>
        <label>
          Permanent Address:
          <input
            type="text"
            placeholder="Bakpal, Dhupchanchia, Zianagar Hat - 5800, Bogura"
            value={permanentAddress}
            onChange={(e) => setPermanentAddress(e.target.value)}
          />
        </label>
        <label>
          Telephone No.:
          <input
            type="text"
            placeholder="+880177263892"
            value={telephoneNo}
            onChange={(e) => setTelephoneNo(e.target.value)}
          />
        </label>
        <label>
          Emergency Contact:
          <input
            type="text"
            placeholder="Mst Morzina"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
          />
        </label>

        <label>
          Relationship:
          <input
            type="text"
            placeholder="Mother"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
          />
        </label>
        <label>
          Emergency Contact Address:
          <input
            type="text"
            placeholder="Bakpal, Dhupchanchia, Zianagar Hat - 5800, Bogura"
            value={emergencyContactAddress}
            onChange={(e) => setEmergencyContactAddress(e.target.value)}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="text"
            value={dob}
            placeholder="01 Jan 2000"
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <label>
          Birth Day:
          <input
            type="text"
            value={day}
            placeholder="01"
            onChange={(e) => setDay(e.target.value)}
          />
        </label>
        <label>
          Birth Month:
          <input
            type="text"
            value={month}
            placeholder="01"
            onChange={(e) => setMonth(e.target.value)}
          />
        </label>
        <label>
          Birth Year:
          <input
            type="text"
            value={year}
            placeholder="1997"
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          NID:
          <input
            type="text"
            placeholder="2938743894"
            value={nid}
            onChange={(e) => setNid(e.target.value)}
          />
        </label>
        <label>
          Delivery Date:
          <input
            type="text"
            placeholder="21 Dec 2022"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            placeholder="21 Dec 2032"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </label>
        <label>
          Passport No.:
          <input
            type="text"
            placeholder="A83732783"
            value={passportNo}
            onChange={(e) => setPassportNo(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input type="file" onChange={handleImageUpload} />
        </label>
        <label>
          Signature:
          <input type="file" onChange={handleSignatureUpload} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
