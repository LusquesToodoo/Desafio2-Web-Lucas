const ContainerAccess = ({ header, main, footer, page = "" }) => {
  return (
    <section className={`all-container container-fluid p-0 d-lg-flex ${page}`}>
      <header className="header d-flex align-items-center justify-content-center col-lg-7 p-0">
        {header}
      </header>
      <main className="main col-lg-5 ps-xl-5">{main}</main>
      <footer>{footer}</footer>
    </section>
  );
};
export default ContainerAccess;
