import Link from "next/link";
import { workItems } from "./WorkItems";

const WorkMobile = () => {
  const itemStyle = workItems.map((item) => {
    const style = {
      backgroundImage: `url(${item.imgsrc})`,
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundBlendMode: "overlay",
      backgroundColor: "rgb(5, 5, 13, .9)",
    };

    return style;
  });

  return (
    <div className="work-container">
      {workItems.map((item) => {
        return (
          <div
            key={item.id}
            style={{ "--i": item.id }}
            className="work-item-container"
          >
            <div className="work-item">
              <div className="work-item-link">
                <Link href={item.link} target="_blank">
                  <i className="symbol material-symbols-outlined md-30">
                    open_in_new
                  </i>
                </Link>
                <Link href={item.github} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 25 25"
                    className="github-link"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                  </svg>
                </Link>
              </div>
              <Link href={item.link} target="_blank" className="w-full h-full">
                <div style={itemStyle[item.id]} className="work-item-info">
                  <div className="item-info-container">
                    <div className="item-info">
                      <h2>{item.heading}</h2>
                      <span>{item.languages}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkMobile;
