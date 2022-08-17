import React from "react";
import back from "../images/header-bg.png";
import { Container, Slider, Pagination } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ClientContext } from "../context/ClientProvider";

function MainPage() {
  const {
    searchWord,
    setSearchWord,
    getUniversities,
    universities,
    filterByPrice,
    setFilterByPrice,
    minMax,
    currentPage,
    setCurrentPage,
    pagesCount,
  } = React.useContext(ClientContext);
  const Search = styled("div")(({}) => {});

  React.useEffect(() => {
    getUniversities();
  }, [filterByPrice, currentPage, searchWord]);

  //   const SearchIconWrapper = styled("div")(({ theme }) => ({
  //     padding: theme.spacing(0, 2),
  //     height: "100%",
  //     position: "absolute",
  //     pointerEvents: "none",
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   }));

  //   const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //     color: "inherit",
  //     "& .MuiInputBase-input": {
  //       padding: theme.spacing(1, 1, 1, 0),
  //       // vertical padding + font size from searchIcon
  //       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //       transition: theme.transitions.create("width"),
  //       width: "100%",
  //       [theme.breakpoints.up("md")]: {
  //         width: "20ch",
  //       },
  //     },
  //   }));

  //   const bull = (
  //     <Box
  //       component="span"
  //       sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  //     >
  //       •
  //     </Box>
  //   );

  return (
    <div className="main-page">
      <Container>
        <h2 className="main-tag">Never stop learning!</h2>
        <h4 className="desciption-tag">Choose your best university:</h4>
        <input></input>
        {/* <Search className="main-search">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
            placeholder="name, program…"
            inputProps={{ "aria-label": "search" }}
            style={{ width: "150px" }}
            className="search_custom"
          />
        </Search> */}
        <div
          className="filter-block"
          // style={{ display: "flex", justifyContent: "end" }}
        >
          <h4 style={{ textAlign: "start" }}>Price filter by Tuition</h4>
          <Slider
            max={minMax[1]}
            min={minMax[0]}
            valueLabelDisplay="auto"
            value={filterByPrice}
            onChange={(e, newValue) => setFilterByPrice(newValue)}
            defaultValue={30}
            sx={{
              width: 200,
              color: "#0B7077",
              "& .MuiSlider-thumb": {
                borderRadius: "50px",
              },
            }}
          />
        </div>
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
                  <Typography variant="body2">{item.timeToComplete}</Typography>
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
        <div
          className="pagination-block"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            color="primary"
            onChange={(_, newValue) => setCurrentPage(newValue)}
            count={pagesCount}
          />
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
