import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./routes/App";
import Home, { loader as getFlatsData } from "./routes/Home";
import FlatPage, { loader as getFlatData } from "./routes/Flat";
import About from "./routes/About";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} loader={getFlatsData} errorElement={<NotFound />} />
      <Route path=":id" element={<FlatPage />} loader={getFlatData} errorElement={<NotFound />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
