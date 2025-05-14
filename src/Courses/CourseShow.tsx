/* eslint-disable prettier/prettier */
import { DateField, FunctionField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const CourseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <FunctionField
                label="Image"
                render={(record) => (
                    <img src={record.image} alt={record.name} style={{ width: 200 }} />
                )}
            />
            <TextField source="description" />
            <ReferenceField source="InstructorId" reference="instructors" ><TextField source='UserName' /></ReferenceField>
            <NumberField source="price" />
            <NumberField source="hours" />
            <DateField source="updatedAt" />
            <ReferenceField source="CategoryId" reference="categories" ><TextField source='categoryName' /></ReferenceField>
        </SimpleShowLayout>
    </Show>
);