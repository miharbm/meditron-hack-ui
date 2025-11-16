import {Hero} from "../widgets/Hero"
import {Recommendations} from "../widgets/Recommendations";
import {LoginStreak} from "../widgets/LoginStreak";
import {StatisticGraph} from "../widgets/StatisticGraph";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "antd-mobile";

export const MainPage = () => {
    const navigate = useNavigate()


    return (
        <>
            <Button onClick={() => navigate("/first-quiz")}>
                fist quiz
            </Button>
            <Link to={"/first-quiz"}/>

            <Hero/>
            <Recommendations/>
            <LoginStreak/>
            <StatisticGraph/>
        </>
    )
}
