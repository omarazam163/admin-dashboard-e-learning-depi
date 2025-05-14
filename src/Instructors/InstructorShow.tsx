/* eslint-disable prettier/prettier */
import { EmailField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const InstructorShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="image" />
            <EmailField source="email" />
            <TextField source="bio" />
        </SimpleShowLayout>
    </Show>
);