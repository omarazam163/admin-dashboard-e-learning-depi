/* eslint-disable prettier/prettier */
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Button,
  useNotify,
  useRefresh,
  useDataProvider,
} from "react-admin";
import { useRecordContext } from "react-admin";

const ApproveButton = () => {
  const record = useRecordContext();
  const notify = useNotify();
  const refresh = useRefresh();
  const dataProvider = useDataProvider();

  const handleApprove = async () => {
    try {
      if (!record) {
        notify("Record not found", { type: "warning" });
        return;
      }
      await dataProvider.create(`Admin/ApprovedInstructor/${record.id}`, {
        data: {}
      });
      notify("Instructor approved successfully", { type: "success" });
      refresh();
    } catch (error) {
      notify("Error approving instructor", { type: "error" });
      console.error(error);
    }
  };

  return <Button label="Approve" onClick={handleApprove} color="primary" />;
};

export const UnapprovedInstructorList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="image" />
      <EmailField source="email" />
      <TextField source="bio" />
      <ApproveButton />
    </Datagrid>
  </List>
);
