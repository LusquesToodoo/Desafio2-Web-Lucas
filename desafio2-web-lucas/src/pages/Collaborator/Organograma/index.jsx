import "./style.scss";
import { useState } from "react";

const CardOrganograma = () => {
  return (
    <div className="card-organograma bg-primary-50 d-flex pe-1 py-2 gap-2">
      <figure className="card-organograma-image shadow-lg bg-primary-600 m-0">
        <img></img>
      </figure>

      <div className="d-flex flex-column g-1 pe-4">
        <p className="text-primary-500 m-0 fw-600">Igor Santana</p>
        <p className="text-primary-500 m-0">CEO</p>
      </div>
    </div>
  );
};

const MyTeam = () => {
  return (
    <ul className="ul-main mx-aut p-0 list-unstyled">
      <li className="organograma-item mx-auto">
        <CardOrganograma />
      </li>
      <li className="">
        <ul className="organograma-list d-flex justify-content-center gap-2 p-0">
          <li className="organograma-item">
            <CardOrganograma />
          </li>
          <li className="organograma-item">
            <CardOrganograma />
          </li>
        </ul>
      </li>
      <li className="">
        <ul className="organograma-list d-flex justify-content-center gap-2 p-0">
          <li className="organograma-item">
            <CardOrganograma />
          </li>
          <li className="organograma-item">
            <CardOrganograma />
          </li>
          <li className="organograma-item">
            <CardOrganograma />
          </li>
          <li className="organograma-item">
            <CardOrganograma />
          </li>
        </ul>
      </li>
    </ul>
  );
};

const Geral = () => {
  return (
    <ul className="ul-main mx-aut p-0 list-unstyled">
      <li className="">
        <ul className="organograma-list d-flex justify-content-center gap-2 p-0 mt-0">
          <li className="organograma-item">
            <CardOrganograma />
          </li>
          <li className="organograma-item">
            <CardOrganograma />
          </li>
        </ul>
      </li>
      <li className="">
        <ul className="organograma-list d-flex justify-content-center gap-2 p-0">
          <li className="organograma-item">
            <CardOrganograma />
          </li>

        </ul>
      </li>
    </ul>
  );
};

const Organograma = () => {
  let options = ["Meu Time", "Geral"];
  const [selected, setSelected] = useState(options[0]);
  const [selectedList, setSelectedList] = useState(MyTeam);

  return (
    <section className="mt-5">
      <h4 className="text-primary-600 mb-5">Organograma</h4>
      <div className="organograma-navigation d-flex">
        {options.map((option) => {
          return (
            <p
              className={`px-3 py-2 m-0 body-1 fw-600 ${
                option === selected
                  ? "selected-organograma text-primary-400"
                  : "text-gray-500"
              }`}
              onClick={() => {
                setSelected(option);
                setSelectedList(option === options[0] ? MyTeam : Geral);
              }}
            >
              {option}
            </p>
          );
        })}
      </div>
      <div className="organograma w-100 shadow-lg h-100">
        <div className="pt-5 d-flex flex-column justify-content-center">
          {selectedList}
        </div>
      </div>
    </section>
  );
};

export default Organograma;
