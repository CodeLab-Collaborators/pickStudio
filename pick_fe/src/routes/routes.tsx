import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import {
  HomeLayout,
  ProductLayout,
  StudioLayout,
  UploadStudioLayout,
} from "../components";
import PrivateRoute from "./privateRoute";
import PersonalInfoScreen from "../pages/settings/PersonalInfoScreen";

// import PrivateRoute from "./privateRoute";

const Home = lazy(() => import("../pages/Home"));
const SingleList = lazy(() => import("../pages/SingleList"));
const PersonalSetting = lazy(() => import("../pages/settings/PersonalSetting"));
const Registration = lazy(() => import("../pages/auth/Registration"));
const Login = lazy(() => import("../pages/auth/Login"));
const Verification = lazy(() => import("../pages/auth/Verification"));
const Profile = lazy(() => import("../pages/Profile"));
const Category = lazy(() => import("../pages/Categories"));
const StudioHome = lazy(() => import("../pages/studio/dashboard/Home"));
const Overview = lazy(() => import("../pages/studio/uploadStudio/Overview"));
const Setting = lazy(() => import("../pages/settings/Setting"));
const AboutStudio = lazy(() => import("../pages/studio/uploadStudio/AboutStudio"));
const StudioDetails = lazy(() => import("../pages/studio/uploadStudio/StudioDetails"));
const FinishListing = lazy(() => import("../pages/studio/uploadStudio/FinishListing"));

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomeLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Registration />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "verification",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Verification />
          </Suspense>
        ),
      },
      {
        path: ":token/sign-in",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Verification />
          </Suspense>
        ),
      },
      {
        path: "user",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "setting",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Setting />
          </Suspense>
        ),
      },
      {
        path: "personal-setting",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PersonalSetting />
          </Suspense>
        ),
        children: [
          {
            index: true,
            path: "my-personal-info",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <PersonalInfoScreen />
              </Suspense>
            ),
          },
        ],
      },

      {
        path: "category",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Category />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "products",
    element: <ProductLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SingleList />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/studio",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <StudioLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <StudioHome />
          </Suspense>
        ),
      },
    ],
  },

  {
path:"/upload-studio",
element:    <Suspense fallback={<div>Loading...</div>}>
<UploadStudioLayout/>
</Suspense>,
children:[
{
  index: true,
  element:  <Suspense fallback={<div>Loading...</div>}>
  <Overview />
</Suspense>
},
{
  path:"about-your-studio",
  element: <Suspense fallback={<div>Loading...</div>}>
    <AboutStudio/>
  </Suspense>
},
{
  path:"studio-details",
  element: <Suspense fallback={<div>Loading...</div>}>
    <StudioDetails/>
  </Suspense>
},
{
  path:"finish-listing",
  element: <Suspense fallback={<div>Loading...</div>}>
    <FinishListing/>
  </Suspense>
}
]
  },

  {
    path: "*",
    element: <>page not found</>,
  },
]);
