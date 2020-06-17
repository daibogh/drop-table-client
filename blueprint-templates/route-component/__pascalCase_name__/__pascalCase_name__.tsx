import React from 'react'
import { createPage } from '../../libs/ssr/createPage'
import { {{pascalCase name}}Atom, {{pascalCase name}}Actions, use{{pascalCase name}} } from './{{pascalCase name}}.model'
import { Helmet } from 'react-helmet-async'
import SEOTextContainer from '../../containers/SEOTextContainer'
import { Store, getState } from '@reatom/core'
export interface {{pascalCase name}}Props {}
const {{pascalCase name}}: React.FC<{{pascalCase name}}Props> = () => {
  const posts = use{{pascalCase name}}()
  return (
    <div className="{{pascalCase name}}">
      {{pascalCase name}}
    </div>
  )
}

export default createPage({{pascalCase name}}, {
  model: {{pascalCase name}}Atom,
  getInitialData: (dispatch: any) => dispatch({{pascalCase name}}Actions()),
  // eslint-disable-next-line react/display-name
  renderMetaTags: async (url: string, getStore: () => Promise<Store>) => {
    const data = getState((await getStore()).getState(), {{pascalCase name}}Atom) // использовать в случае, когда seo данные нуждаются в side effects
    return (
      <Helmet>
        {SEOTextContainer({
          title: '{{pascalCase name}}Actions title',
          description: `{{pascalCase name}}Actions description`,
        })}
      </Helmet>
    )
  },
})