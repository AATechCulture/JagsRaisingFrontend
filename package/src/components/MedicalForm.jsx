import React, { useState } from "react";

const MedicalForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    hospitalName: "",
    disease: "",
    phone: "",
    address: "",
    email: "",
    situation: "",
    duration: "",
    dueDate: "",
    amount: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://jagsraising.onrender.com/add_medical", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Failed to submit form: ${errorDetails}`);
      }

      const data = await response.json();
      console.log("Form successfully submitted:", data);

      alert("Medical form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        hospitalName: "",
        disease: "",
        phone: "",
        address: "",
        email: "",
        situation: "",
        duration: "",
        dueDate: "",
        amount: "",
      });
      onClose();
    } catch (err) {
      console.error("Error submitting form:", err.message);
      setError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Medical Form</h2>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Hospital Name:</label>
        <input
          type="text"
          name="hospitalName"
          value={formData.hospitalName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Disease:</label>
        <input
          type="text"
          name="disease"
          value={formData.disease}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Situation:</label>
        <textarea
          name="situation"
          value={formData.situation}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "1rem", textAlign: "right" }}>
        <button type="button" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting} style={{ marginLeft: "0.5rem" }}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default MedicalForm;
