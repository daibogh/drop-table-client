import useSWR from "swr";
import { baseUrl } from "app/constants";
import { Program } from "data/programs/model";
import React from "react";
import { Line } from "shared/base";
import { Card } from "app/Card/Card";
import { Paginator } from "app/Paginator/Paginator";
import { chunk } from "lodash";

interface ProgrammsListProps {
  category?: string | null;
}

export const ProgrammsList = (props: ProgrammsListProps) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProgramsAsync({}));
  // }, []);
  // const programs = useSelector((state: StoreType) => state.programs.programs)
  const esc = encodeURIComponent;
  const params = Object.keys(props)
    .map((k) => {
      return params && params[k] ? esc(k) + "=" + esc(props[k]) : "";
    })
    .join("&");
  const { data: programs, error } = useSWR<any, Program[]>(
    `${baseUrl}/program`,
    async (url: string) => (await fetch(`${url}?${params}`)).json()
  );
  // const d = useMemo(() => calculateGraphData(data || []), [data]);
  console.log(error);

  if (!programs) {
    return <>данные обрабатываются... </>;
  }

  const chunkedPrograms = chunk(programs, 4);
  
  return (
    <Line vertical>
      {chunkedPrograms.map((chunk, idx) => (
        <Line key={idx}>
          {chunk.map((program, pidx) => (
            <Line pb="1" w="25" key={`program-${idx}-${pidx}`}>
              <Card
                title={program['name']}
                description={`${program['disciplines']} дисциплин`}
              ></Card>
            </Line>
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