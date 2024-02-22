import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import {
  HomeLayout,
  InboxLayout,
  PersonalLayout,
  ProductLayout,
  StudioLayout,
  UploadStudioLayout,
} from "../components";
import DoorDashFavorite from "../components/props/Loader";
// import PrivateRoute from "./privateRoute";

// import PrivateRoute from "./privateRoute";

import { ErrorBoundary } from "react-error-boundary";
import ComponentErrorFallBack from "../pages/error/ComponentErrorFallBack";
import ErrorIndex from "../pages/error/errorPage/errorIndex";
import BoundaryError from "../pages/error/BoundaryError/BoundaryError";
import ErrorBoundaryComp from "../pages/error/Boundary/ErrorBoundaryComp";
import ErrorFile from "../pages/error/ErrorII/ErrorFile";
import Inbox from "../components/blocks/BookStudio/Inbox";
import LoadingScreen from "../components/static/LoadingScreen";
import Successful from "../pages/payment/Successful";
import Failed from "../pages/payment/Failled";

// import errorIndex from "../pages/error/errorPage/errorIndex";

const PersonalInfoScreen = lazy(
  () => import("../pages/settings/PersonalInfoScreen")
);
const ProfressionInfoScreen = lazy(
  () => import("../pages/settings/PrefessionalInfoScreen")
);

const Home = lazy(() => import("../pages/Home"));
const ReadArticles = lazy(() => import("../pages/personal/ReadArticles"));
const SingleList = lazy(() => import("../pages/SingleList"));
const PersonalSetting = lazy(() => import("../pages/settings/PersonalSetting"));
const Registration = lazy(() => import("../pages/auth/Registration"));
const Login = lazy(() => import("../pages/auth/Login"));
const Verification = lazy(() => import("../pages/auth/Verification"));
const Profile = lazy(() => import("../pages/Profile"));
const Category = lazy(() => import("../pages/Categories"));
const StudioHome = lazy(() => import("../pages/studio/dashboard/Home"));

const PersonalStart = lazy(() => import("../pages/personal/PersonalStart"));

const StudioListing = lazy(
  () => import("../pages/studio/dashboard/studioListing")
);
const Overview = lazy(() => import("../pages/studio/uploadStudio/Overview"));
const Setting = lazy(() => import("../pages/settings/Setting"));
const AboutStudio = lazy(
  () => import("../pages/studio/uploadStudio/AboutStudio")
);
const StudioDetails = lazy(
  () => import("../pages/studio/uploadStudio/StudioDetails")
);
const FinishListing = lazy(
  () => import("../pages/studio/uploadStudio/FinishListing")
);
const ReviewListing = lazy(
  () => import("../pages/studio/uploadStudio/ReviewListing")
);
const UploadProductImage = lazy(
  () => import("../pages/studio/uploadStudio/StudioPictures")
);
const BookStudio = lazy(() => import("../pages/BookStudio"));

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary fallbackRender={ErrorFile}>
        <Suspense fallback={<LoadingScreen />}>
          <HomeLayout />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div className="flex">
                {Array.from({ length: 5 }, () => (
                  <DoorDashFavorite />
                ))}
              </div>
            }
          >
            {" "}
            <Home />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Registration />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "verification",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Verification />
          </Suspense>
        ),
      },
      {
        path: "wishlists",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <>wishlists</>
          </Suspense>
        ),
      },
      {
        path: "inbox",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <>Inbox</>
          </Suspense>
        ),
      },
      {
        path: "Bookings",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <>Bookings</>
          </Suspense>
        ),
      },

      {
        path: ":token/sign-in",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Verification />
          </Suspense>
        ),
      },
      {
        path: "user/:userID",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "setting",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Setting />
          </Suspense>
        ),
      },
      {
        path: "personal-setting",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <PersonalSetting />
          </Suspense>
        ),
        children: [
          {
            index: true,
            path: "my-personal-info",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <PersonalInfoScreen />
              </Suspense>
            ),
          },
          {
            index: true,
            path: "my-prefessional-info",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ProfressionInfoScreen />
              </Suspense>
            ),
          },
        ],
      },

      {
        path: "category/:studio",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Category />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "book-studio/:productID",
    element: (
      <ErrorBoundary fallbackRender={ErrorFile}>
        <Suspense fallback={<LoadingScreen />}>
          <BookStudio />
        </Suspense>
      </ErrorBoundary>
    ),
  },

  {
    path: "products/:productID",
    element: (
      <ErrorBoundary fallbackRender={ErrorFile}>
        <ProductLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <SingleList />
          </Suspense>
        ),
      },
      {
        path: "book-studio",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <BookStudio />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/studio",
    element: (
      <ErrorBoundary fallbackRender={ErrorFile}>
        <Suspense fallback={<LoadingScreen />}>
          <StudioLayout />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <StudioHome />
          </Suspense>
        ),
      },
      {
        path: "listings",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <StudioListing />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/inbox",
    element: (
      <ErrorBoundary fallbackRender={ErrorFile}>
        <Suspense fallback={<LoadingScreen />}>
          <InboxLayout />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <Inbox />,
      },
      {
        path: ":id",
        element: <Inbox />,
      },
    ],
  },

  {
    path: "/upload-studio",
    element: (
      <ErrorBoundary fallbackRender={ErrorFile}>
        <Suspense fallback={<div>loading...</div>}>
          <UploadStudioLayout />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Overview />
          </Suspense>
        ),
      },
      {
        path: "about-your-studio",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AboutStudio />
          </Suspense>
        ),
      },
      {
        path: "studio-details",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <StudioDetails />
          </Suspense>
        ),
      },
      {
        path: "finish-listing",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <FinishListing />
          </Suspense>
        ),
      },
      {
        path: "upload-studio-images",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <UploadProductImage />
          </Suspense>
        ),
      },
      {
        path: "review-listing",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ReviewListing />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/personal/:id",
    element: (
      <ErrorBoundary fallbackRender={ErrorFile}>
        <Suspense fallback={<LoadingScreen />}>
          <PersonalLayout />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [{ index: true, element: <PersonalStart /> }],
  },

  {
    path: "/article/:articleID",
    element: (
      <ErrorBoundary fallbackRender={ErrorFile}>
        <Suspense fallback={<LoadingScreen />}>
          <PersonalLayout />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [{ index: true, element: <ReadArticles /> }],
  },

  // {
  //   path: "*",
  //   element: <ErrorFile />,
  // },

  // {
  //   path: "*",
  //   element: <ErrorBoundaryComp />,
  // },
  // {
  //   path: "*",
  //   element: <BoundaryError />,
  // },
  {
    path: "payment/successful",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Successful />
      </Suspense>
    ),
  },
  {
    path: "payment/failed",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Failed />
      </Suspense>
    ),
  },

  {
    path: "*",
    element: <ErrorIndex />,
  },
]);
