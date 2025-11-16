import {Outlet} from "react-router-dom";
import {BottomNav} from "../BottomNav";


export const MainLayout = () => {
    return (
        <div className="flex flex-col bg-white" style={{"minHeight": "100svh"}}>

            {/* Верхняя панель */}
            <header className="h-14 flex items-center px-4 border-b">
                <h1 className="text-lg font-medium">НАСТРОениум</h1>
            </header>

            {/* Контент */}
            <main className="flex-1 overflow-y-auto">
                <Outlet/>
            </main>

            {/* Нижняя навигация */}
            {/*<nav className="h-14 border-t flex justify-around items-center">*/}
            {/*    <button>Home</button>*/}
            {/*    <button>Profile</button>*/}
            {/*    /!*<button>Settings</button>*!/*/}
            {/*</nav>*/}
            <BottomNav/>
        </div>
    );
}
