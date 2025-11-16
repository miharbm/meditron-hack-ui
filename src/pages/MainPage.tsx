import {Hero} from "../widgets/Hero"
import {Recommendations} from "../widgets/Recommendations";
import {LoginStreak} from "../widgets/LoginStreak";
import {StatisticGraph} from "../widgets/StatisticGraph";

export const MainPage = () => {

    return (
        <>
            <Hero/>
            <Recommendations/>
            <LoginStreak/>
            <StatisticGraph/>
        </>
    )
}
