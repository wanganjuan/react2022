import React, { useState, useEffect } from 'react'
import { Input, Select, Button } from 'antd'
const { Option } = Select
interface IProps {
  changeFilter: (e: any) => void
  children: any
}
function Filter(props: IProps) {
  const [filter, setFilter] = useState({
    author: '',
    title: ''
  })
  const formChange = (e: any, key: any) => {
    setFilter({
      ...filter,
      [key]: e
    })
    props.changeFilter({
      ...filter,
      [key]: e
    })
  }
  return (
    <div className="filter-box">
      <div className="left-box">
        <div className="input-box">
          <div className="input-item">
            <span className="input-label">标题：</span>
            <Input
              placeholder="请输入"
              allowClear
              className="common-input"
              onChange={(e) => {
                formChange(e.target.value, 'title')
              }}
            />
          </div>
          <div className="input-item">
            <span className="input-label">作者：</span>
            <Select
              defaultValue="lucy"
              className="common-input"
              allowClear={true}
              onChange={(e) => {
                formChange(e, 'author')
              }}
            >
              <Option value="崔芳">崔芳</Option>
              <Option value="金刚">金刚</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="right-box">{props.children}</div>
    </div>
  )
}

export default Filter
