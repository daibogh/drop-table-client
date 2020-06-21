import React, { useEffect, useState, useCallback } from 'react';
import { Line } from 'shared/base/line';
import { useMatchParams } from 'core/router';
import { useSelector, useDispatch } from 'react-redux';
import { StoreType } from 'core/store';
import { Program } from 'data/programs/model';
import { Page } from 'app/page/Page/Page';
import { Button } from 'shared/base';
import { useHistory } from 'react-router';
import { Pie } from 'react-chartjs-2';
import { StudentsByYearChart } from 'app/StudentsByYearChart/StudentsByYearChart';
import './ResultPage.scss';
import { getProgramAsync } from 'data/programs/actions';

interface ResultPageProps {
  className?: string;
}

const backgroundColor = [
  '#CBD4C2',
  '#DBEBC0',
  '#C3B299',
  '#815355',
  '#523249',
  '#AA78A6',
  '#266DD3',
  '#344055',
  '#344055',
  '#DFC2F2'
];

const labels = [
  'Востребованность на рынке труда',
  'Средний уровень капитализации выпускника',
  'Релевантность транслируемого знания',
  'Текущий контроль успеваемости',
  'Промежжуточная аттестация',
  'Показатели научной и инновационной активности',
  'Использование инновационных образовательных технологий',
  'Инновационные проекты',
  'P2P оценка',
  'Оценка качества преподавания',
];

export const ResultPage: React.FC<ResultPageProps> = ({ className }) => {
  const params = useMatchParams<{ id: number }>();
  const history = useHistory();
  const dispatch = useDispatch();

  const model = useSelector((state: StoreType) => state.programs.program);

  useEffect(() => {
    if (params?.id) dispatch(getProgramAsync({ id: params.id }));
  }, [params, dispatch]);

  const onChange = useCallback(() => {
    if (params?.id != null) history.push(`/create/${params.id}`);
  }, [history, params]);

  return (
    <Page title="Результаты анализа программы">
      {model && <Line h="100" vertical pt="2" w="100" className={`ResultPage ${className}`}>
        <Line vertical h="50" mb="1">
          <Line vertical>
            <div className="Title">{model?.name}</div>
            <div className="Cod">09.03.04</div>
          </Line>
          <Line>
          <Line mt="2" h="75" w="100">
            <Line w="50" className="Block" p="2" vertical>
              <div className="sector-title">Паспорт программы</div>
              <Line vertical className="field" mb="2">
                <div className="description-title">Описание</div>
                <div className="description">{model?.description?.slice(0, 400) ?? ''}</div>
              </Line>
              <Line className="field" mb="2" alignItems="center">
                <div><span className="description-title">Количество академических часов:</span> {model?.hours}</div>
              </Line>
              <Line className="field" mb="2" alignItems="center">
                <div><span className="description-title">Количество дисциплин:</span> {model?.disciplines?.length ?? 0}</div>
              </Line>
              <Line justifyContent="end" mr="2" mt="4">
                <Button small btn="secondary" className="change-button" onClick={onChange}>
                  Изменить
              </Button>
              </Line>
            </Line>
            <Line w="50" className="Block" p="2" vertical>
            <div className="sector-title">Веса критериев</div>
            <Pie
              data={{
                labels,
                datasets: [{ backgroundColor, data: model.parameters?.map(x => parseInt(x.value) * x.weight) ?? [] }]
              }}
              options={{
                legend: {
                  display: false
                }
              }}
            />
          </Line>
          </Line>
        </Line>
        </Line>
        <Line mt="1" h="50" className="Block" p="2" vertical>
          <Line>
            <Line w="50" vertical className="criteries" mr="2">
              <Line className="sector-title" mb="2">Критерии анализа</Line>
              {model?.parameters.map((x, i) => (
                <Line justifyContent="between" key={i}>
                  <div>{x.name}</div>
                  <div className="value">{x.value ?? ''}</div>
                </Line>))}
            </Line>
            <Line w="50" className="Block" ml="4">
              <StudentsByYearChart />
            </Line>
          </Line>
        </Line>
      </Line>}
    </Page>
  );
};
