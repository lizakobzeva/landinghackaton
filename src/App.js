import "./style.css";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";

import Timer from "./components/Timer";
import Header from "./components/Header";

function App() {
  const { t } = useTranslation();
  const [directionNum, SetDirectionNum] = useState(3);
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

      <div className="slider">
        <div className="inner">
          <h4>{t("slider.title")}</h4>
          <div className="directions">
            <div
              className={directionNum == 0 ? "direction active" : "direction"}
              onClick={() => SetDirectionNum(0)}
            ></div>
            <div
              className={directionNum == 1 ? "direction active" : "direction"}
              onClick={() => SetDirectionNum(1)}
            ></div>
            <div
              className={directionNum == 2 ? "direction active" : "direction"}
              onClick={() => SetDirectionNum(2)}
            ></div>
            <div
              className={directionNum == 3 ? "direction active" : "direction"}
              onClick={() => SetDirectionNum(3)}
            ></div>
            <div
              className={directionNum == 4 ? "direction active" : "direction"}
              onClick={() => SetDirectionNum(4)}
            ></div>
            <div
              className={directionNum == 5 ? "direction active" : "direction"}
              onClick={() => SetDirectionNum(5)}
            ></div>
          </div>
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
