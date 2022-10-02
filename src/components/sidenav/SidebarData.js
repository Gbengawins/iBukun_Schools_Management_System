import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
// import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <BsIcons.BsColumnsGap />,
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaUsers />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        icon: <FaIcons.FaJournalWhills />,
        title: "About",
        path: "/about/our-aim",
      },
      {
        title: "Our Vision",
        path: "/about/our-vision",
        icon: <FaIcons.FaBinoculars />,
      },
    ],
  },
  {
    title: "SignIn",
    icon: <ImIcons.ImKey2 />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Login",
        icon: <FaIcons.FaSignInAlt />,
        path: "/login",
      },
      {
        title: "Register",
        icon: <BsIcons.BsUnlock />,
        path: "/register",
      },
    ],
  },
  {
    title: "Teachers",
    icon: <FaIcons.FaUserGraduate />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Teacher",
        icon: <FaIcons.FaUserPlus />,
        path: "/add-teacher",
      },
      {
        title: "Update Teacher",
        icon: <FaIcons.FaUserEdit />,
        path: "/update-teacher",
      },
      {
        title: "Teachers List",
        icon: <BsIcons.BsPersonLinesFill />,
        path: "/teachers-list",
      },
      {
        title: "Single Teacher",
        icon: <FaIcons.FaUserTie />,
        path: "/single-teacher",
      },
    ],
  },
  {
    title: "Students",
    icon: <BsIcons.BsPeopleFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "AddStudent",
        icon: <FaIcons.FaUserPlus />,
        path: "/add-student",
      },
      {
        title: "Update Student",
        icon: <FaIcons.FaUserEdit />,
        path: "/update-student",
      },
      {
        title: "Students List",
        icon: <BsIcons.BsPersonLinesFill />,
        path: "/students-list",
      },
      {
        title: "Single Student",
        icon: <BsIcons.BsPersonLinesFill />,
        path: "/single-student",
      },
    ],
  },
  {
    title: "Parents",
    icon: <MdIcons.MdOutlineFamilyRestroom />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Parent",
        icon: <FaIcons.FaUserPlus />,
        path: "/add-parent",
      },
      {
        title: "Update Parent",
        icon: <FaIcons.FaUserEdit />,
        path: "/update-Parent",
      },
      {
        title: "Parents List",
        icon: <BsIcons.BsPersonLinesFill />,
        path: "/parents-list",
      },
      {
        title: "Single Parent",
        icon: <IoIcons.IoIosMan />,
        path: "/single-parent",
      },
    ],
  },
  {
    title: "Courses",
    icon: <FaIcons.FaRegListAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Course",
        icon: <FiIcons.FiFileText />,
        path: "/add-course",
      },
      {
        title: "Update Course",
        icon: <FiIcons.FiEdit />,
        path: "/update-course",
      },
      {
        title: "Course List",
        icon: <FaIcons.FaRegFileAlt />,
        path: "/course-list",
      },
      {
        title: " Single Course",
        icon: <FiIcons.FiFileText />,
        path: "/single-course",
      },
    ],
  },

  {
    title: "Classes",
    icon: <FaIcons.FaChalkboardTeacher />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Class",
        icon: <FiIcons.FiFileText />,
        path: "/add-class",
      },
      {
        title: "Update Class",
        icon: <FiIcons.FiEdit />,
        path: "/update-class",
      },
      {
        title: "Class List",
        icon: <BsIcons.BsLayoutTextWindow />,
        path: "/class-list",
      },
      {
        title: "Single Class",
        icon: <BsIcons.BsCardList />,
        path: "/single-class",
      },
    ],
  },
  {
    title: "Services",
    path: "/services",
    icon: <ImIcons.ImPencil2 />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Service 1",
        path: "/services/services1",
        icon: <TbIcons.TbEar />,
        cName: "sub-nav",
      },
      {
        title: "Service 2",
        path: "/services/services2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Service 3",
        path: "/services/services3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Events",
    path: "/events",
    icon: <BsIcons.BsMegaphone />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Event 1",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 2",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
