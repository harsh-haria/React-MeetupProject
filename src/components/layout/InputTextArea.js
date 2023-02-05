import { FormGroup, Label, Col, Input } from "reactstrap";

function InputTextArea(props) {
  return (
    <FormGroup row>
      <Label for="exampleText" sm={2}>
        {props.name}
      </Label>
      <Col sm={10}>
        <Input id="exampleText" name="text" type="textarea" />
      </Col>
    </FormGroup>
  );
}

export default InputTextArea;
