import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Div100vh from "react-div-100vh";
import { Main, ReportButton } from "./Styled";
import Map from "../../components/Map/Map";
import FilterButton from "./FilterButton";
import { useDispatch } from "react-redux";
import MenuFooter from "../../components/MenuFooter/MenuFooter";

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [coordinates, setCoordinates] = useState(null);

  const reportButtonOnClickHandler = () => {
    dispatch({ type: "setCoordinates", payload: coordinates });
    history.push("/createissue");
  };

  return (
    <>
      <Div100vh>
        <Main>
          <Map height={"100%"} width={"100%"} setCoordinates={setCoordinates} />
          {coordinates === null ? (
            <FilterButton />
          ) : (
            <ReportButton onClick={reportButtonOnClickHandler}>
              Report
            </ReportButton>
          )}
        </Main>
      </Div100vh>
      <MenuFooter/>
    </>
  );
};

export default Homepage;
