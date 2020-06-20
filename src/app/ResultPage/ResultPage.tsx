import React, { useEffect, useState, useCallback } from 'react';
import { Line } from 'shared/base/line';
import { useMatchParams } from 'core/router';
import { useSelector } from 'react-redux';
import { StoreType } from 'core/store';
import { Program } from 'data/programs/model';
import { Page } from 'app/page/Page/Page';
import { Button } from 'shared/base';
import { useHistory } from 'react-router';
import { Pie } from 'react-chartjs-2';

import './ResultPage.scss';

interface ResultPageProps {
  className?: string;
}

const backgroundColor =  [
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
  const params = useMatchParams<{id: number}>();
  const [model, setModel] = useState<Program>();
  const [values, setValues] = useState<number[]>([]);
  const history = useHistory();

  const list = useSelector((state: StoreType) => state.programs.programs);

  useEffect(() => {
    if (params?.id) {
      const item = list.find(x => x.id == params.id);
      if (item) {
        setModel(item);
        setValues(item.parameters.map(x => parseInt(x.value) * x.weight));
      }
    }
  }, [params, list]);

  console.log(values);

  const onChange = useCallback(() => {
    debugger;
    if (params?.id != null) history.push(`/create/${params.id}`);
  }, [history, params]);

  return (
    <Page title="Результаты анализа программы">
    <Line h="100" vertical pt="3" w="100" className={`ResultPage ${className}`}>
      <Line vertical h="50" mb="2">
        <Line vertical>
          <div className="Title">{model?.name}</div>
          <div className="Cod">09.03.04</div>
        </Line>
        <Line mt="4" h="75" w="100">
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
              <div><span className="description-title">Количество дисциплин:</span> {model?.disciplines.length}</div>
            </Line>
            <Line justifyContent="end" mr="2" mt="4">
              <Button small btn="secondary" className="change-button" onClick={onChange}>
                Изменить
              </Button>
            </Line>
          </Line>
          <Line w="50" className="Block" p="2" vertical>
            <div className="sector-title">Веса критериев</div>
            {values.length > 0 && <Pie
              data={{
                labels,
                datasets: [{backgroundColor, data: values}]
              }}
              options={{
                legend:{
                  display: false
                }
            }}
          />}
          </Line>
        </Line>
      </Line>
      <Line mb="2" h="50" className="Block" p="2" vertical>
        <Line className="sector-title" mb="2">Критерии анализа</Line>
          <Line>
            <Line w="50" vertical className="criteries" mr="2">
              {model?.parameters.map((x, i) => (
              <Line justifyContent="between" key={i}>
                <div>{x.name}</div>
                <div className="value">{x.value ?? ''}</div>
              </Line>))}
            </Line>
            <Line>Line graph</Line>
        </Line>
      </Line>
    </Line>
    </Page>
  );
};
