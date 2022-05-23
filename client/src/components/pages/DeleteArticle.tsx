import { useState } from "react";
import { Stack, TextField, Typography, Button } from "@mui/material";
import axios from "axios";

const DeleteArticle = () => {
  const [instructorName, setInstructorname] = useState("");

  const handleClick = () => {
    console.log(instructorName);
    axios.post(`${process.env.BACKEND_URI}/articles/delete`, {
      instructor: instructorName,
    });
    if (instructorName) {
      alert("Successfully deleted Article!");
    } else {
      alert("Input field is empty");
    }
  };
  return (
    <Stack sx={{ margin: "auto", marginBottom: 20, marginTop: 10 }}>
      <Typography
        sx={{ margin: "auto", marginBottom: 2 }}
        color="common.white"
        variant="h2"
      >
        Delete Article
      </Typography>
      <TextField
        id="outlined-textarea"
        label="Instructor Name"
        placeholder="Instructor Name"
        variant="filled"
        sx={{
          backgroundColor: "white",
          margin: "auto",
          minWidth: 500,
          marginBottom: 2,
          marginTop: 5,
        }}
        onChange={(event) => {
          setInstructorname(event.target.value);
        }}
      />

      <Button onClick={handleClick}>Submit</Button>
    </Stack>
  );
};

export default DeleteArticle;
