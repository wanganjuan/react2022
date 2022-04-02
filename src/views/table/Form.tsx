import React from 'react'
import { Modal } from 'antd'
import { Form, Input } from 'antd'

interface IProps {
  visible: boolean
  close: (e: any) => {}
}
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}
function FormTemplate(props: IProps) {
  const { visible, close } = props
  const onCancel = () => {
    close(false)
  }
  const [form] = Form.useForm()
  const onOk = async () => {
    try {
      const values = await form.validateFields()
      close(true)
      console.log('Success:', values)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }
  return (
    <Modal title="编辑" visible={visible} onCancel={onCancel} onOk={onOk}>
      <Form form={form} name="dynamic_rule">
        <Form.Item
          {...formItemLayout}
          name="username"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input your name'
            }
          ]}
        >
          <Input placeholder="Please input your name" />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name="nickname"
          label="Nickname"
          rules={[
            {
              required: true,
              message: 'Please input your nickname'
            }
          ]}
        >
          <Input placeholder="Please input your nickname" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default FormTemplate
