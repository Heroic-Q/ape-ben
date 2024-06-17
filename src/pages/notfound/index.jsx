import './index.scss'
import { Button, Result } from 'antd'

const Index = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle=""
      extra={<Button type="primary">回到首页</Button>}
    />
  )
}

export default Index