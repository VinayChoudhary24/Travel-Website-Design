import "./App.css";
import { IconButton } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { AnimationWrapper } from "react-hover-animation";
import HailIcon from '@mui/icons-material/Hail';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StarIcon from '@mui/icons-material/Star';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ScheduleIcon from '@mui/icons-material/Schedule';

function App() {
  return (
    //Main Page DIV
    <div className=" xl:flex max-w-8xl mx-1 ">
      {/*Left Side DIV */}
      <div className=" relative ">
        <img
          className=" mt-1 rounded-xl "
          src="https://images.unsplash.com/photo-1600775508114-5c30cf911a40"
          width={520}
          height={500}
          alt="backgroundimage"
        />
        <h2 className=" absolute top-5 left-5 text-l font-bold text-gray-300 ">
          EtherealTravel
        </h2>
        <div className="flex flex-col absolute top-44 left-16 space-y-7 ">
          <h1 className=" text-2xl font-bold text-indigo-400 ">
            The Most beautiful places in the <br></br> world!!
          </h1>
          <p className=" text-amber-200 text-lg ">Plan your vacation</p>
          <button className=" w-28 h-10 text-rose-900 text-md font-bold font-mono outline-none shadow-2xl hover:border-2 border-solid border-rose-900 bg-lime-500 rounded-xl ">
            Get Started
          </button>
          <div className=" absolute top-80 space-x-1 flex items-center ">
          <p className=" mb-2 text-white "><strong>01</strong></p>
          <div className=" h-1 w-9 bg-white "></div>
          <div className=" h-1 w-9 bg-white opacity-50 "></div>
          <div className=" h-1 w-9 bg-white opacity-50 "></div>
          <p className=" mb-2 text-white "><strong>03</strong></p>
          </div>
        </div>
      </div>
      {/*Right Side DIV */}
      <div className=" flex flex-col flex-1 ">
        {/*Right Side Header DIV */}
        <div className=" flex mt-1 h-10 border-b-2 border-b-gray-100 items-center shadow-sm ">
          <IconButton>
            <DragIndicatorIcon className=" hover:animate-spin " />
          </IconButton>
          <div className=" flex flex-1 justify-end mr-10 space-x-14 ">
            <input
              type="text"
              placeholder="search EtherealTravel"
              className=" flex flex-1 ml-2 rounded-3xl text-center outline-none bg-teal-50 hover:border-2 "
            />
            <button className=" h-9 w-24 bg-neutral-50 hover:border-2 border-neutral-200  rounded-xl ">
              Gallery
            </button>
            <button className=" h-9 w-24 bg-neutral-50 hover:border-2 border-neutral-200  rounded-xl ">
              Stories
            </button>
            <button className=" h-9 w-24 bg-neutral-50 hover:border-2 border-neutral-200  rounded-xl ">
              profile
            </button>
          </div>
        </div>
        {/*Right Side Body DIV */}
      <div className=" shadow-sm ">
          <h1 className=" ml-5 text-3xl font-extrabold font-mono text-bold ">Discover</h1>
          <div className=" flex ml-5 mt-0 justify-start font-medium space-x-16 ">
            <IconButton className=" h-6 ">
            <p className=" text-gray-500 hover:text-red-600 hover:border-b-2 hover:border-b-red-600 "><i>Popular</i></p>
            </IconButton>
            <IconButton className=" h-6 ">
            <p className=" text-gray-500  hover:text-red-600 hover:border-b-2 hover:border-b-red-600 "><i>Adventure</i></p>
            </IconButton>
            <IconButton className=" h-6 hover:bg-gray-200 ">
            <p className=" text-gray-500 hover:text-red-600 hover:border-b-2 hover:border-b-red-600 "><i>Tour</i></p>
            </IconButton>
          </div>
          {/*Right Side Body-Images DIV */}
          <div className=" flex space-x-0 mt-3 ">
          <div className=" flex m-1 space-x-1 ">
            <AnimationWrapper>
            <div className=" relative cursor-pointer ">
            <img
             className=" w-64 h-72 rounded-lg " 
             src="https://images.unsplash.com/photo-1520960617263-1c58934a51be"
             alt="boraboraimage"
              />
              <h2 className=" absolute top-56 left-3 text-xl font-bold font-mono text-white ">Bora Bora</h2>
              <p className=" absolute top-64 left-3 text-sm text-white ">25 Must See Places</p>
            </div>
            </AnimationWrapper>
            <AnimationWrapper>
            <div className=" relative cursor-pointer ">
            <img
             className=" w-64 h-72 rounded-lg "
             src="https://images.unsplash.com/photo-1554481923-a6918bd997bc"
             alt="baliimage" />
             <h2 className=" absolute top-56 left-3 text-xl font-bold font-mono text-white ">Bali</h2>
             <p className=" absolute top-64 left-3 text-sm text-white ">33 Must See Places</p>
            </div>
            </AnimationWrapper>
            <AnimationWrapper>
            <div className=" relative cursor-pointer ">
            <img 
             className=" w-64 h-72 rounded-lg "
             src="https://images.unsplash.com/photo-1658785138610-b0fa036081c9"
             alt="italyimage" />
             <h2 className=" absolute top-56 left-3 text-xl font-bold font-mono text-white ">Italy</h2>
             <p className=" absolute top-64 left-3 text-sm text-white ">51 Must See Places</p>
            </div>
            </AnimationWrapper>
          </div>
          <div className=" flex m-1 space-x-1 ">
            <AnimationWrapper>
            <div className=" relative cursor-pointer ">
            <img
             className=" w-64 h-72 rounded-lg "
             src="https://images.unsplash.com/photo-1605212989851-63647ae5dad9"
             alt="greeceimage" />
             <h2 className=" absolute top-56 left-3 text-xl font-bold font-mono text-white ">Greece</h2>
             <p className=" absolute top-64 left-3 text-sm text-white ">42 Must See Places</p>
            </div>
            </AnimationWrapper>
            <AnimationWrapper>
            <div className=" relative cursor-pointer ">
            <img 
             className=" w-64 h-72 rounded-lg "
             src="https://images.unsplash.com/photo-1626717308652-bce54409ada6"
             alt="switzerlandimage" />
             <h2 className=" absolute top-56 left-3 text-xl font-bold font-mono text-white ">Switzerland</h2>
             <p className=" absolute top-64 left-3 text-sm text-white ">38 Must See Places</p>
            </div>
            </AnimationWrapper>
            <AnimationWrapper>
            <div className=" relative cursor-pointer ">
            <img
             className=" w-64 h-72 rounded-lg " 
             src="https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3"
             alt="thailandimage" />
             <h2 className=" absolute top-56 left-3 text-xl font-bold font-mono text-white ">Thailand</h2>
             <p className=" absolute top-64 left-3 text-sm text-white ">36 Must See Places</p>
            </div>
            </AnimationWrapper>
          </div>
         </div> 
        </div>
        {/*Right Side Footer DIV */}
      <div className=" h-44 ">
        <h1 className=" flex text-xl text-gray-600 font-bold font-mono justify-center shadow-2xl ">Types of travel</h1>
        <div className=" grid grid-cols-2 ">
         <IconButton>
         <HailIcon
         className=" text-indigo-600 " />
         <p className=" mb-1 text-indigo-600">Solo</p>
         </IconButton>

         <IconButton>
         <FavoriteIcon
         className=" text-red-600 " />
         <p className=" mb-1 text-red-600 ">Couple</p>
         </IconButton>
         
         <IconButton>
         <FamilyRestroomIcon
         className=" text-green-600 " />
         <p className=" mb-1 text-green-600 ">Family</p>
         </IconButton>

         <IconButton>
         <Diversity3Icon
         className=" text-blue-600 " />
         <p className=" mb-1 text-blue-600 ">Group</p>
         </IconButton>

         <IconButton>
         <StarIcon
         className=" text-yellow-500 " />
         <p className=" mb-1 text-yellow-500 ">Luxury</p>
         </IconButton>

         <IconButton>
         <HandshakeIcon
         className=" text-fuchsia-600 " />
         <p className=" mb-1 text-fuchsia-600 ">Buisness</p>
         </IconButton>

         <IconButton>
         <AirportShuttleIcon
         className=" text-teal-600 " />
         <p className=" mb-1 text-teal-600 ">Safari</p>
         </IconButton>

         <IconButton>
         <ScheduleIcon
         className=" text-pink-600 " />
         <p className=" mb-1 text-pink-600 ">Package</p>
         </IconButton>

        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
