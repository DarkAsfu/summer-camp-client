import Banner from "../Banner/Banner";
import Chosse from "../Chosse/Chosse";
import ContatcPage from "../ContactPage/ContatcPage";
import PopularCourse from "../PopularCourse/PopularCourse";
import PopularInstruction from "../PopularInstruction/PopularInstruction";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCourse></PopularCourse>
            <PopularInstruction></PopularInstruction>
            <Chosse></Chosse>
            <ContatcPage></ContatcPage>
        </div>
    );
};

export default Home;