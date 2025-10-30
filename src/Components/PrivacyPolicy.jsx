import React from 'react'

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content: "Delacruz Innovation ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site."
    },
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from third-party sources. The types of information we may collect include:",
      subsections: [
        {
          subtitle: "Personal Information",
          list: [
            "Name and contact information (email address, phone number, mailing address)",
            "Professional information (job title, company name, industry)",
            "Account credentials (username and password)",
            "Payment information (credit card details, billing address)",
            "Communications and correspondence with us"
          ]
        },
        {
          subtitle: "Automatically Collected Information",
          list: [
            "Device information (IP address, browser type, operating system)",
            "Usage data (pages visited, time spent on pages, click patterns)",
            "Cookies and similar tracking technologies",
            "Location data (general geographic location)",
            "Referral sources and search terms"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect for various purposes, including:",
      list: [
        "Providing, maintaining, and improving our services",
        "Processing transactions and sending related information",
        "Sending you technical notices, updates, security alerts, and support messages",
        "Responding to your comments, questions, and customer service requests",
        "Communicating with you about products, services, offers, and events",
        "Monitoring and analyzing trends, usage, and activities",
        "Detecting, preventing, and addressing technical issues and fraudulent activity",
        "Personalizing and improving your experience on our website",
        "Facilitating contests, sweepstakes, and promotions",
        "Carrying out any other purpose described to you at the time of collection"
      ]
    },
    {
      title: "How We Share Your Information",
      content: "We may share your information in the following circumstances:",
      list: [
        "With service providers who perform services on our behalf",
        "With business partners for joint marketing or promotional purposes",
        "In connection with a merger, sale, or acquisition of all or part of our company",
        "To comply with legal obligations or respond to lawful requests",
        "To protect our rights, property, or safety, and that of our users",
        "With your consent or at your direction",
        "In aggregated or de-identified form that cannot reasonably be used to identify you"
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      content: "We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools. However, if you block or reject cookies, some features of our website may not function properly.",
      list: [
        "Essential cookies: Required for basic site functionality",
        "Analytics cookies: Help us understand how visitors use our site",
        "Marketing cookies: Used to deliver relevant advertisements",
        "Preference cookies: Remember your settings and preferences"
      ]
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security."
    },
    {
      title: "Data Retention",
      content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies."
    },
    {
      title: "Your Privacy Rights",
      content: "Depending on your location, you may have certain rights regarding your personal information:",
      list: [
        "Access: Request access to the personal information we hold about you",
        "Correction: Request correction of inaccurate or incomplete information",
        "Deletion: Request deletion of your personal information",
        "Restriction: Request restriction of processing of your information",
        "Portability: Request transfer of your information to another service",
        "Objection: Object to our processing of your information",
        "Withdraw Consent: Withdraw consent where we rely on consent to process your information",
        "Opt-out: Opt out of marketing communications at any time"
      ]
    },
    {
      title: "International Data Transfers",
      content: "Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. We take appropriate safeguards to ensure that your information remains protected in accordance with this Privacy Policy when transferred internationally."
    },
    {
      title: "Children's Privacy",
      content: "Our services are not intended for children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children under these ages. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information."
    },
    {
      title: "Third-Party Links and Services",
      content: "Our website may contain links to third-party websites and services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit."
    },
    {
      title: "Changes to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information."
    },
    {
      title: "Contact Us",
      content: "If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:",
      contact: {
        email: "privacy@delacruzinnovation.com",
        phone: "+1 (555) 123-4567",
        address: "Delacruz Innovation, Privacy Office, 123 Innovation Drive, New York, NY 10001",
        dpo: "Data Protection Officer: dpo@delacruzinnovation.com"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
          Privacy Policy
        </h1>
        
        <div className="bg-gray-900 rounded-lg p-8 mb-12 border border-gray-800">
          <p className="text-gray-300 leading-relaxed text-center mb-2">
            <span className="font-semibold text-purple-700">Last Updated:</span> October 30, 2025
          </p>
          <p className="text-gray-400 text-sm text-center">
            Effective Date: October 30, 2025
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
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && (
                    <div className="space-y-4 mt-4">
                      {section.subsections.map((subsection, i) => (
                        <div key={i}>
                          <h3 className="text-lg font-semibold text-purple-600 mb-3">
                            {subsection.subtitle}
                          </h3>
                          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            {subsection.list.map((item, j) => (
                              <li key={j} className="leading-relaxed">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {section.contact && (
                    <div className="mt-4 space-y-2 text-gray-300 bg-black bg-opacity-40 p-4 rounded">
                      <p><span className="font-semibold text-purple-700">Email:</span> {section.contact.email}</p>
                      <p><span className="font-semibold text-purple-700">Phone:</span> {section.contact.phone}</p>
                      <p><span className="font-semibold text-purple-700">Address:</span> {section.contact.address}</p>
                      {section.contact.dpo && (
                        <p><span className="font-semibold text-purple-700">DPO:</span> {section.contact.dpo}</p>
                      )}
                      <p className="mt-4 text-sm text-gray-400">
                        We will respond to your privacy-related inquiries within 30 days.
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
            By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. If you do not agree with this Privacy Policy, please discontinue use of our services immediately.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy