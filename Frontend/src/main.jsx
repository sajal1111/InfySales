import { Fragment, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App.jsx'
import Styling from './stylings/Styling.jsx'
import Style2 from './stylings/Style2.jsx';
import ModuleComp from './stylings/ModuleComp.jsx';
import Signup1 from './forms/Signup1.jsx';
import UseStates from './forms/UseStates.jsx';
import UseState2 from './forms/UseState2.jsx';
import State3 from './forms/State3.jsx';
import './index.css'
import Jsg from './tailwinds/Jsg.jsx';
import Lect2 from './tailwinds/Lect2.jsx';
import Lect3 from './tailwinds/Lect3.jsx';
import UseEffectJsg from './components/useefct/UseEffectJsg.jsx';
import UE_cleanup from './components/useefct/UE_cleanup.jsx';
import UE_loop from './components/useefct/UE_loop.jsx';
// import ToDoList from './components/todolist/ToDoList.jsx';
import { Form } from 'react-router-dom';
import Curd from './components/axioss/Curd2.jsx';
import ApplicantList from './components/axioss/Applicants.jsx';
import Today from './components/axioss/Today.jsx';
import { Home } from 'lucide-react';
import Sales from './components/axioss/Sales.jsx';
import Flogin from './components/axioss/Flogin.jsx';
import Index from './components/axioss/Index.jsx';
let root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Fragment>
            {/* <Styling></Styling> */}
            {/* <Style2></Style2> */}
            {/* <ModuleComp></ModuleComp> */}
            {/* <Curd></Curd> */}
            {/* <Formbtn></Formbtn> */}
            {/* <UseStates></UseStates> */}
            {/* <UseState2></UseState2> */}
            {/* <State3></State3> */}
            {/* <ShowCards></ShowCards> */}
            {/* <Jsg></Jsg> */}
            {/* <Lect2></Lect2> */}
            {/* <Lect3></Lect3> */}
            {/* <UseEffectJsg></UseEffectJsg> */}
            {/* <UE_cleanup></UE_cleanup> */}
            {/* <UE_loop></UE_loop> */}
            {/* <ToDoList></ToDoList> */}
            {/* <Curd></Curd> */}
            {/* <Form></Form> */}
            {/* <ApplicantList></ApplicantList> */}
            {/* <Flogin></Flogin> */}
            {/* <Today></Today> */}
            {/* <Home></Home> */}
            <Index></Index>
            {/* <Sales></Sales> */}
          </Fragment>);
