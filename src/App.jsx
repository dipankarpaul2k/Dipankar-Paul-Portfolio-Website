import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import AppLayout from "./layout/AppLayout";

// pages
import ReadmePage from "./pages/ReadmePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

// theme styles
import theme, { variableResolver } from "./theme.js";
import ResumePage from "./pages/ResumePage.jsx";

// router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <ReadmePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "projects/:slug",
        element: <ProjectPage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404</h1>
        <h3>Page Note Found.</h3>
      </div>
    ),
  },
]);

function App() {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="dark"
      cssVariablesResolver={variableResolver}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
