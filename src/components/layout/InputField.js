import { Form, FormGroup, Label, Input } from "reactstrap";

function NewMeetupForm(props) {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">{props.name}111</Label>
          <Input
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            type={props.type}
          />
        </FormGroup>
      </Form>
    </div>
  );
}

export default NewMeetupForm;
