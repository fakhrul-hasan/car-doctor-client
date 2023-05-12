import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className='relative w-1/2'>
        <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 rounded-lg shadow-2xl absolute -bottom-10 right-24 border-8 border-white"
        />
        </div>
        <div className='w-1/2'>
            <h4 className='text-xl text-orange-600 font-semibold'>About Us</h4>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-3">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="py-3">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-orange-600 border-transparent">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
