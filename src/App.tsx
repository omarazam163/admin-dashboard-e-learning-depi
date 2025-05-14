/* eslint-disable prettier/prettier */
import { Admin, Create, ListGuesser, Resource } from "react-admin";
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

export const App = () => {
   return (
      <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider}>
         <Resource 
            name="courses" 
            list={CourseList} 
            edit={CourseEdit} 
            show={CourseShow} 
            create={Create}
         />
         <Resource name="categories" list={ListGuesser} />
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
            options={{ label: 'Unapproved Instructors' }}
         />
      </Admin>
   );
};
