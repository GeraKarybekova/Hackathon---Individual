import { TextField } from "@mui/material";
import React from "react";
import { Button, Container } from "@mui/material";

import { AdminContext } from "../context/AdminProvider";

function AdminAddPage() {
  const { sendNewUniversity } = React.useContext(AdminContext);

  const [name, setName] = React.useState("");
  const [program, setProgram] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [applicationDeadline, setApplicationDeadline] = React.useState("");
  const [tuition, setTuition] = React.useState(0);
  const [timeToComplete, setTimeToComplete] = React.useState("");
  const [webSite, setWebSite] = React.useState("");

  const handleSubmit = () => {
    const newUniversity = {
      name: name.trim(),
      program: program.trim(),
      location: location.trim(),
      startDate: startDate.trim(),
      applicationDeadline: applicationDeadline.trim(),
      tuition: tuition.trim(),
      timeToComplete: timeToComplete.trim(),
      webSite: webSite.trim(),
    };
    for (let i in newUniversity) {
      if (!newUniversity[i]) {
        alert("Заполните поля!");
        return;
      }
    }
    sendNewUniversity(newUniversity);
    setName("");
    setProgram("");
    setLocation("");
    setStartDate("");
    setApplicationDeadline("");
    setTuition(0);
    setTimeToComplete("");
    setWebSite("");
  };

  return (
    <div className="main-wrapper">
      <div className="admin-add-page">
        <Container>
          <h2>Add New University Program</h2>
          <div className="sub-wrapper">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                variant="outlined"
              />
              <TextField
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                label="Program"
                variant="outlined"
              />
              <TextField
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                label="Location"
                variant="outlined"
              />
              <TextField
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                label="Semester of entry"
                variant="outlined"
              />
              <TextField
                value={applicationDeadline}
                onChange={(e) => setApplicationDeadline(e.target.value)}
                label="Application Deadline"
                variant="outlined"
                type="date"
              />
              <TextField
                value={tuition}
                onChange={(e) => setTuition(parseInt(e.target.value))}
                label="Tuition"
                variant="outlined"
                type="number"
              />
              <TextField
                value={timeToComplete}
                onChange={(e) => setTimeToComplete(e.target.value)}
                label="Time to complete"
                variant="outlined"
              />
              <TextField
                value={webSite}
                onChange={(e) => setWebSite(e.target.value)}
                label="Web Site"
                variant="outlined"
              />
              <Button
                variant="filled"
                type="submit"
                style={{
                  fontWeight: "600",
                }}
              >
                ADD
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AdminAddPage;
