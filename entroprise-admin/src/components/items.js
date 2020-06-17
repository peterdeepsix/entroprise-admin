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
  ArrayField,
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
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  NumberField,
} from "react-admin"
import RichTextInput from "ra-input-rich-text"

export const ItemList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <ShowButton label="View" />
      <EditButton label="Edit" />
      <DeleteButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
)

export const ItemShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="item_id" />
      <DateField source="createdate" options={{ disabled: true }} />
      <DateField source="lastupdate" options={{ disabled: true }} />
      <TextField source="name" />
      <RichTextField source="content" />
      <TextField source="question" />
      <NumberField source="confidence" />
      <ArrayField source="correct_answers">
        <Datagrid>
          <TextField source="correct_answer" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="incorrect_answers">
        <Datagrid>
          <TextField source="incorrect_answer" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
)

export const ItemCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="item_id" />
      <TextInput source="name" />
      <RichTextInput source="content" />
      <TextInput source="question" />
      <NumberInput source="confidence" min={0} max={1} />
      <ArrayInput source="correct_answers">
        <SimpleFormIterator>
          <TextInput source="correct_answer" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="incorrect_answers">
        <SimpleFormIterator>
          <TextInput source="incorrect_answer" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
)

export const ItemEdit = props => (
  <Edit {...props}>
    <SimpleForm warnWhenUnsavedChanges redirect={false}>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="item_id" options={{ disabled: true }} />
      <DateInput source="createdate" options={{ disabled: true }} />
      <DateInput source="lastupdate" options={{ disabled: true }} />
      <TextInput source="name" />
      <RichTextInput label="" source="content" />
      <TextInput source="question" />
      <NumberInput source="confidence" min={0} max={1} />
      <ArrayInput source="correct_answers">
        <SimpleFormIterator>
          <TextInput source="correct_answer" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput label="Incorrect Answers" source="incorrect_answers">
        <SimpleFormIterator>
          <TextInput source="incorrect_answer" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
)
