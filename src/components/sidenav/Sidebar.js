import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Phoenix from "../assets/Phoenix-Logo.png";


const Nav = styled.div`
marginTop: -50px;
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;

`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff", marginLeft: "40px" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars
              onClick={showSidebar}
              style={{ marginLeft: "0px" }}
            />
          </NavIcon>
          <h1
            style={{
              textAlign: "center",
              marginLeft: "250px",
              fontFamily: "Dr Sugiyama",
              fontSize: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "gold",
              padding: "20px",
              marginTop: "5px",
            }}
          >
            <img
              src={Phoenix}
              alt="logo"
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "50%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
            iBukun
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
