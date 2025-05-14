/* eslint-disable prettier/prettier */
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    useRecordContext,
    useNotify,
    useRefresh,
    Button,
    useDataProvider,
} from "react-admin";

const DeleteCategoryButton = () => {
    const record = useRecordContext();
    const notify = useNotify();
    const refresh = useRefresh();
    const dataProvider = useDataProvider();

    const handleDelete = async () => {
        try {
            await dataProvider.delete('Categories', { 
                id: record.categoryId,
            });
            notify('Category deleted successfully', { type: 'success' });
            refresh();
        } catch (error) {
            notify('Error deleting category', { type: 'error' });
            console.error(error);
        }
    };

    return (
        <Button
            label="Delete"
            onClick={handleDelete}
            color="error"
        />
    );
};

const CategoryList = () => (
    <List resource="Categories">
        <Datagrid rowClick="edit">
            <TextField source="categoryId" />
            <TextField source="categoryName" label="Name" />
            <EditButton />
            <DeleteCategoryButton />
        </Datagrid>
    </List>
);

export default CategoryList; 