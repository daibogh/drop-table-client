import React, { useCallback, useEffect, useState } from 'react';
import { Line } from 'shared/base/line';
import { TextBoxField } from 'shared/fields/textBoxField';
import { Page } from 'app/page/Page/Page';
import { TextareaField } from 'shared/fields/textareaField';
import { Button } from 'shared/base/button';
import { Icon } from 'shared/base';
import { useMatchParams } from 'core/router';
import { Program } from 'data/programs/model';
import { StoreType } from 'core/store';
import { useSelector, useDispatch } from 'react-redux';

import './ProgramPage.scss';

const criteria = [
  { id: 1, name: 'Востребованность на рынке труда', weight: 0.1 },
  { id: 2, name: 'Средний уровень капитализации выпускника', weight: 0.1 },
  { id: 3, name: 'Релевантность транслируемого знания', weight: 0.1 },
  { id: 4, name: 'Текущий контроль успеваемости', weight: 0.1 },
  { id: 5, name: 'Промежжуточная аттестация', weight: 0.1 },
  { id: 6, name: 'Показатели научной и инновационной активности', weight: 0.1 },
  { id: 7, name: 'Использование инновационных образовательных технологий', weight: 0.1 },
  { id: 8, name: 'Инновационные проекты', weight: 0.1 },
  { id: 9, name: 'P2P оценка', weight: 0.1 },
  { id: 10, name: 'Оценка качества преподавания', weight: 0.1 },
];

const disciplines = [
  { id: 1, name: 'Безопасность жизнедеятельности' },
  { id: 2, name: 'Физическая культура' },
  { id: 3, name: 'Экономическая теория' },
  { id: 4, name: 'Психология' },
  { id: 5, name: 'Философия' },
  { id: 6, name: 'Социология' }
];

export const ProgramPage: React.FC = () => {
  const getCriteriaCard = useCallback((criteria) => {
    return (
      <Line key={criteria.id} className="criteria-card" alignItems="center" justifyContent="between">
        <div className="criteria-name">{criteria.name}</div>
         <TextBoxField w="25" name="criteria-weight" value={criteria.weight} onChange={() => {}} type="number" inline>вес</TextBoxField>
      </Line>
    );
  }, []);

  const getDisciplineCard = useCallback((discipline) => {
    return (
      <Line key={discipline.id} className="discipline-card" alignItems="center" justifyContent="between">
        <div className="criteria-name">{discipline.name}</div>
        <Icon name="times" className="icon"></Icon>
      </Line>
    );
  }, []);

  return (
    <Page title="Добавление образовательной программы">
    <Line className="ProgramPage" vertical>
      <Line>
      <Line vertical w="50" mr="5">
        <div className="part-title">Паспорт программы</div>
        <TextBoxField name="title" value="Программная инженерия" onChange={() => {}} mb="2">
          Название
        </TextBoxField>
        <TextareaField name="description" value="Описание" onChange={() => {}}>
          Описание
        </TextareaField>
        <TextBoxField name="hours" value="1000" onChange={() => {}} type="number" mt="2">
          Количество академических часов
        </TextBoxField>
        <Line className="part-title" mt="3">Дисциплины</Line>
        {disciplines.map(x => getDisciplineCard(x))}
      </Line>
      <Line vertical w="50">
        <div className="part-title">Веса критериев анализа</div>
        {criteria.map((x) => getCriteriaCard(x))}
      </Line>
    </Line>
    </Line>
    <Line justifyContent="end" mt="3"><Button btn="primary">Сохранить</Button></Line>
    </Page>
  );
};

