import styles from "./catalog.module.sass";
import Filter from "./filter/Filter";
import CatalogBanner from "./catalogBanner/CatalogBanner";
import CatalogProducts from "./catalogProducts/CatalogProducts";
// import { getCatalogData } from "../../services/catalog";

const Catalog = () => {
    // const openFilter = () => {

    // }
  return (
    <div className={styles.catalog}>
      <div className="wrapper">
        <div className={styles.catalogFlex}>
          <Filter />
          <div className={styles.rightBlock}>
            <CatalogBanner />
            <CatalogProducts />
          </div>
        </div>
        <div className={styles.mobileFilterEllipse}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.0625 0.00390625H0.9375C0.419719 0.00390625 0 0.423625 0 0.941406C0 4.57375 1.07475 7.75384 3.38227 10.9493C4.82189 12.943 7.40452 14.4107 8.71875 15.068V20.7599C8.71875 21.1177 8.92247 21.4443 9.24375 21.6018L13.9313 23.8986C14.0618 23.9626 14.2029 23.9943 14.3437 23.9943C14.5164 23.9943 14.6886 23.9466 14.8398 23.8523C15.1144 23.681 15.2812 23.3803 15.2812 23.0568V19.1931C15.2812 18.6753 14.8615 18.2556 14.3438 18.2556C13.826 18.2556 13.4062 18.6753 13.4062 19.1931V21.5534L10.5938 20.1752V14.4786C10.5938 14.1124 10.3805 13.7797 10.0477 13.6268C8.29744 12.8226 6.02663 11.4085 4.90238 9.85164C3.0398 7.27234 2.07459 4.71658 1.90298 1.87891H22.097C21.9254 4.71653 20.9602 7.27234 19.0976 9.85164C17.9094 11.4971 15.6736 12.9397 13.9849 13.6395C13.5066 13.8377 13.2795 14.3861 13.4777 14.8645C13.6759 15.3428 14.2243 15.5699 14.7027 15.3716C16.4943 14.6292 19.1185 13.0256 20.6177 10.9493C22.9252 7.75384 24 4.57375 24 0.941406C24 0.423625 23.5803 0.00390625 23.0625 0.00390625Z"
              fill="white"
            />
          </svg>
          Фильтр
        </div>
      </div>
    </div>
  );
};

export default Catalog;
