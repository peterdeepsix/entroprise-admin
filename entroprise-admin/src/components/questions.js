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

export const QuestionList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="question" />
      <ShowButton label="View" />
      <EditButton label="Edit" />
      <DeleteButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
)

export const QuestionShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="question" />
      {/* <DateField source="created_at" options={{ disabled: true }} />
      <DateField source="updated_at" options={{ disabled: true }} />
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
      </ArrayField> */}
    </SimpleShowLayout>
  </Show>
)

export const QuestionCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="question" />
      {/* <RichTextInput source="content" />
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
      </ArrayInput> */}
    </SimpleForm>
  </Create>
)

export const QuestionEdit = props => (
  <Edit {...props}>
    <SimpleForm warnWhenUnsavedChanges redirect={false}>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="question" />
      {/* <DateInput source="created_at" options={{ disabled: true }} />
      <DateInput source="updated_at" options={{ disabled: true }} />
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
      </ArrayInput> */}
    </SimpleForm>
  </Edit>
)
