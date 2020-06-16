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
      <TextField source="id" />
      <DateField source="createdate" options={{ disabled: true }} />
      <DateField source="lastupdate" options={{ disabled: true }} />
      <TextField source="name" />
      <RichTextField source="content" />
      <RichTextField source="question" />
      <NumberField source="confidence" />
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
      <DateField source="createdate" options={{ disabled: true }} />
      <DateField source="lastupdate" options={{ disabled: true }} />
      <TextField source="name" />
      <RichTextField source="content" />
      <RichTextField source="question" />
      <NumberField source="confidence" />
      <ArrayField source="correct_answers">
        <Datagrid>
          <RichTextField source="correct_answer" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="incorrect_answers">
        <Datagrid>
          <RichTextField source="incorrect_answer" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
)

export const ItemCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <RichTextInput source="content" />
      <RichTextInput source="question" />
      <NumberInput source="confidence" min={0} max={1} />
      <ArrayInput source="correct_answers">
        <SimpleFormIterator>
          <RichTextInput source="correct_answer" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="incorrect_answers">
        <SimpleFormIterator>
          <RichTextInput source="incorrect_answer" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
)

export const ItemEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <RichTextInput source="content" />
      <RichTextInput source="question" />
      <NumberInput source="confidence" min={0} max={1} />
      <ArrayInput source="correct_answers">
        <SimpleFormIterator>
          <RichTextInput source="correct_answer" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="incorrect_answers">
        <SimpleFormIterator>
          <RichTextInput source="incorrect_answer" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
)
