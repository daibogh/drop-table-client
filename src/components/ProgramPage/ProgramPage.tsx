import React, { useCallback } from 'react'
import { Line } from '../shared/base/Line'
import { TextBoxField } from '../shared/fields/textBoxField'
import { TextareaField } from '../shared/fields/textareaField'

import './ProgramPage.scss'

interface ProgramPageProps {
  className?: string
}

const criteria = [
  { id: 1, name: 'Критерий 1', weight: 0.1 },
  { id: 2, name: 'Критерий 2', weight: 0.1 },
  { id: 3, name: 'Критерий 3', weight: 0.1 },
  { id: 4, name: 'Критерий 4', weight: 0.1 },
  { id: 5, name: 'Критерий 5', weight: 0.1 },
  { id: 6, name: 'Критерий 6', weight: 0.1 },
  { id: 7, name: 'Критерий 7', weight: 0.1 },
  { id: 8, name: 'Критерий 8', weight: 0.1 },
  { id: 9, name: 'Критерий 9', weight: 0.1 },
  { id: 10, name: 'Критерий 10', weight: 0.1 },
]

const ProgramPage: React.FunctionComponent<ProgramPageProps> = ({
  className,
}) => {
  const getCriteriaCard = useCallback((criteria) => {
    return (
      <Line
        key={criteria.id}
        className="criteria-card"
        alignItems="center"
        justifyContent="between"
      >
        <div className="criteria-name">{criteria.name}</div>
        <TextBoxField
          name="criteria-weight"
          value={criteria.weight}
          onChange={() => {}}
          type="number"
          w="25"
        />
      </Line>
    )
  }, [])

  return (
    <Line className="ProgramPage">
      <Line vertical w="50">
        <div className="part-title">Паспорт программы</div>
        <TextBoxField
          name="title"
          value="Программная инженерия"
          onChange={() => {}}
        >
          Название
        </TextBoxField>
        <TextareaField
          name="description"
          value="Очень хорошая программа всем советую"
          onChange={() => {}}
        >
          Описание
        </TextareaField>
        <TextBoxField
          name="hours"
          value="1000"
          onChange={() => {}}
          type="number"
        >
          Количество академических часов
        </TextBoxField>
        <Line>Дисциплины</Line>
      </Line>
      <Line vertical w="50">
        <div className="part-title">Веса критериев анализа</div>
        {criteria.map((x) => getCriteriaCard(x))}
      </Line>
    </Line>
  )
}

export default ProgramPage
