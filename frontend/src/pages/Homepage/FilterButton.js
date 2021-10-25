import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ReportButton } from "./Styled";
import { MdKeyboardArrowDown } from "react-icons/md";

const MainContainer = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: 0px;
  z-index: 3;
`;

const FilterContainer = styled.div`
  width: 85%;
  border-top: ${(props) => `1px solid ${props.theme.yellowColor}`};

  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  height: ${(props) => props.height || "30px"};
  width: ${(props) => props.width || "100%"};
  border-bottom: ${(props) => props.borderBottom || "none"};

  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "20px"};
`;

const Text = styled.div`
  width: ${(props) => props.width || "90px"};
  font-size: ${(props) => props.fontSize || "13px"};
  font-weight: bold;
`;

const FilterButtonStyle = styled.button`
  width: 90px;
  height: 35px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  border: 2px solid ${(props) => props.theme.yellowColor};
  outline-style: none;
  border-radius: 5px;
`;

const FilterButton = () => {
  const dispatch = useDispatch();

  const filterValueRedux = useSelector((state) => state.filterReducer.filter);

  const [toggleFilter, setToggleFilter] = useState(false);

  const [filterValue, setFilterValue] = useState(
    filterValueRedux === "default" ? "default" : filterValueRedux
  );

  const handleFilter = () => {
    dispatch({
      type: "applyFilter",
      payload: filterValue,
    });
  };

  return (
    <>
      {toggleFilter && (
        <MainContainer>
          <SubContainer
            justifyContent={"center"}
            height={"40px"}
            borderBottom={"1px solid black"}
            marginBottom={"0px"}
          >
            <Text fontSize={"15px"} width={"auto"}>
              Filters
            </Text>
            <MdKeyboardArrowDown
              style={{
                position: "absolute",
                right: "3%",
                height: "35px",
                width: "auto",
                cursor: "pointer",
              }}
              onClick={() => setToggleFilter(false)}
            />
          </SubContainer>
          <FilterContainer>
            <SubContainer marginTop={"20px"}>
              <Text>Category</Text>
              <select
                style={{
                  height: "30px",
                  fontSize: "14px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  width: "180px",
                  cursor: "pointer",
                }}
                onChange={(e) => setFilterValue(e.target.value)}
                value={filterValue}
              >
                <option value="default">--select--</option>
                <option value="graffiti">graffiti</option>
                <option value="damages">damages</option>
                <option value="insects and animals">insects and animals</option>
                <option value="items with no owner">items with no owner</option>
                <option value="litter">litter</option>
              </select>
            </SubContainer>
            <SubContainer justifyContent={"flex-end"}>
              <FilterButtonStyle onClick={handleFilter}>
                Apply filter
              </FilterButtonStyle>
            </SubContainer>
          </FilterContainer>
        </MainContainer>
      )}
      <ReportButton onClick={() => setToggleFilter(true)}>
        Add filter to your search
      </ReportButton>
    </>
  );
};
export default FilterButton;
