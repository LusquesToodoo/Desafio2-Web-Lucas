import "./style.scss";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedIn.png";
import pencil from "./images/pencil.png";

const Profile = () => {
  return (
    <div className="profile-info-container">
      <div className="profile-info-header my-5">
        <div className="profile-info-header-cover">
          <figure>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/415/247/651/bb-8-jakku-robot-star-wars-wallpaper-preview.jpg"
              alt="capa"
            />
          </figure>
          <div className="change-cover bg-alert-success d-flex">
            <div className="text-light m-auto">
              <img className="m-auto d-block" src={pencil} alt="edit" />
            </div>
          </div>
        </div>
        <div className="position-relative w-100 d-flex align-items-center justify-content-between">
          <div className="profile-user-info d-flex align-items-end gap-5">
            <div className="position-relative">
              <figure className="profile-info-image m-0">
                <img
                  className="w-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  alt="perfil"
                />
              </figure>
              <div className="change-profile-image bg-alert-success d-flex">
                <figure className="text-light m-auto">
                  <img className="m-auto d-block" src={pencil} alt="edit" />
                </figure>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="mb-2">Igor Santana</h3>
              <p className="body-2 text-gray-400 mb-1">
                Chief Executive Office
              </p>
              <p className="body-2 text-gray-400 m-0">Desde 2017</p>
            </div>
          </div>
          <div className="d-flex gap-1 mt-4">
            <a href="#">
              <figure>
                <img src={facebook} alt="facebook" />
              </figure>
            </a>
            <a href="#">
              <figure>
                <img src={instagram} alt="instagram" />
              </figure>
            </a>
            <a href="#">
              <figure>
                <img src={linkedin} alt="linkedin" />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
