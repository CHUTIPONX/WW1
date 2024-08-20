import Image from "next/image";
import style from "./css/stycard.css"

export default function Card() {
  return (
    <div style={{backgroundColor:"#00000"}}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div class="card">
            <Image
              src="/assets/img/so1.png"
              layout="responsive"
              className="card-img-top"
              width={100}
              height={100}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Sung Jinwoo Blue</h5>
              <p className="card-text">
               
              </p>
              <a href="#" className="btn btn-primary">
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
            <Image
              src="/assets/img/so2.png"
              layout="responsive"
              className="card-img-top"
              width={100}
              height={100}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Sung Jinwoo purple</h5>
              <p className="card-text">
                
              </p>
              <a href="#" className="btn btn-primary">
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
            <Image
              src="/assets/img/so3.png"
              layout="responsive"
              className="card-img-top"
              width={100}
              height={100}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Sung Jinwoo Yello</h5>
              <p className="card-text">
                
              </p>
              <a href="#" className="btn btn-primary">
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
