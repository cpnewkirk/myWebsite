import { Collapse, Button, CardBody, Card } from "reactstrap";
import { useState } from "react";

function CollapseContainer(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        color="primary w-100"
        onClick={toggle}
        style={{ marginBottom: "0.5rem", marginTop: "0.5rem" }}
      >
        {props.button}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>{props.children}</CardBody>
        </Card>
      </Collapse>
    </>
  );
}

export default CollapseContainer;
