import React, {Fragment, useState, useEffect} from 'react'

import { utils } from '../../utils/js'
import { Button, Icon } from '../../'

const Pagination = ({children, className, hide, onChange, ...props}) => {
  if (hide) return null

  const [size, setSize] = useState(props.size);
  const [page, setPage] = useState(props.page);
  const [step, setStep] = useState(props.step);

  useEffect(() => {
    onChange(page)
  }, [page])

  let c = (
    'Pagination'+
    (className?' '+className:'')
  )

  const buttonClass = i => {
    return page === i ? 'active':''
  }
  const createLeft = () => {
    return <Button onClick={() => prevPage()}><Icon name="arrow-left"/></Button>
  }
  const createRight = () => {
    return <Button onClick={() => nextPage()}><Icon name="arrow-right"/></Button>
  }

  const createFirst = () => {
    return (
      <Fragment>
        <Button className={buttonClass(1)} onClick={(e) => changePage(e)}>1</Button>
        <span>...</span>
      </Fragment>
    )
  }
  const createList = (s, f) => {
    let html =[]
    for (var i = s; i < f; i++) {
      html.push(<Button className={buttonClass(i)} onClick={(e) => changePage(e)} key={i}>{i}</Button>);
    }
    return html
  }
  const createLast = () => {
    return (
      <Fragment>
        <span>...</span>
        <Button className={buttonClass(size)} onClick={(e) => changePage(e)}>{size}</Button>
      </Fragment>
    )
  }

  const changePage = e => {
    setCurrentPage(Number(e.target.innerHTML))
  }

  const prevPage = () => {
    if (page <= 1) {
      return
    }
    setCurrentPage(page-1)
  }
  const nextPage = () => {
    if (page >= size) {
      return
    }
    setCurrentPage(page+1)
  }
  const setCurrentPage = p => {
    setPage(p)
    // utils.timeout(function(){
    // }, 100)
  }


  // const { className, page } = this.props;
  // let c = "Pagination" + (className?' '+className:'');
  if (size < step * 2 + 6) {
    return (
      <div className={c}>
        {createList(1, size + 1)}
      </div>
    );
  }
  else if (page < step * 2 + 1) {
    return (
      <div className={c}>
        {createLeft()}
        {createList(1, step * 2 + 4)}
        {createLast()}
        {createRight()}
      </div>
    )
  }
  else if (page > size - step * 2) {
    return (
      <div className={c}>
        {createLeft()}
        {createFirst()}
        {createList(size - step * 2 - 2, size + 1)}
        {createRight()}
      </div>
    )
  }
  else {
    return (
      <div className={c}>
        {createLeft()}
        {createFirst()}
        {createList(page - step, page + step + 1)}
        {createLast()}
        {createRight()}
      </div>
    )
  }
};

Pagination.defaultProps = {
    size: 3,
    page: 1,
    step: 1,
    onChange: () => {}
}

export { Pagination };
