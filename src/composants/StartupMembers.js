import { Member } from ".";

import members from "../data/members.json";

const getStartupMembers = startup =>
  shuffled(members.filter(member => member.startups.indexOf(startup) > -1));

const shuffled = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

//const Shuffle = ({ children }) => shuffled(React.Children.toArray(children));

class Shuffle extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("shuffle render");
    return shuffled(React.Children.toArray(this.props.children));
  }
}

class StartupMembers extends React.Component {
  render() {
    const { startup } = this.props;
    const startupMembers = getStartupMembers(startup);
    console.log(startupMembers);
    return (
      <div>
        <div
          style={{
            fontSize: "1.2em",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
            marginBottom: 20
          }}
        >
          Ils se sont engagés pour ce projet :
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {startupMembers.map(member => (
            <Member
              key={member.name}
              style={{ flex: "1 0 auto", maxWidth: "30%" }}
              {...member}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default StartupMembers;
