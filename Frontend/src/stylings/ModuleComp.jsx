import React from 'react'

import obj1 from "./style1.module.css";
import obj2 from "./style2.module.css";

// style1.module.css     Here .module(is keyword should be part of file name)
function ModuleComp() {
  return (
        <div>
            <div className={obj1.card}>Card1</div>
            <div className={obj2.card}>Card2</div>
        </div>
  )
}

export default ModuleComp