import {Hero} from "../widgets/Hero"
import {Recommendations} from "../widgets/Recommendations";
import {StatisticGraph} from "../widgets/StatisticGraph";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "antd-mobile";
import {StreakCard} from "../widgets/StreakCard";
import {PageLayout} from "../widgets/PageLayout";

export const MainPage = () => {
    const navigate = useNavigate()


    return (
        <PageLayout back={false}>
            <Button onClick={() => navigate("/first-quiz")}>
                fist quiz
            </Button>
            <Link to={"/first-quiz"}/>
            <StreakCard streak={4}/>
            <Hero/>
            <Recommendations/>
            <StatisticGraph/>
        </PageLayout>
    )
}
