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
        style={{
          backgroundColor: "#6fb3b8",
          borderColor: "#6fb3b8",
          boxShadow: "0 1px 6px rgba(0, 0, 0, 0.25)",
          marginBottom: "0.5rem",
          marginTop: "0.5rem",
        }}
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
