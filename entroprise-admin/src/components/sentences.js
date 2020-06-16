// in src/Comments.js
import * as React from "react"
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateInput,
  DateField,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
} from "react-admin"
import RichTextInput from "ra-input-rich-text"

export const SentenceList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" />
      <RichTextField source="body" />
      <ShowButton label="View" />
      <EditButton label="Edit" />
      <DeleteButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
)

export const SentenceShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RichTextField source="body" />
      <DateField source="createdate" options={{ disabled: true }} />
      <DateField source="lastupdate" options={{ disabled: true }} />
    </SimpleShowLayout>
  </Show>
)

export const SentenceCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <RichTextInput source="body" />
      <SelectInput
        source="rating"
        choices={[
          { id: 1, name: "Good" },
          { id: 2, name: "Okay" },
          { id: 3, name: "Bad" },
        ]}
      />
    </SimpleForm>
  </Create>
)

export const SentenceEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" options={{ disabled: true }} />
      <DateInput source="createdate" options={{ disabled: true }} />
      <DateInput source="lastupdate" options={{ disabled: true }} />
      <TextInput source="title" />
      <RichTextInput source="body" />
      <SelectInput
        source="rating"
        choices={[
          { id: 1, name: "Good" },
          { id: 2, name: "Okay" },
          { id: 3, name: "Bad" },
        ]}
      />
    </SimpleForm>
  </Edit>
)
