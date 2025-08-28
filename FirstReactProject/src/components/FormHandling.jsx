import React, { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("Male");
  const [choice, setChoice] = useState([]);
  const [dpt, setDpt] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [records, setRecords] = useState([]);

  const addChoice = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setChoice([...choice, value]); // ... here  refers to spread operator, means it first add all old values then add the new value
    } else {
      setChoice(choice.filter((item) => item !== value));
    }
  };

  const displaySubmit = (e) => {
    e.preventDefault();
    if (!confirm) {
      alert("Please Confirm Fisrt");
      return;
    }
    const oneRecord = {
      id: Date.now(), // its is how we create object using key value pair
      name, // but here it automatically use name as key and its value as value we
      email,
      age,
      gender,
      choice,
      dpt,
      confirm:confirm?"true":"false",
    };
    setRecords([...records, oneRecord]);
    setName(""),
    setEmail(""),
    setAge(""),
    setGender("Male"),
    setChoice(""),
    setDpt(""),
    setConfirm(false)
  };

  return (
    <div className="d-flex flex-column m-4 justify-content-center align-items-center">
      <h4 className="btn btn-primary" style={{ width: "35%" }}>
        Form Handling
      </h4>
      <form
        onSubmit={(e) => displaySubmit(e)}
        class="d-flex flex-column mb-3 w-25 border border-2 p-4 rounded rounded-3"
        style={{ width: "35%" }}
      >
        <input
          type="name"
          className="mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="email"
          className="mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          type="number"
          className="mb-2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Age"
        />
        <h4>Gender</h4>
        <div>
          <input
            type="radio"
            name="Gender"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          <b className="mx-2">Male</b>
        </div>
        <div>
          <input
            type="radio"
            name="Gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          <b className="mx-2">Female</b>
        </div>

        <h4>select your choice</h4>
        <div>
          <input
            type="checkbox"
            value="ReactJS"
            checked={records.includes("ReactJS")}
            onChange={(e) => addChoice(e)}
            />{" "}
          <b className="mx-2">ReactJS</b>
        </div>
        <div>
          <input
            type="checkbox"
            value="NodeJS"
            checked={records.includes("NodeJS")}
            onChange={(e) => addChoice(e)}
            />{" "}
          <b className="mx-2">NodeJS</b>
        </div>
        <div>
          <input
            type="checkbox"
            value="JavaScript"
            checked={records.includes("JavaScript")}
            onChange={(e) => addChoice(e)}
          />{" "}
          <b className="mx-2">Java Script</b>
        </div>
        <h4>Select Your DEPT</h4>
        <select onChange={(e) => setDpt(e.target.value)}>
          <option value="">Select choice</option>
          <option value="MCA">MCA</option>
          <option value="CSE">CSE</option>
          <option value="MBA">MBA</option>
          <option value="ECE">ECE</option>
        </select>
        <div>
          <input
            type="checkbox"
            checked={confirm}
            onChange={(e) => setConfirm(e.target.checked)}
          />
          <b className="mx-2">Are you confirm to save.</b>
        </div>
        <button type="submit" className="btn btn-primary m-2">save
        </button>
      </form>
      {JSON.stringify(records)}
      {records.length > 0 && (
        <div>
          <h4>Your Information</h4>
          <table className="table table-bordered table-striped table-hover">
            <thead className="table table-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Choice</th>
                <th>Department</th>
                <th>Agrement</th>
              </tr>
            </thead>
            <tbody className="table table-light">
                {records.map((row)=>
                    <tr key={row.Id}>
                        <th>{row.id}</th>
                        <th>{row.name}</th>
                        <th>{row.email}</th>
                        <th> {row.age} </th>
                        <th> {row.gender}</th>
                        <th>{row.choice.join(",")}</th>
                        <th>{row.dpt}</th>
                        <th>{row.confirm}</th>
                    </tr>
                )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FormHandling;
