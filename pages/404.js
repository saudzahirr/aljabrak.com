import Link from "next/link";
const NotFoundPage=() => {
    return (
      <div className="relative h-[100vh] flex justify-center items-center">
        <div className="font-bold text-4xl text-white">
           ERROR: 404 <br />
           Page Not Found 
           <h3>
            Go Back <Link href='/'><span className="underline cursor-pointer transition duration-300 hover:scale-105">Home</span></Link>
           </h3>
        </div>
      </div>
    );
}

export default NotFoundPage