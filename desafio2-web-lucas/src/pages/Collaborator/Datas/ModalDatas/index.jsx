import "./styles.scss";
import { useState } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

const ModalDatas = ({ id }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const requestVacation = () => {};

  return (
    <>
      <div
        className="modal fade"
        id="modalRequestVacation"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog w-100">
          <div className="modal-content p-3">
            <div className="modal-header pb-4 border-0">
              <h5 className="text-primary-400">Solicitar férias</h5>
            </div>
            <form>
              <div className="modal-body py-0 mb-4">
                <Input
                  txtLabel="Data de início*"
                  txtPlaceholder="ex: 07/10/2020"
                  txtType="date"
                  updateInput={(e) => setStartDate(e)}
                  value={startDate}
                >
                  <span className="material-icons fs-5">calendar_month</span>
                </Input>
                <span className="d-block mb-2"></span>
                <Input
                  txtLabel="Data de início*"
                  txtPlaceholder="ex: 07/10/2020"
                  txtType="date"
                  updateInput={(e) => setEndDate(e)}
                  value={endDate}
                >
                  <span className="material-icons fs-5">calendar_month</span>
                </Input>
              </div>

              <div className="modal-footer border-0 pt-2 d-flex justify-content-center">
                <span
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <Button
                    className="button-primary button-cancel"
                    txtButton="Cancelar"
                  />
                </span>
                <Button
                  className="button-gray"
                  txtButton="Solicitar"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalDatas;
