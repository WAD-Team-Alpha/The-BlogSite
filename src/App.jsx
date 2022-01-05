import Routing from "./Routing";
import { authActions } from "./store/auth";
import { useEffect,useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import { sendProfileData, fetchProfileData} from "./store/profile-actions";
function App() {
  const firstUpdate = useRef(true);
  const isAuth = useSelector((state) => state.auth);
  const aboutData = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("idToken") !== null) {
      dispatch(
        authActions.login({
          idToken: localStorage.getItem("idToken"),
          localId: localStorage.getItem("localId"),
        })
      );
    }
  }, []);
  useEffect(()=>{
    console.log(isAuth);
    if (!isAuth.isAuthenticated) {
      return;
    }
    console.log("send data is triggered");
    console.log(aboutData);
    dispatch(sendProfileData(aboutData,isAuth.localId))
  },[aboutData])
  useEffect(()=>{
    console.log(isAuth);
    if (!isAuth.isAuthenticated) {
      return;
    }
    console.log("send data is triggered");
    console.log(aboutData);
    dispatch(fetchProfileData(isAuth.localId))
  },[isAuth])
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
