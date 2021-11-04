import broken from "../../assets/svgs/broken.svg";
import damage from "../../assets/svgs/damage.svg";
import graffiti from "../../assets/svgs/graffiti.svg";
import insect from "../../assets/svgs/insect.svg";
import litter from "../../assets/svgs/litter.svg";
import plant from "../../assets/svgs/plant.svg";
import streetsign from "../../assets/svgs/street-sign.svg";
import {
  AddressContainer,
  Address,
  FetchingContainer,
  IssueandAddress,
  DateContainer,
  UpvotesContainer,
  InsectIcon,
  LitterIcon,
  GraffitiIcon,
  PlantIcon,
  StreetSignIcon,
  DamageIcon,
  BrokenIcon,
} from "../IssueList/issuesComponentStyled";


const IssueComponent = (props) => {
  return (
    <>
      <FetchingContainer
        onClick={() => {
          props.setSelectedIssue(props.issue);
          props.setToggleMoreDetails(true);
          props.setToggleShowIssues(false);
        }}
      >
        
        <AddressContainer>
          {props.issue.category === "insects_and_animals"? <InsectIcon src={insect} alt ="insect"/> : " "}
          {props.issue.category === "litter"? <LitterIcon src={litter} alt ="litter"/> : " "}
          {props.issue.category === "graffiti"? <GraffitiIcon src={graffiti} alt ="graffiti"/> : " "}
          {props.issue.category === "damage_to_public_property"? <DamageIcon src={damage} alt ="damage"/> : " "}
          {props.issue.category === "unmaintained_greenery"? <PlantIcon src={plant} alt ="plant"/> : " "}
          {props.issue.category === "road_damage"? <BrokenIcon src={broken} alt ="broken road"/> : " "}
          {props.issue.category === "street_sign_issues"? <StreetSignIcon src={streetsign} alt ="street sign"/> : " "}
          <IssueandAddress>
          <p className="issue">{props.issue.title}</p>
          <Address>{props.issue.adress}, {props.issue.zip} {props.issue.city}</Address>
          </IssueandAddress>
        </AddressContainer>

        <UpvotesContainer>
          <DateContainer>{props.issue.modified.substr(0, 10)}</DateContainer>
          <p className="upvotes">Upvotes: {props.issue.upvote_count}</p>
        </UpvotesContainer>
      </FetchingContainer>
    </>
  );
};

export default IssueComponent;
