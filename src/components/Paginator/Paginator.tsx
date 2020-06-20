import React, { useMemo } from 'react'
import{ Page} from './page'

import './Paginator.scss'
import classNames from 'classnames'

interface PaginatorProps<T extends  number | string> {
  className?: string
  page: Page<T>;
  setPage: (value: number) => void;
}

export const Paginator = <T extends  number | string>({ page, setPage }: PaginatorProps<T>) => {
  const delta = 2

  const pages = useMemo(() => {
    const list = [{ number: 1, skip: false }]
    const start = Math.max(page.currentPage - delta, 2)
    const end = Math.min(page.currentPage + delta, page.totalPages)
    if (start - 1 > 1) list.push({ number: start - 1, skip: true })
    for (let i = start; i <= end; i++) list.push({ number: i, skip: false })
    if (page.totalPages - end > 0) {
      if (page.totalPages - end > 1) list.push({ number: page.totalPages - 1, skip: true })
      list.push({ number: page.totalPages, skip: false })
    }
    return list
  }, [page.currentPage, page.totalPages])

  const links = pages.map(p => {
    if (p.skip) {
      return (
        <div key={p.number} className="page-item pagination-ellipsis">
          <li className="page-link">
            <span>&hellip;</span>
          </li>
        </div>
      )
    }
    return (
      <li key={p.number} className={classNames('page-item', (page.currentPage ?? 1) == p.number ? 'active' : '')}>
        <button className="page-link" onClick={() => setPage(p.number)}>
          {p.number}
        </button>
      </li>
    )
  })

  
  return <nav className='Paginator'>{page.totalItems > 0 && <ul className="pagination">{links}</ul>}</nav>

}


export default Paginator