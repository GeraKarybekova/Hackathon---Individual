import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../context/AdminProvider";
import { Delete, Edit } from "@mui/icons-material";

function AdminPage() {
  const { getUniversities, universities, deleteUniversity } =
    React.useContext(AdminContext);
  React.useEffect(() => {
    getUniversities();
  }, []);

  return (
    <div className="main-wrapper">
      <div className="admin-page">
        <Container>
          <h2>Admin Page</h2>
          <div className="sub-wrapper">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Program</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>Application Deadline</TableCell>
                  <TableCell>Tuition</TableCell>
                  <TableCell>Time to complete</TableCell>
                  <TableCell>Web-site</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {universities.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.program}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.startDate}$</TableCell>
                    <TableCell>{item.applicationDeadline}</TableCell>
                    <TableCell>{item.tuition}</TableCell>
                    <TableCell>{item.timeToComplete}</TableCell>
                    <TableCell>{item.webSite}</TableCell>
                    <TableCell>
                      <Delete onClick={() => deleteUniversity(item.id)} />
                    </TableCell>
                    <TableCell>
                      <Link to={`/admin/edit/${item.id}`}>
                        <Edit />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AdminPage;
