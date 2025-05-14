/* eslint-disable prettier/prettier */
import { Datagrid, DateField, EditButton, FunctionField, List, NumberField, ReferenceField, TextField, useRecordContext } from 'react-admin';

const CourseList = () => {

    const CoursePanel = () => {
        const record = useRecordContext();
        return <div>{record?.description}</div>
};

    return ( <List>
        <Datagrid expand={<CoursePanel />}>
            <TextField source="id" />
            <TextField source="title" />
            <FunctionField
                label="Image"
                render={(record) => (
                    <img src={record.image} alt={record.name} style={{ width: 50, height: 50 }} />
                )}
            />
            <FunctionField label="description" render={(record) => `${record.description?.substring(0, 30) || ''}...`} />
            <ReferenceField source="InstructorId" reference="instructors" > <TextField source='UserName' /> </ReferenceField>
            <NumberField source="price" />
            <NumberField source="hours" />
            <DateField source="updatedAt" />
            <ReferenceField source="CategoryId" reference="categories" />
            <EditButton />
        </Datagrid>
    </List>
);
};

export default CourseList;
