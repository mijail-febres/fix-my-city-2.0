import broken from "../../assets/images/broken.png";
import damage from "../../assets/images/damage.png";
import graffiti from "../../assets/images/graffiti.png";
import insect from "../../assets/images/insect.png";
import litter from "../../assets/images/litter.png";
import plant from "../../assets/images/plant.png";
import streetsign from "../../assets/images/street-sign.png";
import {
  AddressContainer,
  FetchingContainer,
  Category,
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
        <Category>
        {props.issue.category === "insects and animals"? <InsectIcon src={insect} alt ="insect"/> : " "}
        {props.issue.category === "litter"? <LitterIcon src={litter} alt ="litter"/> : " "}
        {props.issue.category === "graffiti"? <GraffitiIcon src={graffiti} alt ="graffiti"/> : " "}
        {props.issue.category === "damage_to_public_property"? <DamageIcon src={damage} alt ="damage"/> : " "}
        {props.issue.category === "unmaintained_greenery"? <PlantIcon src={plant} alt ="plant"/> : " "}
        {props.issue.category === "road_damage"? <BrokenIcon src={broken} alt ="broken road"/> : " "}
        {props.issue.category === "street_sign_issues"? <StreetSignIcon src={streetsign} alt ="street sign"/> : " "}
        </Category>

        <AddressContainer>
          <p className="issue">{props.issue.title}</p>
          {props.issue.adress}, {props.issue.zip} {props.issue.city}
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
