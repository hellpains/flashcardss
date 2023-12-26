import { ArrowDown } from '@/assets/icons'

import s from './pagination.module.scss'

import { Select } from '../select'
import { Typography } from '../typography'
import { changePage, usePagination } from './usePagination'

type PaginationProps = {
  limit: any
  limits: { title: any; value: any }[]
  page: number
  setLimit: (value: any) => void
  setPage: (page: number) => void
  totalPage: number
}
export const Pagination = ({
  limit,
  limits,
  page,
  setLimit,
  setPage,
  totalPage,
}: PaginationProps) => {
  // const dispatch = useAppDispatch()
  let pageNo: number

  if (page <= totalPage) {
    pageNo = page
  } else {
    setPage(totalPage)
    // dispatch(decksSlice.actions.setCurrentPage)
    pageNo = page
  }

  const numbers = usePagination(totalPage, pageNo, 1)

  const onChangeHandler = (value: number | string) => {
    changePage(value, totalPage, setPage, page)
  }
  const setLimitHandler = (value: string) => {
    setLimit && setLimit(+value)
  }

  return (
    <div className={s.container}>
      <div className={s.pagination}>
        <button className={`${s.arrow} ${s.left}`} onClick={() => alert('left')}>
          <ArrowDown />
        </button>

        {numbers &&
          numbers.map(value => {
            if (value === pageNo) {
              return (
                <button
                  className={`${s.activePage} ${s.page}`}
                  key={value}
                  onClick={() => onChangeHandler(value)}
                >
                  {value}
                </button>
              )
            } else {
              return (
                <div
                  className={`${pageNo === value ? s.activePage : ''} ${
                    value !== '...' ? s.page : ''
                  } `}
                  key={value}
                  onClick={() => onChangeHandler(value)}
                >
                  {value}
                </div>
              )
            }
          })}

        <button className={`${s.arrow} ${s.right}`} onClick={() => alert('right')}>
          <ArrowDown />
        </button>
      </div>

      <div className={s.limits}>
        <Typography variant={'body2'}>Показать</Typography>
        <div className={s.select}>
          <Select onValueChange={setLimitHandler} options={limits} value={limit} />
        </div>
        <Typography variant={'body2'}>на странице</Typography>
      </div>
    </div>
  )
}
