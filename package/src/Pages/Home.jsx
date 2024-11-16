import React, { useState } from "react";
import MedicalForm from "../components/MedicalForm";
import SchoolForm from "../components/SchoolForm";
import FoodForm from "../components/FoodForm";
import ShelterForm from "../components/ShelterForm";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState("");

  const handleOpenModal = (type) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  const renderForm = () => {
    switch (formType) {
      case "MedicalForm":
        return <MedicalForm onClose={handleCloseModal} />;
      case "SchoolForm":
        return <SchoolForm onClose={handleCloseModal} />;
      case "FoodForm":
        return <FoodForm onClose={handleCloseModal} />;
      case "ShelterForm":
        return <ShelterForm onClose={handleCloseModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      <h1>Home</h1>
      <div className="button-container">
        <button
          className="button button-medical"
          onClick={() => handleOpenModal("MedicalForm")}
        >
          Medical Form
        </button>
        <button
          className="button button-school"
          onClick={() => handleOpenModal("SchoolForm")}
        >
          School Tuition Form
        </button>
        <button
          className="button button-food"
          onClick={() => handleOpenModal("FoodForm")}
        >
          Food Form
        </button>
        <button
          className="button button-shelter"
          onClick={() => handleOpenModal("ShelterForm")}
        >
          Shelter Form
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal-container">{renderForm()}</div>
        </>
      )}
    </div>
  );
};

export default Home;
