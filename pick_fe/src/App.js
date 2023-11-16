"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const mainRouter_1 = require("./router/mainRouter");
const App = () => {
    return (<div>
      <react_router_dom_1.RouterProvider router={mainRouter_1.mainRouter}/>
    </div>);
};
exports.default = App;
