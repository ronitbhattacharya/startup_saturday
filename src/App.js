import StartUpForm from "./component/StartUpForm";
import Home from "./component/Home";
import ContactUs from "./component/ContactUs";
import Careers from "./component/Careers";
import {host_name} from "./component/Keys"
import AboutUs from "./component/AboutUs";
import Programs from "./component/Programs";
import Testimonial from "./component/Testimonial";
import Lenstart from "./component/Lenstart";
import {Route,Switch } from 'react-router-dom';
function App() {
  return (  
    <Switch>
        <Route exact path={`${host_name}/`}>
            <Home/>
        </Route>
        <Route exact path={`${host_name}/aboutus`}>
              <AboutUs/>
        </Route>
        <Route exact path={`${host_name}/contactus`}>
              <ContactUs/>
        </Route>
        <Route exact path={`${host_name}/careers`}>
              <Careers/>
        </Route>
        <Route exact path={`${host_name}/lenstart`}>
              <Lenstart/>
        </Route>
        <Route exact path={`${host_name}/programs`}>
            <Programs/>
        </Route>
        <Route exact path={`${host_name}/testimonial`}>
            <Testimonial/>
        </Route>
        <Route exact path={`${host_name}/registrationform`}>
        <StartUpForm/>
        </Route>
      </Switch>    
  );
}

export default App;
