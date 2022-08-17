import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminContext } from "../context/AdminProvider";
import { Container, TextField, Button } from "@mui/material";

const AdminEditPage = () => {
  const { getUniversitiesToEdit, universitiesToEdit, saveEditedUniversity } =
    React.useContext(AdminContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [program, setProgram] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [applicationDeadline, setApplicationDeadline] = React.useState("");
  const [tuition, setTuition] = React.useState(0);
  const [timeToComplete, setTimeToComplete] = React.useState("");
  const [webSite, setWebSite] = React.useState("");
  const handleSubmit = () => {
    const editedUniversity = {
      name,
      program,
      location,
      startDate,
      applicationDeadline,
      tuition,
      timeToComplete,
      webSite,
      id,
    };
    saveEditedUniversity(editedUniversity);
    navigate("/admin");
  };
  React.useEffect(() => {
    if (universitiesToEdit) {
      setName(universitiesToEdit.name);
      setProgram(universitiesToEdit.program);
      setLocation(universitiesToEdit.location);
      setStartDate(universitiesToEdit.startDate);
      setApplicationDeadline(universitiesToEdit.applicationDeadline);
      setTuition(universitiesToEdit.tuition);
      setTimeToComplete(universitiesToEdit.timeToComplete);
      setWebSite(universitiesToEdit.webSite);
    }
  }, [universitiesToEdit]);
  React.useEffect(() => {
    getUniversitiesToEdit(id);
  }, []);
  console.log(universitiesToEdit);
  return (
    <div className="main-wrapper">
      <div className="admin-edit-page">
        <Container>
          <h2>Edit</h2>
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
              <Button variant="outlined" type="submit">
                Save
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AdminEditPage;
