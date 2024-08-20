import Image from "next/image";

export default function Navbar() {
  const imgStyle = {
    borderRadius: '15px',
    overflow: 'hidden',
  };

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <Image
              src="/assets/img/a1.png"
              layout="responsive"
              width={1920}
              height={1080}
              alt="Carousel Image 1"
              className="d-block w-100"
              style={imgStyle}
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <Image
              src="/assets/img/a2.png"
              layout="responsive"
              width={1920}
              height={1080}
              alt="Carousel Image 2"
              className="d-block w-100"
              style={imgStyle}
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <Image
              src="/assets/img/a3.png"
              layout="responsive"
              width={1000}
              height={500}
              alt="Carousel Image 3"
              className="d-block w-100"
              style={imgStyle}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
