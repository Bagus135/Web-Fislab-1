import { Route } from "react-router-dom";
import Redirected from "../component/Other/Redirect";

const ShortLinkRoutes = (shortLink : getShortLink[]|null) =>{
    const MapShortlink = shortLink?.map((val : getShortLink, idx:number)=>{
        return (
            <Route key={idx} path={`/${val.shortLink}`}  element= {<Redirected url={val.link}/>} />
        )
    })
    return MapShortlink
}


export default ShortLinkRoutes