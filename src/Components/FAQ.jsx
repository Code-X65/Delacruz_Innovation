import React from 'react'

const FAQ = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-12 text-center">
          Frequently Asked Questions
        </h1>
        
        {/* Question 1 */}
        <div className="mb-10 border-l-4 border-purple-700 pl-6 py-4">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            What is Delacruz Innovation main publications?
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Delacruz Innovation primarily publishes articles, whitepapers, and case studies focused on technology innovation, business transformation, and industry trends.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
            <li>For more than 50 years, the Quarterly has set the agenda for top managers globally. It includes articles, video, audio, and other content from McKinsey consultants and external experts. For more information, please visit McKinsey Quarterly.</li>
            <li>The McKinsey Global Institute (MGI) is our business and economics research arm. Established in 1990, MGI provides leaders in the commercial, public, and social sectors with facts and insights. For more information, please visit MGI.</li>
          </ul>
        </div>

        {/* Question 2 */}
        <div className="mb-10 border-l-4 border-purple-700 pl-6 py-4">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Can I reprint or distribute Delacruz Innovation publications?
          </h2>
          <p className="text-gray-300 leading-relaxed space-y-4">
            Yes, Delacruz Innovation allows reprinting and distribution of its publications under certain conditions. Please refer to the specific publication's reprint policy for details.
            <br /><br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt dolor magnam tenetur cumque odio nemo sapiente culpa similique debitis in eligendi laborum, ipsum corporis provident ipsa earum aliquam porro repellendus.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, sunt!
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-10 border-l-4 border-purple-700 pl-6 py-4">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            How do I obtain permission to republish an article or an excerpted exhibit?
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            McKinsey allows select publications to republish our articles and exhibits, subject to approval. To request permission to republish an article or exhibit, online or in print, please write to reprints@mckinsey.com with the following information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
            <li>Your name and contact information</li>
            <li>The title and publication date of the article or exhibit</li>
            <li>A description of how you plan to use the material</li>
            <li>Any additional information that may be helpful in processing your request</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Please note that our reprint licensing policy does not permit altering articles in any way, translating them into other languages, or creating edited excerpts or summaries. We allow select publications to excerpt our exhibits, subject to approval.
            <br /><br />
            We ask that our content be used only for educational, informational, or editorial purposes. We do not authorize the use of our content for sales, marketing, business, or promotional purposes.
            <br /><br />
            Please allow two to four weeks for us to review and reply to your request.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-10 border-l-4 border-purple-700 pl-6 py-4">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            How do I contact Delacruz Innovation for further inquiries?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The McKinsey Insights app provides mobile access to our publications, including McKinsey Quarterly, McKinsey Global Institute reports, and articles from across our industry, capabilities, and practices.
            <br /><br />
            The app is available for iPhone, iPad, and Android devices. Learn more here or install the app directly from the Apple App Store or the Google Play store.
            <br /><br />
            For further inquiries, you can contact Delacruz Innovation through our website's contact form or reach out to us via email at
          </p>
        </div>

        {/* Question 5 */}
        <div className="mb-10 border-l-4 border-purple-700 pl-6 py-4">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Does McKinsey accept article submissions?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            While the majority of our articles are written by McKinsey consultants and alumni, we do accept submissions from external thought leaders and practitioners. The bar is the same for all authors: we look for thinking that is novel, useful, and rigorously substantiated. For external contributors, we also attach weight to work that sheds light on topics that are a priority for our firm and to submissions from recognized leaders in their field.
            <br /><br />
            To explore whether McKinsey might be interested in publishing your work, please contact McKinsey Publishing. We review both drafts and proposals. If your submission holds promise, we will be in touch to discuss the content and clarify our editorial process.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQ