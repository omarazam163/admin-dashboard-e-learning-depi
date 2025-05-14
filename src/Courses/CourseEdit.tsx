/* eslint-disable prettier/prettier */
import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CourseEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="image" />
            <TextInput source="description" />
            <ReferenceInput source="InstructorId" reference="instructors" />
            <NumberInput source="price" />
            <NumberInput source="hours" />
            <DateInput source="updatedAt" />
            <ReferenceInput source="CategoryId" reference="categories" />
        </SimpleForm>
    </Edit>
);