import React, { useCallback } from "react";
import { Line } from "shared/base/line";
import { useHistory } from "react-router";

import { images } from "./images";
import "./Card.scss";

interface CardProps {
  className?: string;
  id: number;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  id,
  description,
  title,
}) => {
  const history = useHistory();

  const onClick = useCallback(
    (id: number) =>
      history.push(`/result/${id}`),
    [history]
  );

  return (
    <div className={`Card ${className}`} onClick={() => onClick(id)}>
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
