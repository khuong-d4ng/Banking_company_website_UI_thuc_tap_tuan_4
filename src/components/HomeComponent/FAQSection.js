import React from "react";
import TitleHome from "./TitleHome";

const faqData = [
  {
    question: "How do I open an account with YourBank?",
    answer:
      `Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. 
      Follow the prompts, provide the required information, and complete the application process. If you have any 
      questions or need assistance, our customer support team is available to help.`
  },
  {
    question: "What documents do I need to provide to apply for a loan?",
    answer:
      `The documents required for a loan application may vary depending on the type of loan you are applying for. 
      Generally, you will need to provide identification documents (such as a passport or driver's license), 
      proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). 
      Our loan officers will guide you through the specific requirements during the application process.`
  },
  {
    question: "How can I access my accounts online?",
    answer:
      `Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. 
      Enter your username and password to access your accounts. If you haven't registered for online banking, 
      click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer 
      support team is available to guide you.`
  },
  {
    question: "Are my transactions and personal information secure?",
    answer:
      `At YourBank, we prioritize the security of your transactions and personal information. 
      We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. 
      Additionally, we regularly update our security measures to stay ahead of emerging threats. 
      You can bank with confidence knowing that we have robust security systems in place.`
  }
];


const FAQSection = () => (
  <section className="w-full mt-20">
  <TitleHome
  title={[
    { text: "Frequently", highlight: true },
    { text: " Asked Questions", highlight: false }
  ]}
  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
/>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {faqData.map((item, index) => (
      <div key={index} className="border border-[#262626] rounded-xl p-8">
        <div className="border-b border-b-[#262626] mb-4">
            <h3 className="text-white text-lg font-medium mb-4">{item.question}</h3>
        </div>
        <p className="text-[#B3B3B3] text-base font-light">{item.answer}</p>
      </div>
    ))}
  </div>

  <div className="w-full flex justify-center mt-8">
    <button className="px-8 py-3 rounded-full border border-[#262626] text-white bg-transparent hover:bg-[#232323] transition">
      Load All FAQ's <span className="ml-2">⌄</span>
    </button>
  </div>
</section>

);

export default FAQSection;