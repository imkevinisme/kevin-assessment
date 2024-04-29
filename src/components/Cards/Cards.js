import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

function Cards({ id, name, description }) {
  return (
    <Card id="card">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">ID: {id}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Name: {name}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <p>Description: {description}</p>
      </CardFooter>
    </Card>
  );
}

export default Cards;
