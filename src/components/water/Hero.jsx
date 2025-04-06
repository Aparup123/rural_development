import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate=useNavigate()
  return (
      <>
        <div className="bg-[url(/src/assets/images/drinking_water.png)] bg-gray-400 bg-blend-multiply w-full h-[50vh] bg-no-repeat bg-cover bg-center filter  flex flex-col justify-center items-center overflow-hidden">
        
            <h1 className="text-2xl tracking-normal md:text-4xl lg:text-5xl uppercase text-white font-extrabold  mb-4 px-10 text-center text-shadow-2xs text-shadow-gray-800">Drink clean water, secure your tomorrow  Health and hope, no need to borrow</h1>

            <div className="flex flex-col md:inline">
                <button className="bg-primary hover:bg-primary-dark border-2 duration-200 border-primary-dark p-2 md:p-4 rounded-md text-white font-bold text-lg m-4" onClick={()=>navigate("/water/water_quality_device")}>Explore Products</button>
                <button className="hover:bg-gray-300  hover:border-primary duration-200 border-2 bg-gray-100 filter backdrop-opacity-50  p-2 md:p-4 rounded-md text-secondary font-bold text-lg">Check Water Quality</button>
                

            </div>
        
        </div>
    </>
  )
}

