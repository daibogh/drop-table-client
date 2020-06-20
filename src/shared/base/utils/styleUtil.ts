export interface StyleProps {
  btn?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-light'
    | 'outline-dark'
    | 'outline-link';
}

export function propsToStyle(props: StyleProps) {
  const { btn } = props;

  delete props.btn;

  return {
    [`btn-${btn}`]: btn != null
  };
}
