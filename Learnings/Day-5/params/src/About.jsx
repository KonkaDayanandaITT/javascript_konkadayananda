import {useNavigate} from "react-router-dom";
function About(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>About page</h1>
            <button onClick={() => navigate("/")}>Go Back Home</button>
        </div>
    );
}
export default About;