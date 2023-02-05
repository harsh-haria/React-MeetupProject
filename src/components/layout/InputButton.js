import { Button } from "reactstrap";

function InputButton(props) {
  return (
    <Button color="info" outline>
      {props.name}
    </Button>
  );
}

export default InputButton;
