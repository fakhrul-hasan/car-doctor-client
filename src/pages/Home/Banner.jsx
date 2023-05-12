import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[500px]">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <div className="text-white w-1/2 space-y-4 pl-12">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form</p>
            <div>
            <button className="btn btn-error mr-4 text-white">Discover More</button>
            <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[500px]">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <div className="text-white w-1/2 space-y-4 pl-12">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form</p>
            <div>
            <button className="btn btn-error mr-4 text-white">Discover More</button>
            <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[500px]">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl h-full gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <div className="text-white w-1/2 space-y-4 pl-12">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form</p>
            <div>
            <button className="btn btn-error mr-4 text-white">Discover More</button>
            <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[500px]">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl h-full gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <div className="text-white w-1/2 space-y-4 pl-12">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form</p>
            <div>
            <button className="btn btn-error mr-4 text-white">Discover More</button>
            <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full h-[500px]">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl h-full gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <div className="text-white w-1/2 space-y-4 pl-12">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form</p>
            <div>
            <button className="btn btn-error mr-4 text-white">Discover More</button>
            <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full h-[500px]">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl h-full gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
          <div className="text-white w-1/2 space-y-4 pl-12">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form</p>
            <div>
            <button className="btn btn-error mr-4 text-white">Discover More</button>
            <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
