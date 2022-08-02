import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";
const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  return (
    <div className="p-4 bg-info mt-4">
      <Form>
        <Row>
          <Col>
           Hello <>passenger name</>
          </Col>
          <Col>
           <>passenger pnr</>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters;
