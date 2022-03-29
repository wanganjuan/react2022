import React, { useState, useEffect } from 'react'

function useList(list: Function) {
  const [tableData, setTableData] = useState<any>([])
  const [total, setTotal] = useState(0)
  const _list = (data: any) => {
    console.log(data)
    list(data).then((res: any) => {
      setTableData(res)
      setTotal(res.length)
    })
  }
  return {
    tableData,
    total,
    _list
  }
}

export default useList
