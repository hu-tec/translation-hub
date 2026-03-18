import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ClassicTranslation } from "./components/ClassicTranslation";
import { PhysicalTranslation } from "./components/PhysicalTranslation";
import { IndustryTranslation } from "./components/IndustryTranslation";
import { SupportPage } from "./components/SupportPage";
import { AboutPage } from "./components/AboutPage";
import { FieldsOverviewPage } from "./components/FieldsOverviewPage";
import { ExpertsInfoPage } from "./components/ExpertsInfoPage";
import { PortfolioPage } from "./components/PortfolioPage";
import { IntegratedRequestPage } from "./components/IntegratedRequestPage";
import { PricingPage } from "./components/PricingPage";
import { B2BPage } from "./components/B2BPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "fields",
        Component: FieldsOverviewPage,
      },
      {
        path: "pricing",
        Component: PricingPage,
      },
      {
        path: "experts",
        Component: ExpertsInfoPage,
      },
      {
        path: "b2b",
        Component: B2BPage,
      },
      {
        path: "portfolio",
        Component: PortfolioPage,
      },
      {
        path: "/request",
        Component: IntegratedRequestPage,
      },
      {
        path: "/apply-expert",
        Component: IntegratedRequestPage,
      },
      {
        path: "/quote",
        Component: IntegratedRequestPage,
      },
      {
        path: "classic",
        Component: ClassicTranslation,
      },
      {
        path: "physical",
        Component: PhysicalTranslation,
      },
      {
        path: "industry",
        Component: IndustryTranslation,
      },
      {
        path: "contact",
        Component: SupportPage,
      },
      {
        path: "*",
        Component: HomePage,
      },
    ],
  },
], { basename: '/translation-hub/' });
