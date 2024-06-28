import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import SiteLayout from "../layouts/site";
import DashboardLayout from "../layouts/dashboard";

// import { Loader } from "../components";

const About = lazy(() => import("../pages/about/About"));
const ClassDetails = lazy(() => import("../pages/class-details/ClassDetails"));
const Classes = lazy(() => import("../pages/classes/Classes"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));
const Home = lazy(() => import("../pages/home/Home"));
const News = lazy(() => import("../pages/news/News"));
const NewsDetails = lazy(() => import("../pages/news-details/NewsDetails"));
const Programs = lazy(() => import("../pages/programs/Programs"));
const ProgramsDetails = lazy(
  () => import("../pages/program-details/ProgramsDetails")
);
const TeacherDetails = lazy(
  () => import("../pages/teacher-details/TeacherDetails")
);
const Teachers = lazy(() => import("../pages/teachers/Teachers"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));

export const AdminIndexPage = lazy(() => import("../pages/admin/app"));
export const AdminTeachers = lazy(
  () => import("../pages/admin/pages/teachers")
);
export const AdminClasses = lazy(() => import("../pages/admin/pages/classes"));
export const AdminPrograms = lazy(
  () => import("../pages/admin/pages/programs")
);
export const AdminNews = lazy(() => import("../pages/admin/pages/news"));
export const AdminOpinions = lazy(
  () => import("../pages/admin/pages/opinions")
);
export const AdminLoginPage = lazy(() => import("../pages/admin/pages/login"));
export const AdminPage404 = lazy(
  () => import("../pages/admin/pages/page-not-found")
);

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <SiteLayout>
          {/* <Suspense fallback={<Loader />}> */}
          <Outlet />
          {/* </Suspense> */}
        </SiteLayout>
      ),
      children: [
        { element: <Home />, index: true },
        {
          path: "/classes",
          element: <Classes />,
        },
        {
          path: "/class-details/:id",
          element: <ClassDetails />,
        },
        {
          path: "/teachers",
          element: <Teachers />,
        },
        {
          path: "/teachers-details/:id",
          element: <TeacherDetails />,
        },
        {
          path: "/programs",
          element: <Programs />,
        },
        {
          path: "/program-details/:id",
          element: <ProgramsDetails />,
        },

        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/news-details/:id",
          element: <NewsDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "404",
          element: <ErrorPage />,
        },

        {
          path: "*",
          element: <Navigate to="404" replace />,
        },
      ],
    },
    {
      path: "admin",
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <AdminIndexPage />, index: true },
        { path: "teachers", element: <AdminTeachers /> },
        { path: "classes", element: <AdminClasses /> },
        { path: "programs", element: <AdminPrograms /> },
        { path: "news", element: <AdminNews /> },
        { path: "opinions", element: <AdminOpinions /> },
      ],
    },
  ]);

  return routes;
}
