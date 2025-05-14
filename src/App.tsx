/* eslint-disable prettier/prettier */
import { Admin, Create, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";
import CourseList from "./Courses/CourseList";
import InstructorList from "./Instructors/InstructorList";
import { InstructorShow } from "./Instructors/InstructorShow";
import { InstructorEdit } from "./Instructors/InstructorEdit";
import { CourseShow } from "./Courses/CourseShow";
import { CourseEdit } from "./Courses/CourseEdit";
import { UnapprovedInstructorList } from "./Instructors/UnapprovedInstructors";
import CategoryList from "./Categories/CategoryList";
import { CategoryEdit } from "./Categories/CategoryEdit";
import { CategoryCreate } from "./Categories/CategoryCreate";

export const App = () => {
   return (
     <Admin
       layout={Layout}
       dataProvider={dataProvider}
       authProvider={authProvider}
     >
       <Resource
         name="courses"
         list={CourseList}
         edit={CourseEdit}
         show={CourseShow}
         create={Create}
       />
       <Resource
         name="Categories"
         list={CategoryList}
         edit={CategoryEdit}
         create={CategoryCreate}
         recordRepresentation="name"
         options={{ label: "Categories" }}
       />
       <Resource
         name="instructors"
         list={InstructorList}
         edit={InstructorEdit}
         show={InstructorShow}
         create={Create}
       />
       <Resource
         name="Admin/InstructorNotApproved"
         list={UnapprovedInstructorList}
         options={{ label: "Unapproved Instructors" }}
       />
     </Admin>
   );
};
