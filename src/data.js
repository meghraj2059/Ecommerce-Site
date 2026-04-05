import { CiInstagram, CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

    export const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 GamePad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 4.5,
      reviews: 88,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkHrD6T3YE0CUHIJFuyDNM3YoeCnk988ZJw&s"
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      rating: 4,
      reviews: 75,
      image: "https://img.myipadbox.com/upload/store/product_l/TBD0602123801A.jpg"
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      rating: 5,
      reviews: 99,
      image: "https://m.media-amazon.com/images/I/81QhbOKkMOL.jpg"
    },
    {
      id: 4,
      name: "S Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      rating: 4.5,
      reviews: 99,
      image: "https://img.drz.lazcdn.com/g/kf/S0e5652a4af7140b7a45585c18324bb49O.jpg_720x720q80.jpg"
    }
  ];  


    export const cup=[
    {
        id:1,
        name:"Tom Cruise",
        title:"Founder & Chairman",
        icon:[CiTwitter ,CiInstagram,RiLinkedinLine],
        image:"https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D"
    },

      {
        id:2,
        name:"Emma Watson",
        icon:[CiTwitter ,CiInstagram,RiLinkedinLine],
        title:"Managing Director",
       
        image:"https://img1.junaroad.com/uiproducts/19086601/pri_175_p-1672210397.jpg"
    },

      {
        id:3,
        name:"Will Smith",
        title:"Product Designer",
        icon:[CiTwitter ,CiInstagram,RiLinkedinLine],
        image:"https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2026/FEBRUARY/7/ee4TpNq0_f4f94f125f07443ab50474cc2d5c8e6f.jpg"
    }
   ];

  
export default products;
  