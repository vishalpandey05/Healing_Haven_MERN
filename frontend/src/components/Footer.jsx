import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "12:00 PM - 10:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 7:00 PM",
    },
    {
      id: 7,
      day: "Sunday",
      time: "9:00 AM - 3:00 PM"
    }
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About Us</Link>
            </ul>
          </div>
          <div>
            <h4>WORKING HOURS</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>CONTACT US</h4>
            <div>
              <FaPhone />
              <span>99-9999-9999</span>
            </div>
            <div>
              <MdEmail />
              <span>hhaven@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Raipur, India</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
