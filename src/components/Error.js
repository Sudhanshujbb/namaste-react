import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();
    return(
        <div>
            <h1>Oops Something went Wrong 😒</h1>
            <h2>{error.data}</h2>

            <h3>{error.statusText}</h3>
        </div>
    );
}

export default Error;