import React from 'react'
import './{{pascalCase name}}.scss'

interface {{pascalCase name}}Props {
  className?: string
}

const {{pascalCase name}}: React.FunctionComponent<{{pascalCase name}}Props> = ({ className }) => {
  return <div className={`${{{pascalCase name}}} ${className}`}>{{pascalCase name}}</div>
}


export default {{pascalCase name}}
