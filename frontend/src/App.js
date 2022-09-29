import React  from 'react';
import { Provider } from "react-redux";
import store from "@redux/store";
import RootScreens from './pages/index';
import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';



const App = () => {

  
  return (
    <Provider store={store}>
      <ConfigProvider locale={enUS}>
          <RootScreens/>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
