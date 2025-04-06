import { Link, useNavigate } from "react-router-dom"
import water_filter from "../../assets/images/water_filter.png"
import {ArrowForward} from "@mui/icons-material"
import { ArrowRightIcon } from "lucide-react"

export default function Card() {
    const navigate=useNavigate()
  return (
    <div className="m-4 md:m-2 bg-white rounded-lg shadow-lg overflow-hidden mb-12 transition-transform hover:shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6 md:p-8">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  Learn how to make a traditional water filter with home ingredients
                </h1>
                <p className="text-gray-700 mb-6 text-lg">
                  Create an effective water filter using simple materials like sand, charcoal, 
                  gravel, and cloth. Perfect for emergency situations, off-grid living, or 
                  educational projects.
                </p>
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md inline-flex items-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  aria-label="Start learning about water filters"
                  onClick={()=>navigate("/water/filter")}
                >
                  <span>Learn now</span>
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </button>
              </div>
              <div className="md:w-1/2 relative overflow-hidden">
                <img 
                  src={water_filter} 
                  alt="Homemade water filter diagram showing layers of materials" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent w-full h-1/4"></div>
              </div>
            </div>
          </div>
    
  )
}
