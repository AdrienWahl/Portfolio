export default function Services() {
  return (
    <div className="gap-12 flex flex-col px-4 md:px-12 py-8 w-full max-w-6xl mx-auto">
      <h1 className="text-center font-[Poppins] font-bold mb-10 text-2xl text-white">
        My services :
      </h1>

    
      <div className="mb-10 grid grid-cols-1 md:grid-cols-[30%_70%] gap-y-4 md:gap-x-6 items-start">
        <h2 className="font-[Poppins] text-2xl font-bold text-white text-center md:text-left">
          Website creation
        </h2>
        <p className="font-[Poppins] text-gray-200">
          I design and build modern, responsive websites tailored to your brand and business goals. From simple landing pages 
          to complex web applications, each project is crafted with clean code, strong UX, and scalable architecture. 
          Every detail is optimized to boost performance, engage users, and drive conversions turning visitors into customers.
        </p>
      </div>

     
      <div className="mb-10 grid grid-cols-1 md:grid-cols-[30%_70%] gap-y-4 md:gap-x-6 items-start">
        <h2 className="font-[Poppins] text-2xl font-bold text-white text-center md:text-left">
          Server-side tracking implementation
        </h2>
        <p className="font-[Poppins] text-gray-200">
          I implement server-side tracking solutions to give you more accurate, reliable, and privacy-compliant data. 
          By shifting tracking from the browser to your server, you gain better control over analytics, reduce data loss from ad blockers, 
          and ensure stronger GDPR and cookie compliance. Ideal for businesses that rely on precise conversion tracking and advanced marketing insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-y-4 md:gap-x-6 items-start">
        <h2 className="font-[Poppins] text-2xl font-bold text-white text-center md:text-left">
          Website update
        </h2>
        <p className="font-[Poppins] text-gray-200">
          I work on specific parts of your website based on your needs, whether it's fixing bugs, updating features, 
          improving design, or optimizing performance. Each update is handled with clean, efficient code to ensure your site stays fast, 
          modern, and user-friendly.
        </p>
      </div>
    </div>
  );
}
