// pages/index.tsx
export default function MyHome() {
  return (
    <div className="min-h-screen bg-[url('/183668_103785.webp')] bg-cover bg-fixed bg-center"> 
     
       {/* Centered Content */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-20"> {/* Added pt-20 for navbar */}
        {/* Centered Text */}
        <div className="text-black text-4xl font-bold text-center"> 
          Welcome To My Website
        </div>

        {/* Content Below */}
        <div className="text-pink-200 text-xl text-center mt-4">
          <p>Feel free to explore the rest of the site!</p>
        </div>
      </div>
    </div>
  );
}
