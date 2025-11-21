import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pay = () => {

    const navigate = useNavigate();

    const handlePayment = () => {
        const razorPayKey = import.meta.env.VITE_RAZORPAY_KEY;

        const options = {
            key: razorPayKey,
            amount: 10000,
            currency: 'INR',
            name: 'Contact Page Access',
            description: 'Payment to unlock Contact page',
            handler: function (response) {
                localStorage.setItem("contact_paid", "true");
                navigate("/contactus")
            },
            theme: {
                color: '#3399cc',
            },
        }

        const razorPay = new window.Razorpay(options);
        razorPay.open()
    }
 
  return (
    <div className="text-white text-4xl font-medium flex flex-col items-center mt-20">
      <p>Pay ₹100 to access the Contact Page</p>

      <button
        className="text-white text-2xl font-medium mt-10 cursor-pointer border px-6 py-3 rounded-lg"
        onClick={handlePayment}
      >
        Pay ₹100
      </button>
    </div>
  )
}

export default Pay