import "./style.css";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import Timer from "./components/Timer";
import Header from "./components/Header";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />

      <div className="Main">
        <div className="inner">
          <div className="BeforeBeginning">
            <div className="title">
              <h3>{t(`main.BeforBeginning`)}</h3>
            </div>
            <Timer />
          </div>

          <h2>{t(`main.hackathon`)}</h2>
          <div className="apply">{t(`main.apply`)}</div>
        </div>
      </div>
    </div>
  );
}

export default function WrappendApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
