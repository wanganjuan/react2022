import React, { useState, useEffect } from 'react'

function useList(list: Function) {
  const [tableData, setTableData] = useState<any>([])
  const [total, setTotal] = useState(0)
  const [filter, setFilter] = useState({})
  const [visible, setVisible] = useState(false)

  const [query, setQuery] = useState<any>({
    curpage: 1,
    size: 20
  })
  const _list = (data: any) => {
    list(data).then((res: any) => {
      setTableData(res)
      setTotal(res.length)
    })
  }
  const changePage = (page: any, pageSize: any) => {
    setQuery({
      ...query,
      curpage: page,
      size: pageSize
    })
  }
  const formChange = (data: any) => {
    setFilter(data)
  }
  const close = (e: any): any => {
    if (e) {
      _list({ ...query, ...filter })
    }
    setVisible(false)
  }
  useEffect(() => {
    _list({ ...query, ...filter })
    return () => {
      setTableData([])
      setTotal(0)
    }
  }, [query, filter])
  return {
    tableData,
    total,
    _list,
    filter,
    setFilter,
    query,
    setQuery,
    changePage,
    visible,
    setVisible,
    close,
    formChange
  }
}

export default useList
