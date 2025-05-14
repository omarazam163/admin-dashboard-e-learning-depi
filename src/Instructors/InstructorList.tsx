/* eslint-disable prettier/prettier */
import { Datagrid, EditButton, EmailField, FunctionField, List, TextField } from 'react-admin';

const InstructorList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <FunctionField
                label="Image"
                render={(record) => (
                    <img src={record.image} alt={record.name} style={{ width: 50, height: 50, objectFit: 'cover' }} />
                )}
            />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="bio" />
            <EditButton />
        </Datagrid>
    </List>
);

export default InstructorList;
