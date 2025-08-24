'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Testimonials from "@/components/Home/testimonials";
import Link from "next/link";


const Signup = () => {
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

//   function getCookie({name}: any) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     const cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       // Does this cookie string begin with the name we want?
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }

const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault
    // Here you would typically handle the form submission, e.g., send data to an API
    console.log("Form submitted with:", { firstName, lastName, email, password });
    setLoading(true);

    try {
      const response = await fetch('https://bankapi-qks3.onrender.com/auth/registration/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name:firstName, last_name:lastName, email:email, password1:password, password2:password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      if (data.access) {
      localStorage.setItem("tokenRegister", data.access);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ redirect after success
      router.replace("/verifyemail");
    } else {
      console.error("No access token found in response");
    }
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      setLoading(false); // ✅ stop loading after request
    }
  };

  return (
    <div className="mt-[4rem] md:mt-[6.5rem] mb-[10rem]">
      <section className="w-[97%] md:w-[90%] mx-auto bg-cover bg-center h-fit bg-[#1c1c1c] border border-[#262626] rounded-[1rem] py-[2rem] md:py-[5rem]">
        <div className="w-[88%] md:w-[78%] mx-auto ">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-center pt-2 text-[#CAFF33]">
            Sign Up
          </h1>

          <h1 className="text-base pt-4 md:pt-5 text-[#E4E4E7] text-center">
            Join Our community today! Create an account to unlock exclusive features and personalized experiences.
          </h1>

          <div className="w-full flex items-center justify-between flex-wrap mt-[4rem]">
            
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              className="w-full mx-auto md:mx-0 md:w-[49%] bg-[#1a1a1a] rounded-full py-5 px-5 text-xl border border-[#262626] focus:outline-none focus:border-[#CAFF33]"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              className="w-full mx-auto md:mx-0 md:w-[49%] mt-[1rem] md:mt-0 bg-[#1a1a1a] rounded-full py-5 px-5 text-xl border border-[#262626] focus:outline-none focus:border-[#CAFF33]"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-full mx-auto md:mx-0 md:w-[49%] mt-[1rem] md:mt-[3.5%] bg-[#1a1a1a] rounded-full py-5 px-5 text-xl border border-[#262626] focus:outline-none focus:border-[#CAFF33]"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="w-full mx-auto md:mx-0 md:w-[49%] mt-[1rem] md:mt-[3.5%] bg-[#1a1a1a] rounded-full py-5 px-5 text-xl border border-[#262626] focus:outline-none focus:border-[#CAFF33]"
            />
            
          </div>

            <div className="w-full flex flex-col items-center justify-center">
          <button disabled={loading} onClick={handleSubmit} className="py-4 w-full md:w-[65%] 2xl:w-[50%] mx-auto rounded-full bg-[#CAFF33] text-black text-xl cursor-pointer mt-[2.5rem]">
            {loading ? (
          <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
        ) : (
          "Sign Up"
        )}
          </button> <br />
          <button className="py-4 w-full md:w-[65%] 2xl:w-[50%] mx-auto rounded-full bg-[#262626] text-white text-xl cursor-pointer mt-[0.1rem]">
           <Link href="/signin"> Login</Link>
          </button>
          </div>
          <div className="w-full md:w-[65%] 2xl:w-[50%] mx-auto flex items-center justify-between mt-[1.5rem]">
            <div className="w-[28%] md:w-[36%] h-[0.1vh] bg-[#262626]"></div>
            <h1 className="text-base text-[#E4E4E7] text-center">
              Or Continue with
            </h1>
            <div className="w-[28%] md:w-[36%] h-[0.1vh] bg-[#262626]"></div>
          </div>
          <div className="w-[92%] md:w-[45%] 2xl:w-[30%] mx-auto flex items-center justify-between mt-[1.5rem]">
            <img src="/Icon-Container-18.png" alt="" className="" />
            <img src="/Icon-Container-19.png" alt="" className="" />
            <img src="/Icon-Container-20.png" alt="" className="" />
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Signup;
