import React, { useMemo, useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useLocation } from 'react-router-dom'

const TagList = () => {
  // 已经是个响应式的，setPathName进行更新了，所以会再次进行熏染
  const _location = useLocation()
  const { pathname, search } = _location
  const [tagList, setTagList] = useState([])
  console.log('TagList')
  useEffect(() => {
    let _tagList: any = sessionStorage.getItem('tagList') || '[]'
    _tagList = JSON.parse(_tagList)
    if (!_tagList.find((item: any) => item === `${pathname}${search}`)) {
      _tagList.push(`${pathname}${search}`)
    }
    setTagList(_tagList)
    sessionStorage.setItem('tagList', JSON.stringify(_tagList))
  }, [pathname])
  return (
    <div className="tagsView-container">
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        {tagList.map((item) => {
          return <span>{item}</span>
        })}
      </Scrollbars>
    </div>
  )
}

export default TagList
