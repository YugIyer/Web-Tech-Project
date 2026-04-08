import { useState } from "react";
import API from "../api";

export default function StudentForm() {
  const [form, setForm] = useState({
    rollNo: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    branch: "",
    subjects: [],
    gender: "",
    address: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubjects = (e) => {
    const value = e.target.value;

    if (form.subjects.includes(value)) {
      setForm({
        ...form,
        subjects: form.subjects.filter((s) => s !== value),
      });
    } else {
      setForm({
        ...form,
        subjects: [...form.subjects, value],
      });
    }
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  const validate = () => {
    if (!form.rollNo) return "Roll Number is required";
    if (!form.firstName) return "First Name is required";
    if (!form.lastName) return "Last Name is required";
    if (!form.email) return "Email is required";
    if (!form.phone) return "Phone is required";
    if (!form.dob) return "Date of Birth is required";
    if (!form.branch) return "Branch is required";
    if (!form.gender) return "Gender is required";
    if (!form.address) return "Address is required";

    if (form.subjects.length === 0) return "Select at least one subject";

    if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email format";
    if (form.phone.length < 10) return "Phone must be at least 10 digits";

    return null;
  };

  const submit = async () => {
    const error = validate();

    if (error) {
      alert(error);
      return;
    }

    try {
      const data = new FormData();

      Object.keys(form).forEach((key) => {
        if (key === "subjects") {
          data.append("subjects", JSON.stringify(form.subjects));
        } else {
          data.append(key, form[key]);
        }
      });

      await API.post("/students", data);

      alert("Student saved!");
    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  return (
    <div className="card" style={{ width: "500px" }}>
      <h3>Student Registration</h3>

      <input
        name="rollNo"
        placeholder="Roll Number"
        onChange={handleChange}
        className="input-field"
      />

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="input-field"
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="input-field"
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <select
        name="branch"
        onChange={handleChange}
        className="input-field"
      >
        <option value="">Select Branch</option>
        <option value="CSE">CSE</option>
        <option value="IT">IT</option>
        <option value="ECE">ECE</option>
        <option value="Civil">Civil</option>
      </select>

      <div>
        <p>Subjects:</p>
        <div style={{display:"flex"}}>
        {["Java", "Python", "C++"].map((sub) => (
          <label key={sub} style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              value={sub}
              onChange={handleSubjects}
            />
            {sub}
          </label>
        ))}
        </div>
      </div>

      <div >
        <p>Gender:</p>
        <div style={{display:"flex"}}>
        <label style={{ marginRight: "10px" }}>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          Female
        </label>
        </div>
      </div>

      <div>
        <p>Upload Image:</p>
        <input type="file" onChange={handleFile} />
      </div>

      <textarea
        name="address"
        placeholder="Address"
        onChange={handleChange}
        className="input-field"
      />

      <button
        onClick={submit}
        style={{
          background: "#3b82f6",
          color: "#fff",
          width: "100%",
          marginTop: "10px",
        }}
      >
        Submit
      </button>
    </div>
  );
}