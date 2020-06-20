import React from "react";
import { Line } from "shared/base/line";

import { images } from "./images";

import "./Card.scss";

interface CardProps {
  className?: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  description,
  title,
}) => {
  return (
    <div className={`Card ${className}`}>
      <Line w="100" h="100" vertical>
        <Line h="75" justifyContent="center">
          <img
            className="img"
            alt=""
            src={images[Math.floor(Math.random() * Math.floor(7))]}
          ></img>
        </Line>
        <div>{title}</div>
        <div className="Description">{description}</div>
      </Line>
    </div>
  );
};
