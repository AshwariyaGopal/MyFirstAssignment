export default async function About() {
    await new Promise((resolve) => {
        setTimeout(resolve,5000);
    });

    return (
        <div className="bg-pink-50 min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold text-pink-900 mb-6  ">About Us</h1>
            <p className="text-lg text-gray-700 text-center max-w-3xl mb-4">
                Welcome to our makeup haven! At Beauty co, we believe in enhancing beauty through quality
                products and personalized care. Our mission is to provide an unmatched experience with curated beauty
                products, makeup tutorials, and expert advice. Whether you're a makeup novice or a seasoned pro, our
                goal is to make your beauty journey unforgettable.
            </p>
            <p className="text-lg text-gray-700 text-center max-w-3xl">
                We specialize in a variety of services, from product recommendations to personalized makeup sessions
                designed to meet every need. Our team of passionate experts is here to guide you and keep you updated
                with the latest trends. Let's create a beautiful world, one look at a time!
            </p>
        </div>
    );
}
