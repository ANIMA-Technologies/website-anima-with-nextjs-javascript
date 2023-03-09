import styles from '../styles/Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className="container-fluid mt-5">
      <h2 className={`text-center ${styles.title}`}>Portfolio</h2>
      <div className="row ps-5">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link active ${styles.tabTitle}`}
              id="pills-web-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-web"
              type="button"
              role="tab"
              aria-controls="pills-web"
              aria-selected="true"
            >
              Web
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${styles.tabTitle}`}
              id="pills-app-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-app"
              type="button"
              role="tab"
              aria-controls="pills-app"
              aria-selected="false"
            >
              App
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${styles.tabTitle}`}
              id="pills-design-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-design"
              type="button"
              role="tab"
              aria-controls="pills-design"
              aria-selected="false"
            >
              Design
            </button>
          </li>
        </ul>
      <div className="tab-content gx-0" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-web"
          role="tabpanel"
          aria-labelledby="pills-web-tab"
          tabIndex="0"
        >
          <div className="d-flex flex-wrap gap-4">
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Web with a lot of content</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Web</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Web</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Web</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Web</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Web</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Web</div>
          </div>
          
        </div>
        <div
          className="tab-pane fade"
          id="pills-app"
          role="tabpanel"
          aria-labelledby="pills-app-tab"
          tabIndex="0"
        >
          <div className="d-flex flex-wrap gap-4">
            <div className={`p-2 ${styles.tabContentItem}`}>Flex item App with a lot of content</div>
            <div className={`p-2 ${styles.tabContentItem}`}>Flex item App</div>
            <div className={`p-2 ${styles.tabContentItem}`}>Flex item App</div>
            <div className={`p-2 ${styles.tabContentItem}`}>Flex item App</div>
            <div className={`p-2 ${styles.tabContentItem}`}>Flex item App</div>
            <div className={`p-2 ${styles.tabContentItem}`}>Flex item App</div>
            <div className={`p-2 ${styles.tabContentItem}`}>Flex item App</div>
          </div>
          
        </div>
        <div
          className="tab-pane fade"
          id="pills-design"
          role="tabpanel"
          aria-labelledby="pills-design-tab"
          tabIndex="0"
        >
          <div className='d-flex flex-wrap gap-4'>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Design with a lot of content</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Design</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Design</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Design</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Design</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Design</div>
              <div className={`p-2 ${styles.tabContentItem}`}>Flex item Design</div>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
