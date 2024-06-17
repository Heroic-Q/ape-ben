import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { store, persistor } from '@/store'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ConfigProvider>
)
