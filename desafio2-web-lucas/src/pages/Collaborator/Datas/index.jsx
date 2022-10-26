import BenefitsDatas from "./BenefitsDatas";
import RemunerarionDatas from "./RemunerationDatas";
import "./style.scss";
import VacationTableDatas from "./VacationTableDatas";
const Datas = () => {
  return (
    <div className="main-content col-11 mt-5 w-100 page-data">
      <div>
        <h4 className="title mb-5 pb-4 text-primary-600">Dados Corporativos</h4>
      </div>
      <div className="d-flex gap-4">
        <section className="data-container-left w-100 d-flex flex-column">
          <VacationTableDatas />
          <BenefitsDatas />
        </section>
        <RemunerarionDatas />
      </div>
    </div>
  );
};
export default Datas;
