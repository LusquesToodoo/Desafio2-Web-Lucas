import "./style.scss";

const HeaderLogin = () => {
  return (
    <div className="header-container">
      <figure className="w-100">
        <img
          className="w-100"
          src="./images/svg/home-illustration.svg"
          alt="a"
        />
      </figure>
      <div className="text-center header-info mx-auto mt-5">
        <h3 className="text-primary-500 fw-semibold">
          Gerencie sua empresa em uma única plataforma
        </h3>
        <p className="text-gray-300 body-1">Conheça o Toodoo ERM.</p>
      </div>
    </div>
  );
};
export default HeaderLogin;
