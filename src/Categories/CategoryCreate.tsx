/* eslint-disable prettier/prettier */
import {
    Create,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";

export const CategoryCreate = () => (
  <Create resource="Categories">
    <SimpleForm>
      <TextInput source="name" label="Name" validate={[required()]} fullWidth />
    </SimpleForm>
  </Create>
); 