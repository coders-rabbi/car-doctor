import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="flex gap-10 items-center mt-40">
            <div className="w-1/2 relative">
                <img className="w-3/4 rounded-xl" src={person} alt="" />
                <img className="absolute w-96 bottom-0 left-[230px] top-1/3 rounded-xl border-8 border-white" src={parts} alt="" />
            </div>
            <div className='space-y-7 w-1/2'>
                <h3 className="text-2xl text-[#FF3811] font-bold">About Us</h3>
                <h1 className="text-6xl font-bold leading-tight">We are qualified <br /> & of Experience <br /> in this Field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn bg-[#FF3811] hover:bg-[#9c240b]">Get More Info</button>
            </div>
        </div>
    );
};

export default About;