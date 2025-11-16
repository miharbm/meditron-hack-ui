import {Provider} from "react-redux";
import {store} from "./store";
import {RouterProvider} from "react-router-dom";
import {ToastContainer} from "./features/toast/ToastContainer.tsx";
import {appRouter} from "./router";
import "./styles/theme.scss"

function App() {

    return (
        <>
            <Provider store={store}>
                <RouterProvider router={appRouter}/>
            </Provider>
            <ToastContainer/>
        </>
    )
}

export default App
