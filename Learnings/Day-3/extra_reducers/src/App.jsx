import {useDispatch, useSelector} from "react-redux"
import { logout } from "./logout";

function App(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
      <div>
        <h1>Count :{count}</h1>
        <button onClick={() => dispatch(logout())}>logout</button>
      </div>
    );
}

export default App;