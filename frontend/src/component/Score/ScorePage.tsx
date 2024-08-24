import { useAuthContext } from "../../context/AuthContext"
import Score from "./Aslab/Score";
import PraktikanScore from "./Praktikan/Score";

const ScorePage = () => {
    document.title = 'Scores'
    const{authUser} = useAuthContext();

    return (
        <>
        {authUser?.role !==1 ? <Score/> : <PraktikanScore/> }
        </>
    )
}

export default ScorePage