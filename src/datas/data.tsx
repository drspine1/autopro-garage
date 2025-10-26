import { FaTools, FaOilCan, FaCarBattery, FaSnowflake, FaBolt, FaCogs } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GiWrench } from "react-icons/gi";
import { RiOilFill } from "react-icons/ri";
import { FaCar  } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export const SERVICES = [
  { icon: <FaTools className="text-[--color-gold] text-3xl"/>, title: "Engine Diagnostics", desc: "Full diagnostic scans and check-engine troubleshooting." },
  { icon: <FaOilCan className="text-[--color-gold] text-3xl"/>, title: "Oil & Filter", desc: "Quality oil changes and filter replacements." },
  { icon: <FaCarBattery className="text-[--color-gold] text-3xl"/>, title: "Battery & Electrical", desc: "Battery testing, replacement & electrical repairs." },
  { icon: <FaSnowflake className="text-[--color-gold] text-3xl"/>, title: "A/C & Heating", desc: "A/C recharge and HVAC diagnostics." },
  { icon: <FaBolt className="text-[--color-gold] text-3xl"/>, title: "Transmission Service", desc: "Checks, flushes and repairs for smooth shifting." },
  { icon: <FaCogs className="text-[--color-gold] text-3xl"/>, title: "Suspension & Brakes", desc: "Brake pads, rotors, alignment and suspension repair." },
  { icon: <GiCarWheel className="text-[--color-gold] text-3xl"/>, title: "Tire Services", desc: "Mounting, balancing, and tire replacement." },
  { icon: <FaTools className="text-[--color-gold] text-3xl"/>, title: "Performance Tuning", desc: "Engine tuning and ECU checks." },
]

export const BRANDS = [
  { name: "Kia", logo: "/images/kia.png" },
  { name: "Audi", logo: "/images/audi.png" },
  { name: "Nissan", logo: "/images/nissan.png" },
  { name: "Toyota", logo: "/images/toyota.png" },
  { name: "BMW", logo: "/images/bmw.png" },
  { name: "Mercedes", logo: "/images/mercedez.png" },
  { name: "Ford", logo: "/images/ford.png" },
  { name: "Honda", logo: "/images/honda.png" },
];

export const REVIEWS = [
  { name: "Chinedu", car: "Toyota Corolla", rating: 4.8, note: "Fast, honest service." },
  { name: "Amaka", car: "Honda Civic", rating: 4.9, note: "Saved my trip with quick roadside help." },
  { name: "Tunde", car: "BMW 320i", rating: 4.7, note: "Professional and clean workshop." },
];



export   const features = [
    { icon: <GiWrench size={40} />, title: "Expert Technicians", text: "Trained specialists with years of experience in all car brands." },
    { icon: <IoShieldCheckmarkSharp  size={40} />, title: "Quality Guaranteed", text: "We use only premium tools and trusted auto parts." },
    { icon: <FaClock size={40} />, title: "Quick Turnaround", text: "Fast and efficient service that keeps you moving." },
  ];

  export const Information = [
              {
                icon: <FaMapMarkerAlt className="w-10 h-10 mb-3 text-black" />,
                title: "Address",
                text: "123 AutoPro Street, Lagos, Nigeria",
              },
              {
                icon: <FaPhoneAlt className="w-10 h-10 mb-3 text-black" />,
                title: "Phone",
                text: "+234 801 234 5678",
              },
              {
                icon: <FaEnvelope className="w-10 h-10 mb-3 text-black" />,
                title: "Email",
                text: "support@autoprogarage.com",
              },
            ]

export const tips = [
    {
      icon: < RiOilFill size={36} />,
      title: "Change Engine Oil Regularly",
      text: "Keep your engine running smoothly by changing the oil every 5,000–7,000 km or as recommended.",
    },
    {
      icon: <FaCarBattery size={36} />,
      title: "Check Your Battery",
      text: "Clean the terminals and ensure your battery is fully charged — especially before long trips.",
    },
    {
      icon: <FaCar  size={36} />,
      title: "Inspect Tire Pressure",
      text: "Maintain proper tire pressure to improve fuel efficiency and extend tire lifespan.",
    },
    {
      icon: <FaScrewdriverWrench size={36} />,
      title: "Service On Schedule",
      text: "Never miss your routine servicing. Regular checks prevent costly breakdowns.",
    },
    {
      icon: <TbAlertTriangleFilled size={36} />,
      title: "Watch Warning Lights",
      text: "Pay attention to dashboard indicators — early response can save you from major issues.",
    },
  ];