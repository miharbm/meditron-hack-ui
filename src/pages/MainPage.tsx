import {Hero} from "../widgets/Hero"
import {Recommendations} from "../widgets/Recommendations";
import {StatisticGraph} from "../widgets/StatisticGraph";
import {Link} from "react-router-dom";
import {StreakCard} from "../widgets/StreakCard";
import {PageLayout} from "../widgets/PageLayout";

export const MainPage = () => {


    return (
        <PageLayout back={false}>

            <Link to={"/first-quiz"}/>
            <StreakCard streak={4}/>
            <Hero/>
            <Recommendations/>
            <StatisticGraph/>
        </PageLayout>
    )
}
