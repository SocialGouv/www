import React from "react";
import PropTypes from "prop-types";
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
  max-width: 30%;
  @media (max-width: 549px) {
    width: 100%;
    max-width: 100%;
  }
`;

const Member = ({ name, structure, role, picture, style }) => {
  return (
    <StyledMember style={{ display: "flex", ...style }}>
      <StyledIcon
        key={picture}
        style={{
          flex: "0 0 auto",
          backgroundImage: `url(${picture})`
        }}
      />
      <div
        key={name}
        title={name}
        style={{
          marginLeft: 10,
          flex: "1 0 auto",
          fontSize: "0.9em",
          width: "calc(100% - 45px)"
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            color: "#0081d5",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          }}
          dangerouslySetInnerHTML={{ __html: name }}
        />
        <div
          style={{ marginTop: 5, lineHeight: "1.1em" }}
          className="article__author-role"
          dangerouslySetInnerHTML={{ __html: `${role} - ${structure}` }}
        />
      </div>
    </StyledMember>
  );
};

Member.propTypes = {
  name: PropTypes.string,
  structure: PropTypes.string,
  role: PropTypes.string,
  picture: PropTypes.string,
  style: PropTypes.object
};

export default Member;
