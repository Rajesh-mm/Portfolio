export const Data = [
  {
    id: 1,
    title: "IRCTC Train Booking Website Redesign",
    description:
      "Redesigned the IRCTC train ticket booking website with Figma, creating a more user-friendly and responsive interface to enhance the booking experience.",
    link: "https://www.figma.com/design/XeQF2PzOsMt9fNNM0t1Zkk/IRCTC?node-id=2-1452&t=53OM7YBxKxwqQVGW-1",  
  },

  {
    id: 2,
    title: "Minds App",
    description:
      "A platform for mental wellness, Minds App allows users to track their emotions, meditate, attend therapy sessions, and participate in community discussions. Additionally, it has calming music to encourage self-care. has an intuitive UI and a calming style.",
    link: "https://www.figma.com/design/T13E9wZf3wgRgtPICHjDA0/MINDS?node-id=0-1&t=ilWj1cKv6NcbQuYy-1",
  },

  {
    id: 3,
    title: "Stock Gain App",
    description:
      "Stock Gain is a user-centric app designed with Figma, providing essential stock information like market trends, performance analytics, and updates to ensure a seamless investment experience.",
    link: "https://www.figma.com/design/npdn0szabXYVnklHUZDfhm/Stock-Gain?node-id=2-1678&t=L0DSo6wjSn7W8O5b-1",
  },

  {
    id: 4,
    title: "DocLink App",
    description:
      "DocLink is a medical app that offers smooth communication and accessibility between physicians and patients. It was created utilizing the Android Native Framework, Figma for user experience, and Firebase for safe authentication and database administration.",
    link: "https://www.figma.com/design/HCO4Sc2v5RSxVH8IQTIMIf/DocLink?node-id=0-1&t=7TuSq6YZ8tfMe7Um-1",
  },

  {
    id: 5,
    title: "Bus Booking Management System",
    description:
      "Built a Python-based bus reservation system using Streamlit that makes advantage of object-oriented concepts and effective file management to let users handle bookings.",
    link: "https://github.com/Rajesh-mm/Bus_Booking_Management_System",
  },

  {
    id: 6,
    title: "ATM Simulator",
    description:
      "Created a Java-based ATM simulator that lets users do financial transactions while leveraging object-oriented concepts and MVC architecture for improved scalability and maintainability.",
    link: "https://github.com/Rajesh-mm/ATM_Simulator",
  }

];

const DataList = () => {
  return (
    <div>
      {Data.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      ))}
    </div>
  );
};

export default DataList;