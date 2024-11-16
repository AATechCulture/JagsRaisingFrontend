import React, { useState } from "react";

const SchoolForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

    // Validation: Ensure all fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        setError(`Please fill out the ${key} field.`);
        return;
      }
    }

    setError(null); // Clear previous errors
    setIsSubmitting(true);

    try {
      // Simulated API request (replace URL with your actual endpoint)
      const response = await fetch("https://jagsraising.onrender.com/add_shelter ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form. Please try again.");
      }

      const data = await response.json();
      console.log("Form successfully submitted:", data);

      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        email: "",
        situation: "",
        duration: "",
        dueDate: "",
        amount: "",
      });

      alert("Form submitted successfully!");
      onClose(); // Close modal on success
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>School Tuition Form</h2>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
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
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
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
          placeholder="Enter your address"
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
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Situation:</label>
        <textarea
          name="situation"
          placeholder="Describe your situation"
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
          placeholder="Enter duration (e.g., 6 months)"
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
          placeholder="Enter amount (e.g., 1000)"
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

export default SchoolForm;
