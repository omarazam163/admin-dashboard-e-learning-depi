/* eslint-disable prettier/prettier */
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const InstructorEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="image" />
            <TextInput source="email" />
            <TextInput source="bio" />
        </SimpleForm>
    </Edit>
);