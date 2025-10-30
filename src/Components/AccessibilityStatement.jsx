import React from 'react'

const AccessibilityStatement = () => {
  const sections = [
    {
      title: "Our Commitment",
      content: "Delacruz Innovation is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all of our users."
    },
    {
      title: "Conformance Status",
      content: "The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Delacruz Innovation is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard."
    },
    {
      title: "Accessibility Features",
      content: "Our website includes the following accessibility features:",
      list: [
        "Alternative text for images and visual content",
        "Keyboard navigation support throughout the site",
        "Clear and consistent navigation structure",
        "Sufficient color contrast between text and background",
        "Resizable text without loss of functionality",
        "Clear focus indicators for interactive elements",
        "Descriptive link text and headings",
        "Compatible with screen readers and assistive technologies"
      ]
    },
    {
      title: "Known Limitations",
      content: "Despite our best efforts to ensure accessibility of Delacruz Innovation, there may be some limitations. Below are known issues we are working to resolve:",
      list: [
        "Some PDF documents may not be fully accessible",
        "Third-party embedded content may not meet accessibility standards",
        "Some legacy content may not be fully optimized for screen readers",
        "Video content may have limited closed captioning in some cases"
      ]
    },
    {
      title: "Assistive Technologies",
      content: "Our website is designed to be compatible with the following assistive technologies:",
      list: [
        "Screen readers (JAWS, NVDA, VoiceOver)",
        "Screen magnification software",
        "Speech recognition software",
        "Keyboard-only navigation",
        "Alternative input devices"
      ]
    },
    {
      title: "Feedback and Contact Information",
      content: "We welcome your feedback on the accessibility of Delacruz Innovation. Please let us know if you encounter accessibility barriers on our website or have suggestions for improvement.",
      contact: {
        email: "accessibility@delacruzinnovation.com",
        phone: "+1 (555) 123-4567",
        address: "Delacruz Innovation, 123 Innovation Drive, New York, NY 10001"
      }
    },
    {
      title: "Continuous Improvement",
      content: "We are committed to continually improving our website's accessibility. Our ongoing efforts include:",
      list: [
        "Regular accessibility audits and testing",
        "Training our content creators on accessibility best practices",
        "Incorporating accessibility from the earliest design phases",
        "Monitoring and addressing user-reported accessibility issues",
        "Staying updated with the latest accessibility guidelines and standards"
      ]
    },
    {
      title: "Technical Specifications",
      content: "Accessibility of Delacruz Innovation relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:",
      list: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "WAI-ARIA (Accessible Rich Internet Applications)"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
          Accessibility Statement
        </h1>
        
        <div className="bg-gray-900 rounded-lg p-8 mb-12 border border-gray-800">
          <p className="text-gray-300 leading-relaxed text-center">
            Last Updated: October 30, 2025
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="border-l-4 border-purple-700 pl-6 py-4 bg-gray-900 rounded-r-lg">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-purple-700 min-w-[2rem]">
                  {index + 1}.
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-purple-700 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  
                  {section.contact && (
                    <div className="mt-4 space-y-2 text-gray-300">
                      <p><span className="font-semibold text-purple-700">Email:</span> {section.contact.email}</p>
                      <p><span className="font-semibold text-purple-700">Phone:</span> {section.contact.phone}</p>
                      <p><span className="font-semibold text-purple-700">Address:</span> {section.contact.address}</p>
                      <p className="mt-4 text-sm text-gray-400">
                        We aim to respond to accessibility feedback within 5 business days.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-900 bg-opacity-20 border border-purple-700 rounded-lg p-6">
          <p className="text-gray-300 text-center leading-relaxed">
            This accessibility statement was created on October 30, 2025, and reflects our current efforts and commitment to accessibility. We review and update this statement regularly to ensure it accurately represents our accessibility practices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityStatement