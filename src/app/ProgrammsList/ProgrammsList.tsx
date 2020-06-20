import React, { useCallback, useEffect, useMemo } from "react";
import { Line } from "shared/base";
import { Card } from "app/Card/Card";
import { Paginator } from "app/Paginator/Paginator";
import { useDispatch, useStore, useSelector } from "react-redux";
import { getProgramsAsync } from "data/programs/actions";
import { StoreType } from "core/store";
import chunk from "lodash/fp/chunk";

interface ProgramListProps {
  className?: string;
  category?: string;
}

export const ProgrammsList: React.FC<ProgramListProps> = ({
  className,
  category,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProgramsAsync({ category }));
  }, [dispatch, category]);

  const programs = useSelector((state: StoreType) => state.programs.programs);

  console.log({ programs });

  // const list = useMemo(() => {
  //   return category == "all"
  //     ? programs
  //     : programs.flatMap((x) => (x.category == category ? [x] : []));
  // }, [programs, category]);

  const chunkedPrograms = chunk(4, programs);
  return (
    <Line h="100" vertical>
      {chunkedPrograms.map((chunk, idx) => (
        <Line h='50' key={idx}>
          {chunk.map((program, pidx) => (
            <Card
              id={program.id}
              key={`program-${idx}-${pidx}`}
              title={program.name}
              description={`${program.disciplines} дисциплин`}
            />
          ))}
        </Line>
      ))}

      <Line mt="2" mb="2" justifyContent="end">
        <Paginator
          page={{
            items: [],
            totalItems: programs?.length,
            totalPages: programs.length / 8,
            currentPage: 1,
            pageSize: 8,
          }}
          setPage={() => {
            console.log();
          }}
        ></Paginator>
      </Line>
    </Line>
  );
};