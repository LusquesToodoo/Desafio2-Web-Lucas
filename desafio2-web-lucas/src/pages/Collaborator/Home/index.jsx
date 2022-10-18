import "./style.scss";
import SidebarCollaborator from "../SidebarCollaborator";
const CollaboratorHome = () => {
  return (
    <>
      <header>
        <SidebarCollaborator />
      </header>
      <main className="collaborator-main d-flex">
        <section className="header-space"></section>
        <section className="main-container w-100">
          <div className="main-content col-11 mx-auto mt-5 bg-alert-success">
            {/* content */}
            <div>
              <h3 className="mb-1">Olá, nome_do_usuário</h3>
              <p className="body-2 text-gray-400 mb-5">Bem-vindo de volta.</p>
              <p className="overline-2 text-uppercase text-primary-400 fw-700 ls">
                Notícias e anúncios
              </p>
            </div>
            <div>
              {/* Container */}
              <div className="home-container-left">
                {/* Container da esquerda */}
                <ul className="list-unstyled m-0 mb-4">
                  <li className="news-list-item px-3 rounded-1 d-flex align-items-center justify-content-between py-3 bg-light shadow-sm mb-2">
                    <div className="d-flex align-items-center">
                      <figure className="list-report-image rounded-circle overflow-hidden m-0 me-4">
                        Foto do perfil
                      </figure>
                      <div>
                        <p className="body-2 text-primary-600 mb-1">
                          Aline Santesso requisitou 15 dias de férias.
                        </p>
                        <div className="d-flex">
                          <p className="sector-label bg-primary-400 text-light m-0 me-3">
                            Recursos Humanos
                          </p>
                          <p className="caption-regular text-gray-400 m-0">
                            1 semana
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </li>
                  <li className="news-list-item px-3 rounded-1 d-flex align-items-center justify-content-between py-3 bg-light shadow-sm mb-2">
                    <div className="d-flex align-items-center">
                      <figure className="list-report-image rounded-circle overflow-hidden m-0 me-4">
                        Foto do perfil
                      </figure>
                      <div>
                        <p className="body-2 text-primary-600 mb-1">
                          Aline Santesso requisitou 15 dias de férias.
                        </p>
                        <div className="d-flex">
                          <p className="sector-label bg-primary-400 text-light m-0 me-3">
                            Recursos Humanos
                          </p>
                          <p className="caption-regular text-gray-400 m-0">
                            1 semana
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </li>
                  <li className="news-list-item px-3 rounded-1 d-flex align-items-center justify-content-between py-3 bg-light shadow-sm mb-2">
                    <div className="d-flex align-items-center">
                      <figure className="list-report-image rounded-circle overflow-hidden m-0 me-4">
                        Foto do perfil
                      </figure>
                      <div>
                        <p className="body-2 text-primary-600 mb-1">
                          Aline Santesso requisitou 15 dias de férias.
                        </p>
                        <div className="d-flex">
                          <p className="sector-label bg-primary-400 text-light m-0 me-3">
                            Recursos Humanos
                          </p>
                          <p className="caption-regular text-gray-400 m-0">
                            1 semana
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </li>
                  <li className="news-list-item px-3 rounded-1 d-flex align-items-center justify-content-between py-3 bg-light shadow-sm mb-2">
                    <div className="d-flex align-items-center">
                      <figure className="list-report-image rounded-circle overflow-hidden m-0 me-4">
                        Foto do perfil
                      </figure>
                      <div>
                        <p className="body-2 text-primary-600 mb-1">
                          Aline Santesso requisitou 15 dias de férias.
                        </p>
                        <div className="d-flex">
                          <p className="sector-label bg-primary-400 text-light m-0 me-3">
                            Recursos Humanos
                          </p>
                          <p className="caption-regular text-gray-400 m-0">
                            1 semana
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </li>
                  <li className="news-list-item list-show-more rounded-1 py-3 bg-light shadow-lg w-100">
                    <p className="body-2-md text-primary-400 text-center m-0">ver mais</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* end-content */}
          </div>
        </section>
      </main>
    </>
  );
};
export default CollaboratorHome;
