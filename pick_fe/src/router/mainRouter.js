"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const react_router_dom_1 = require("react-router-dom");
const Layout_1 = __importDefault(require("../components/layout/Layout"));
const HomeScreen_1 = __importDefault(require("../pages/HomeScreen"));
exports.mainRouter = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: <Layout_1.default />,
        children: [
            {
                index: true,
                element: <HomeScreen_1.default />,
            },
        ],
    },
]);
