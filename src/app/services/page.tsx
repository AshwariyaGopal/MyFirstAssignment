import Image from 'next/image';

export default function Services() {
  return (
    <div className="min-h-screen bg-pink-50 pt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Our Makeup Packages</h1>

      {/* Container for the packages */}
      <div className="flex flex-wrap justify-center space-x-4"> {/* Flex container to display horizontally */}
        
        {/* Bridal Makeup */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 w-72"> {/* Fixed width for cards */}
          <Image
            src="/mellafex-services-page-for-gutenberg-thumbnail-SMHt99Q.webp"
            alt="Bridal Makeup"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold">Bridal Makeup</h2>
            <p className="text-gray-600">Exquisite bridal makeup for your special day.</p>
            <span className="text-lg font-bold">$200</span>
          </div>
        </div>

        {/* Party Makeup */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 w-72"> {/* Fixed width for cards */}
          <Image
            src="/Party-Makeup-Ideas-for-Different-Occasions.png"
            alt="Party Makeup"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold">Party Makeup</h2>
            <p className="text-gray-600">Glamorous makeup for parties and events.</p>
            <span className="text-lg font-bold">$150</span>
          </div>
        </div>

        {/* Casual Makeup */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 w-72"> {/* Fixed width for cards */}
          <Image
            src="/everyday-make-up-.webp"
            alt="Casual Makeup"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold">Casual Makeup</h2>
            <p className="text-gray-600">Natural look for everyday wear.</p>
            <span className="text-lg font-bold">$100</span>
          </div>
        </div>

        {/* Makeup Lessons */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 w-72"> {/* Fixed width for cards */}
          <Image
            src="/Makeup+Artist+Certification+School+-+build+your+skills.jpeg"
            alt="Makeup Lessons"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold">Makeup Lessons</h2>
            <p className="text-gray-600">Learn the art of makeup with our professional lessons.</p>
            <span className="text-lg font-bold">$120</span>
          </div>
        </div>
      </div>
    </div>
  );
}
