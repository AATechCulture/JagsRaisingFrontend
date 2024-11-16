// FilterDropdown.js
import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const FilterDropdown = ({ filter, setFilter }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <FormControl fullWidth style={{ maxWidth: 250 }}>
        <InputLabel>Filter by Priority</InputLabel>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          label="Filter by Priority"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterDropdown;