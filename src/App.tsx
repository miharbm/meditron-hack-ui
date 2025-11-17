import {Provider} from "react-redux";
import {store} from "./store";
import {RouterProvider} from "react-router-dom";
import {ToastContainer} from "./features/toast/ToastContainer.tsx";
import {appRouter} from "./router";
import "./styles/theme.scss"
import {ConfigProvider} from "antd-mobile";

function App() {

    return (
        <>
            <ConfigProvider>
                <Provider store={store}>
                    <RouterProvider router={appRouter}/>
                </Provider>
            </ConfigProvider>
            <ToastContainer/>
        </>
    )
}

export default App
