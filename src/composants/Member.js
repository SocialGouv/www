import styled from "styled-components";

const StyledIcon = styled.div`
  border-radius: 999px;
  width: 45px;
  height: 45px;
  display: inline-block;
  background-position: center center;
  background-size: cover;
  background-color: #c9d3df;
`;

const StyledMember = styled.div`
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 4px #c9d3df;
  padding: 1em;
  position: relative;
  margin: 10px;
`;

const Member = ({ name, structure, startups, role, picture, bio, style }) => {
  return (
    <StyledMember style={{ display: "flex", ...style }}>
      <StyledIcon
        key={picture}
        style={{
          flex: "0 0 45px",
          backgroundImage: `url(${picture})`
        }}
      />
      <div
        key={name}
        title={name}
        style={{
          marginLeft: 10,
          lineHeight: "45px",
          flex: "1 0 auto",
          fontWeight: "bold",
          color: "#0081d5",
          width: "calc(100% - 45px)",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis"
        }}
        dangerouslySetInnerHTML={{ __html: name }}
      />
    </StyledMember>
  );
};

export default Member;
