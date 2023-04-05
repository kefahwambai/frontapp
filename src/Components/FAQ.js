import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <div className="faq-list">
        <div className="faq-item">
          <h2 className="faq-question">How old do I need to be to rent a car?</h2>
          <p className="faq-answer">You must be at least 21 years old to rent a car from us. Drivers under 25 may be subject to a young driver surcharge.</p>
        </div>
        <div className="faq-item">
          <h2 className="faq-question">What documents do I need to rent a car?</h2>
          <p className="faq-answer">You will need a valid driver's license and a credit card in your name. International renters may need additional documentation.</p>
        </div>
        <div className="faq-item">
          <h2 className="faq-question">What is your cancellation policy?</h2>
          <p className="faq-answer">We have a flexible cancellation policy, but you must cancel at least 24 hours before your rental start time to avoid any fees.</p>
        </div>
        <div className="faq-item">
          <h2 className="faq-question">Do you offer insurance?</h2>
          <p className="faq-answer">We offer a variety of insurance options, including collision damage waiver and personal accident insurance. We recommend that you speak with our staff to determine the best coverage for your needs.</p>
        </div>
        <div className="faq-item">
          <h2 className="faq-question">Can I pick up and drop off the car at different locations?</h2>
          <p className="faq-answer">Yes, we offer one-way rentals. However, additional fees may apply depending on the locations involved.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;




