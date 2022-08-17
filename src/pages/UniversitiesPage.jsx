import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ClientContext } from "../context/ClientProvider";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

function UniversitiesPage() {
  const { getUniversities, universities } = React.useContext(ClientContext);

  React.useEffect(() => {
    getUniversities();
  }, []);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div className="main-wrapper">
      <div className="universities-page">
        <Container>
          <h2>Universities and Programs List:</h2>
          {universities.map((item) => (
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <React.Fragment>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {item.program}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.location}
                    </Typography>
                    <Typography variant="body2">
                      Tuition: {item.tuition}$
                    </Typography>
                    <Typography variant="body2">
                      Semester of entry: {item.startDate}
                    </Typography>
                    <Typography variant="body2">
                      {item.timeToComplete}
                    </Typography>
                    <Typography variant="body2">
                      Application Deadline: {item.applicationDeadline}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Link to={item.webSite}> */}
                    <Button size="small">Learn More</Button>
                    {/* </Link> */}
                  </CardActions>
                </React.Fragment>
              </Card>
            </Box>
          ))}
        </Container>
      </div>
    </div>
  );
}
export default UniversitiesPage;
