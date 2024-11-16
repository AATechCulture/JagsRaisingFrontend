import React, { useState } from "react";
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const TicketForm = ({ addTicket }) => {
  const [formData, setFormData] = useState({
    priority: "Medium",
    count: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.count && Number(formData.count) > 0) {
      addTicket({ priority: formData.priority, count: Number(formData.count) });
      setFormData({ priority: "Medium", count: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <FormControl style={{ marginRight: "20px", minWidth: 150 }}>
        <InputLabel>Priority</InputLabel>
        <Select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          required
        >
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Count"
        name="count"
        type="number"
        value={formData.count}
        onChange={handleChange}
        required
        style={{ marginRight: "20px" }}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Ticket
      </Button>
    </form>
  );
};

export default TicketForm;