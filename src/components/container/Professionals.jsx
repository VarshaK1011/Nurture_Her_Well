import React from 'react';

const Professionals = () => {
  const professionals = [
    {
        name: "Dr. Ruchi Sharma",
        hospital: "Manipal Hospitals",
        place: "New Delhi",
        experience: "9 years",
        rating: "5.0",
        phone: "+91 7337050527",
        email: "varshakarne1011@gmail.com",
        image: "ruchi.jpg.png"
    },
    {
        name: "Dr. Satish Kumar",
        hospital: "Manipal Hospital",
        place: "HAL Airport Road Bangalore",
        experience: "10 years",
        rating: "5.0",
        phone: "+91 8279652451",
        email: "maahipal94@gmail.com",
        image: "satishkumar.jpg.png"
    },
    {
        name: "Dr. Suchandra Brahma",
        hospital: "Rabindranath Tagore International Institute of Cardiac Sciencesipal Hospital",
        place: "Kolkata",
        experience: "30 years",
        rating: "5.0",
        phone: "+91 9345877124",
        email: "joshikabharani@gmail.com",
        image: "suchandra.png"
    },
    {
        name: "Dr. Indrani Dutta",
        hospital: "Narayana Multispeciality Hospital",
        place: "Howrah, Kolkata",
        experience: "12 years",
        rating: "4.8",
        phone: "+91 9941111890",
        email: "manchikantigayathri2003@gmail.com",
        image: "indrani.png"
    },
    {
        name: "Dr. Imran Noorani",
        hospital: "Felix Hospital",
        place: "Noida",
        experience: "26 years",
        rating: "4.5",
        phone: "+91 8639271358",
        email: "harinisivakumar024@gmail.com.com",
        image: "imran.png"
    },
    {
        name: "Dr. Shubhi Pathak",
        hospital: "Narayana Super Speciality Hospital",
        place: "Gurugram, Gurgaon",
        experience: "5 years",
        rating: "4.4",
        phone: "+91 7337050527",
        email: "maahipal94@gmail.com",
        image: "shubhi.png"
    },
    {
        name: "Dr. Amlan Kusum Jana",
        hospital: "Rabindranath Tagore International Institute of Cardiac Sciencesipal Hospital",
        place: "Kolkata",
        experience: "23 years",
        rating: "4.3",
        phone: "+91 8639271358",
        email: "joshikabharani@gmail.com",
        image: "amlan.png"
    },
    {
        name: "Dr. Suchitha Goyal",
        hospital: "MMI Narayana Multispeciality Hospital",
        place: "Raipur",
        experience: "10 years",
        rating: "4.2",
        phone: "+91 8279652451",
        email: "varshakarne1011@gmail.com",
        image: "suchitha.png"
    },
    {
        name: "Dr. Niraj Kumar Vedpuria",
        hospital: "Paras HMRI Hospital",
        place: "Raipur",
        experience: "13 years",
        rating: "4.1",
        phone: "+91 9345877124",
        email: "manchikantigayathri2003@gmail.com",
        image: "neeraj.png"
    },
    {
        name: "Dr. Rahul Rai",
        hospital: "Narayana Superspeciality Hospital",
        place: "Gurugram, Gurgaon",
        experience: "6 years",
        rating: "4.0",
        phone: "+91 8639271358",
        email: "maahipal94@gmail.com",
        image: "rahul.png"
    },
    {
      name: "Dr. Dharmesh Nautiyal",
      hospital: "Ram Narayan Superspeciality Hospital",
      place: "Greater Noida",
      experience: "6 years",
      rating: "4.0",
      phone: "+91 8639271358",
      email: "maahipal94@gmail.com",
      image: "amlan.png"
  },
  {
    name: "Dr. Mitali Raj",
    hospital: "krishna Superspeciality Hospital",
    place: "Noida, Gurgaon",
    experience: "6 years",
    rating: "4.0",
    phone: "+91 8639271358",
    email: "maahipal94@gmail.com",
    image: "suchitha.png"
},
];

    const callOrWhatsApp = (phoneNumber) => {
        window.location.href = 'tel:' + phoneNumber;
    };

    const sendEmail = (email) => {
        window.location.href = 'mailto:' + email;
    };

    return (
        <div className="bg-gray-100">
            <h1 className="text-center pt-32 font-bold text-5xl py-8">Professionals</h1>
            <div className="container mx-auto flex flex-wrap justify-center">
                {professionals.map((professional, index) => (
                    <div key={index} className="profile w-80 bg-white text-black rounded-lg shadow-md p-6 m-4">
                        <img src={`images/${professional.image}`} alt={professional.name} className="w-20 h-20 rounded-full mr-4 border-4 border-white hover:scale-110 transition-transform"  />
                        <div className="details ">
                            <h2 className="text-xl font-bold">{professional.name}</h2>
                            <p className='text-black'><b>Hospital:</b> {professional.hospital}</p>
                            <p className='text-black'><b>Place :</b> {professional.place}</p>
                            <p className='text-black'><b>Experience :</b> {professional.experience}</p>
                            <p className='text-black'><b>Rating :</b> {professional.rating}</p>
                            <div className="buttons mt-4">
                                <button onClick={() => callOrWhatsApp(professional.phone)} className="phone px-4 py-2 mr-2 bg-teal-500 text-white rounded hover:bg-turquoise-500 transition-colors">Call / WhatsApp</button>
                                <button onClick={() => sendEmail(professional.email)} className="email px-4 py-2 bg-teal-500 text-white rounded hover:bg-turquoise-500 transition-colors">Email</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Professionals;
