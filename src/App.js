import { Routes, Route } from 'react-router-dom'
import './App.css';
//Components
import Sidebar from './components/sidenav/Sidebar';
//Pages
import Contact from './components/Contact';
import { Events, EventsOne, EventsTwo } from './components/Events';
import {
  Services, ServicesOne, ServicesTwo, ServicesThree,
} from "./components/Services";
import { About, OurAim, OurVision } from "./components/About";
//Teachers
import AddTeacher from "./pages/teachers/AddTeacher";
import UpdateTeacher from "./pages/teachers/UpdateTeacher";
import TeachersList from "./pages/teachers/TeachersList";
import SingleTeacher from "./pages/teachers/SingleTeacher";
//Students
import StudentsList from "./pages/students/StudentsList";
import UpdateStudent from "./pages/students/UpdateStudent";
import SingleStudent from "./pages/students/SingleStudent";
import AddStudent from "./pages/students/AddStudent";
//Courses
import AddCourse from "./pages/courses/AddCourse";
import UpdateCourse from "./pages/courses/UpdateCourse";
import CourseList from "./pages/courses/CourseList";
import SingleCourse from "./pages/courses/SingleCourse";
//Classes
import AddClass from "./pages/classes/AddClass";
import UpdateClass from "./pages/classes/UpdateClass";
import ClassList from './pages/classes/ClassList';
import SingleClass from './pages/classes/SingleClass';
//Parents
import AddParent from "./pages/parents/AddParent";
import UpdateParent from "./pages/parents/UpdateParent";
import ParentsList from "./pages/parents/ParentsList";
import SingleParent from "./pages/parents/SingleParent";





function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Sidebar />
      {/* <div className="container"> */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/about/aim" exact element={<OurAim />} />
        <Route path="/about/our-vision" exact element={<OurVision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/events1" exact element={<EventsOne />} />
        <Route path="/events/events2" exact element={<EventsTwo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/services1" exact element={<ServicesOne />} />
        <Route path="/services/services2" exact element={<ServicesTwo />} />
        <Route path="/services/services3" exact element={<ServicesThree />} />

        <Route path="/add-teacher" exact element={<AddTeacher />} />
        <Route path="/update-teacher" exact element={<UpdateTeacher />} />
        <Route path="/teachers-list" exact element={<TeachersList />} />
        <Route path="/single-teacher" exact element={<SingleTeacher />} />

        <Route path="/add-student" exact element={<AddStudent />} />
        <Route path="/update-student" exact element={<UpdateStudent />} />
        <Route path="/students-list" exact element={<StudentsList />} />
        <Route path="/single-student" exact element={<SingleStudent />} />

        <Route path="/add-parent" exact element={<AddParent />} />
        <Route path="/update-parent" exact element={<UpdateParent />} />
        <Route path="/parents-list" exact element={<ParentsList />} />
        <Route path="/single-parent" exact element={<SingleParent />} />

        <Route path="/add-course" exact element={<AddCourse />} />
        <Route path="/update-course" exact element={<UpdateCourse />} />
        <Route path="/course-list" exact element={<CourseList />} />
        <Route path="/single-course" exact element={<SingleCourse />} />

        <Route path="/add-class" exact element={<AddClass />} />
        <Route path="/update-class" exact element={<UpdateClass />} />
        <Route path="/class-list" exact element={<ClassList />} />
        <Route path="/single-class" exact element={<SingleClass />} />
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
