import React, { useEffect, useState } from 'react';
import { Line } from 'shared/base/line';
import { useMatchParams } from 'core/router';
import { useSelector } from 'react-redux';
import { StoreType } from 'core/store';
import { Program } from 'data/programs/model';
import { Page } from 'app/page/Page/Page';

import './ResultPage.scss';

interface ResultPageProps {
  className?: string;
}

export const ResultPage: React.FC<ResultPageProps> = ({ className }) => {
  const params = useMatchParams<{id: number}>();
  const [model, setModel] = useState<Program>();

  const list = useSelector((state: StoreType) => state.programs.programs);

  useEffect(() => {
    if (params?.id) {
      const item = list.find(x => x.id == params.id);
      if (item) setModel(item);
    }
  }, [params, list]);
  console.log(model);
  
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
              <div>Описание</div>
              <div>{model?.description}</div>
            </Line>
            <Line className="field" mb="2">Количество академических часов: {model?.hours}</Line>
            <Line className="field" mb="2">Количество дисциплин: {model?.disciplines.length}</Line>
          </Line>
          <Line w="50" className="Block" p="2">
            <div className="sector-title">Веса критериев</div>
          </Line>
        </Line>
      </Line>
      <Line mb="2" h="50" className="Block" p="2">
      <div className="sector-title">Критерии анализа</div>
      </Line>
    </Line>
    </Page>
  );
};
