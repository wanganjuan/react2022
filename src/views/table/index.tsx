import React, { useState, useEffect } from 'react'
import { Input, Select, Button, Pagination } from 'antd'
import { Table, Tag, Divider } from 'antd'
import { list } from '@/api/common'
import { default as useList } from '@/hooks/useList'
import { default as Filter } from './Filter'
import { default as Form } from './Form'

const { Column, ColumnGroup } = Table
// 分页不进行抽离了
function Index() {
  const [visible, setVisible] = useState(false)
  const [filter, setFilter] = useState({})
  const { tableData, total, _list } = useList(list)
  const [query, setQuery] = useState<any>({
    curpage: 1,
    size: 20
  })
  const formChange = (data: any) => {
    setFilter(data)
  }
  const changePage = (page: any, pageSize: any) => {
    setQuery({
      ...query,
      curpage: page,
      size: pageSize
    })
  }
  useEffect(() => {
    _list({ ...query, ...filter })
  }, [query, filter])
  const close = (e: any): any => {
    if (e) {
      _list({ ...query, ...filter })
    }
    setVisible(false)
  }
  return (
    <>
      <Filter changeFilter={formChange}>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
          }}
        >
          新增
        </Button>
      </Filter>
      <Form visible={visible} close={close} />
      <div className="content">
        <Table dataSource={tableData} pagination={false} rowKey={(record) => record.id}>
          <Column title="序号" dataIndex="id" key="id" width={75} align="center" />
          <Column title="标题" dataIndex="title" key="title" width={200} />
          <Column title="作者" dataIndex="author" key="author" width={100} />
          <Column title="阅读量" dataIndex="readings" key="readings" width={195} />
          <Column title="推荐指数" dataIndex="star" key="star" width={195} />
          <Column
            title="状态"
            dataIndex="status"
            key="status"
            width={195}
            render={(status) => {
              let color = status === 'published' ? 'green' : status === 'deleted' ? 'red' : ''
              return (
                <Tag color={color} key={status}>
                  {status}
                </Tag>
              )
            }}
          />
          <Column title="时间" dataIndex="date" key="date" width={195} />
          <Column
            title="操作"
            key="action"
            width={195}
            render={(text, row) => (
              <span>
                {/* <Button type="primary" shape="circle" icon="edit" title="编辑" onClick={this.handleEdit.bind(null, row)} />
                <Divider type="vertical" />
                <Button type="primary" shape="circle" icon="delete" title="删除" onClick={this.handleDelete.bind(null, row)} /> */}
              </span>
            )}
          />
        </Table>
      </div>
      <div className="pagination-box">
        <Pagination
          total={total}
          pageSizeOptions={['10', '20', '40']}
          showTotal={(total) => `共${total}条数据`}
          onChange={changePage}
          current={query.curpage}
          pageSize={query.size}
          showSizeChanger
          showQuickJumper
          hideOnSinglePage={true}
        />
      </div>
    </>
  )
}

export default Index
