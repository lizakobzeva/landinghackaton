import "./style.css";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";

import Timer from "./components/Timer";
import Header from "./components/Header";

function App() {
  const { t } = useTranslation();
  const [directionNum, SetDirectionNum] = useState(0);
  const DataDirections = [
    [
      t(`DataDirectionsTranslation.0.0`),
      t(`DataDirectionsTranslation.0.1`),
      t(`DataDirectionsTranslation.0.2`),
    ],
    [
      t(`DataDirectionsTranslation.1.0`),
      t(`DataDirectionsTranslation.1.1`),
      t(`DataDirectionsTranslation.1.2`),
    ],
    [t(`DataDirectionsTranslation.2.0`)],
    [t(`DataDirectionsTranslation.3.0`), t(`DataDirectionsTranslation.3.1`)],
    [
      t(`DataDirectionsTranslation.4.0`),
      t(`DataDirectionsTranslation.4.1`),
      t(`DataDirectionsTranslation.4.2`),
      t(`DataDirectionsTranslation.4.3`),
      t(`DataDirectionsTranslation.4.4`),
      t(`DataDirectionsTranslation.4.5`),
    ],
    [
      t(`DataDirectionsTranslation.5.0`),
      t(`DataDirectionsTranslation.5.1`),
      t(`DataDirectionsTranslation.5.2`),
      t(`DataDirectionsTranslation.5.3`),
      t(`DataDirectionsTranslation.5.4`),
    ],
  ];
  const DataHref = [
    [
      "https://forms.yandex.ru/cloud/65c548d7eb614641fc45bac7/",
      "https://forms.yandex.ru/cloud/65c548acc09c0241fd24f5ad/",
      "https://forms.yandex.ru/cloud/65c548305d2a063e9a2900cd/",
    ],
    [
      "https://forms.yandex.ru/cloud/65c548305d2a063e9a2900cd/",
      "https://forms.yandex.ru/cloud/65c547d602848f408f23c62b/ ",
      "https://forms.yandex.ru/cloud/65c54740c769f140cb1e7f17/",
    ],
    ["https://forms.yandex.ru/cloud/65c546e5c769f140cb1e7f07/"],
    [
      "https://forms.yandex.ru/cloud/65c546afc417f33ea1f02845/",
      "https://forms.yandex.ru/cloud/65c54637c09c0241d724f5cb/ ",
    ],
    [
      "https://forms.yandex.ru/cloud/65c545cbc769f140bb1e7eff/ ",
      "https://forms.yandex.ru/cloud/65c545a65d2a063e762900c5/ ",
      "https://forms.yandex.ru/cloud/65c5456d5056904221e1d19e/ ",
      "https://forms.yandex.ru/cloud/65c54549eb614641f045badc/ ",
      "https://forms.yandex.ru/cloud/65c54430eb614641e445bac9/",
      "https://forms.yandex.ru/cloud/65c543f4c417f33e89f02844/",
    ],
    [
      "https://forms.yandex.ru/cloud/65c4cce8f47e731f030e269b/",
      "https://forms.yandex.ru/cloud/65c4e41243f74f33def05200/",
      "https://forms.yandex.ru/cloud/65c4e472c09c02366b24f5c2/",
      "https://forms.yandex.ru/cloud/65c4e4ec84227c365f749ca6/",
      "https://forms.yandex.ru/cloud/65c4e514c769f1346f1e7f08/",
      "https://forms.yandex.ru/cloud/65c4e52b5d2a0633222900c5/",
      "https://forms.yandex.ru/cloud/65c4e68e43f74f33a8f0520e/",
      "https://forms.yandex.ru/cloud/65c4e6bbe010db36a22f1466/ ",
    ],
  ];

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
              className={
                directionNum == 0 ? `direction active dir0` : `direction dir0`
              }
              onClick={() => SetDirectionNum(0)}
            >
              <div className="description">
                <p>{t("directions.0")}</p>

                <img src="../public/img/0.svg" alt="" />
              </div>
            </div>
            <div
              className={
                directionNum == 1 ? "direction active dir1" : "direction dir1"
              }
              onClick={() => SetDirectionNum(1)}
            >
              <div className="description">
                <p>{t("directions.1")}</p>

                <img src="../public/img/1.svg" alt="" />
              </div>
            </div>
            <div
              className={
                directionNum == 2 ? "direction active dir2" : "direction dir2"
              }
              onClick={() => SetDirectionNum(2)}
            >
              <div className="description">
                <p>{t("directions.2")}</p>

                <img src="../public/img/1.svg" alt="" />
              </div>
            </div>
            <div
              className={
                directionNum == 3 ? "direction active dir3" : "direction dir3"
              }
              onClick={() => SetDirectionNum(3)}
            >
              <div className="description">
                <p>{t("directions.3")}</p>

                <img src="../public/img/3.svg" alt="" />
              </div>
            </div>
            <div
              className={
                directionNum == 4 ? "direction active dir4" : "direction dir4"
              }
              onClick={() => SetDirectionNum(4)}
            >
              <div className="description">
                <p>{t("directions.4")}</p>

                <img src="../public/img/4.svg" alt="" />
              </div>
            </div>
            <div
              className={
                directionNum == 5 ? "direction active dir5" : "direction dir5"
              }
              onClick={() => SetDirectionNum(5)}
            >
              <div className="description">
                <p>{t("directions.5")}</p>

                <img src="../public/img/5.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="DescriptionDirections">
        <div className="inner">
          <h3>{t(`directions.${directionNum}`)}</h3>
          <div className="discriptionBlocks">
            {DataDirections[directionNum].map((direct, id) => {
              return (
                <div className="discriptionBlockItem">
                  <p>{direct}</p>
                  <a href={`${DataHref[directionNum][id]}`}>
                    {t(`main.apply`)}
                  </a>
                </div>
              );
            })}
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
