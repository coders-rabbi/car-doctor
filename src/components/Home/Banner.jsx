import banner02 from "../../../src/assets/images/banner/2.jpg"
import banner04 from "../../../src/assets/images/banner/4.jpg"
import banner05 from "../../../src/assets/images/banner/5.jpg"
import banner06 from "../../../src/assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner02} className="max-w-7xl w-full h-[600px] rounded-lg" />
                    <div className="absolute flex items-center pl-10 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21] h-full w-full rounded-lg">
                        <div className="space-y-7 text-white w-1/3">
                            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn bg-[#FF3811] hover:bg-[#b62c10]">Discover More</button>
                                <button className="btn bg-transparent border-[#FF3811] hover:bg-[#FF3811]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-6 right-10 bottom-16">
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner04} className="max-w-7xl w-full h-[600px]" />
                    <div className="absolute flex items-center pl-10 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21] h-full w-full rounded-lg">
                        <div className="space-y-7 text-white w-1/3">
                            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn bg-[#FF3811] hover:bg-[#b62c10]">Discover More</button>
                                <button className="btn bg-transparent border-[#FF3811] hover:bg-[#FF3811]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-6 right-10 bottom-16">
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner05} className="max-w-7xl w-full h-[600px]" />
                    <div className="absolute flex items-center pl-10 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21] h-full w-full rounded-lg">
                        <div className="space-y-7 text-white w-1/3">
                            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn bg-[#FF3811] hover:bg-[#b62c10]">Discover More</button>
                                <button className="btn bg-transparent border-[#FF3811] hover:bg-[#FF3811]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-6 right-10 bottom-16">
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner04} className="max-w-7xl w-full h-[600px]" />
                    <div className="absolute flex items-center pl-10 gap-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21] h-full w-full rounded-lg">
                        <div className="space-y-7 text-white w-1/3">
                            <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn bg-[#FF3811] hover:bg-[#b62c10]">Discover More</button>
                                <button className="btn bg-transparent border-[#FF3811] hover:bg-[#FF3811]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-6 right-10 bottom-16">
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;