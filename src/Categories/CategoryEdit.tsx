/* eslint-disable prettier/prettier */
import {
    Edit,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";

export const CategoryEdit = () => (
  <Edit resource="Categories">
    <SimpleForm>
      <TextInput source="name" label="Name" validate={[required()]} fullWidth />
    </SimpleForm>
  </Edit>
); 