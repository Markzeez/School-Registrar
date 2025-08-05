import React, { useState } from 'react';
import { MinusCircle, PlusCircle } from 'lucide-react'; 

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        {isOpen ? (
          <PlusCircle className="h-6 w-6 text-gray-500" />
        ) : (
          <MinusCircle className="h-6 w-6 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 pr-8">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "When can I apply in ClassPulse?",
      answer: "At ClassPulse, there's typically no specific deadline for submitting your application. You're welcome to register and apply whenever it suits you. We typically admit students for the current term, based on program availability and the method of your application. Even if you registered through us in the past, we can provide you with comprehensive learning opportunities to ensure you don't miss anything important."
    },
    {
      question: "How does studying in ClassPulse differ from studying in the UK, US, Canada, Australia, Germany, France or elsewhere?",
      answer: "ClassPulse offers a unique blend of practical and theoretical learning, often with a focus on industry-specific skills, which might differ from the more traditional academic approaches in other countries. Our programs are designed to be highly relevant to current industry demands, ensuring graduates are job-ready."
    },
    {
      question: "What is the reason behind ClassPulse's lower tuition fees compared to other educational providers?",
      answer: "Our commitment is to make quality education accessible. We achieve lower tuition fees through efficient resource management, strategic partnerships, and a focus on delivering value without compromising on educational standards. This allows us to offer competitive pricing while maintaining high-quality programs."
    },
    {
      question: "Is there any office or agency that represent ClassPulse oversees?",
      answer: "ClassPulse collaborates with various international representatives and agencies to assist prospective students from around the globe. For a comprehensive list of our authorized representatives in your region, please visit the 'International Admissions' section on our official website or contact our admissions office directly."
    },
    {
      question: "Does ClassPulse require entrance exams?",
      answer: "Admission requirements at ClassPulse vary depending on the program of study. While some programs may require an entrance assessment or interview, many others consider academic transcripts, portfolios, and relevant work experience. Please refer to the specific program's admission criteria on our website or contact our admissions team for detailed information."
    },
    {
      question: "When can I apply in ClassPulse?",
      answer: "As mentioned, applications are accepted on a rolling basis, allowing flexibility for prospective students. We encourage you to apply as soon as you are ready to begin your academic journey with us, ensuring you secure a spot in your desired program."
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 font-sans">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Find answers to common questions about our programs, admissions, and fees in our FAQ section. Get all the information you need in one place.
        </p>

        <div className="flex justify-center mb-8">
          <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            More questions
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <FAQSection />
    </div>
  );
};

export default App;
