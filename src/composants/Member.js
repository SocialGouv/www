import PropTypes from "prop-types";
import React from "react";
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
          backgroundImage: `url(${picture})`,
          flex: "0 0 auto"
        }}
      />
      <div
        key={name}
        title={name}
        style={{
          flex: "1 0 auto",
          fontSize: "0.9em",
          marginLeft: 10,
          width: "calc(100% - 45px)"
        }}
      >
        <div
          style={{
            color: "#0081d5",
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
          dangerouslySetInnerHTML={{ __html: name }}
        />
        <div
          style={{ lineHeight: "1.1em", marginTop: 5 }}
          className="article__author-role"
          dangerouslySetInnerHTML={{ __html: `${role} - ${structure}` }}
        />
      </div>
    </StyledMember>
  );
};

Member.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  role: PropTypes.string,
  structure: PropTypes.string,
  style: PropTypes.object
};

export default Member;
