import React from 'react'

const TermOfUse = () => {
    const terms = [
        {
            title: "Copyrights",
            content: "By accessing and using our website, you accept and agree to be bound by the terms and provision of this agreement."
        },
        {
            title: "Trademarks",
            content: "We reserve the right to modify these terms at any time. You should check this page regularly to ensure you are aware of any changes."
        },
        {
            title: "Use of site content",
            content: "You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the site."
        },
        {
            title: "User postings",
            content: "You may post reviews, comments, and other content; send communications; and submit suggestions, ideas, comments, questions, or other information, as long as the content is not illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights, or otherwise injurious to third parties or objectionable."
        },
        {
            title: "Notices of infringement and takedown by Delacruz innovation",
            content: "In no event shall Delacruz Innovation be liable for any direct, indirect, incidental, special, consequential or punitive damages arising out of your access to or use of, or inability to access or use, the site."
        },
        {
            title: "Disclamers",
            content:"THE CONTENT AND FUNCTIONALITY ON THE SITE IS PROVIDED WITH THE UNDERSTANDING THAT MCKINSEY IS NOT HEREIN ENGAGED IN RENDERING PROFESSIONAL ADVICE OR SERVICES TO YOU, NO SITE CONTENT IS INTENDED TO SERVE AS OR SHALL BE DEEMED INVESTMENT, LEGAL, TAX, ACCOUNTING OR OTHER REGULATED ADVICE, AND THAT YOU SHALL REMAIN SOLELY RESPONSIBLE FOR YOUR USE OF ALL SITE CONTENT AND ACKNOWLEDGE THAT ANY RELIANCE UPON THE SITE CONTENT SHALL BE ENTIRELY AT YOUR SOLE OPTION AND RISK. ALL CONTENT AND FUNCTIONALITY ON THE SITE IS PROVIDED  WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. MCKINSEY AND ITS THIRD-PARTY CONTENT PROVIDERS MAKE NO WARRANTIES, EXPRESS OR IMPLIED, AS TO THE OWNERSHIP, ACCURACY, OR ADEQUACY OF THE SITE CONTENT. MCKINSEY SHALL HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY INFORMATION PUBLISHED ON LINKED WEBSITES, CONTAINED IN ANY USER SUBMISSIONS PUBLISHED ON THE SITE, OR PROVIDED BY THIRD PARTIES. NEITHER MCKINSEY NOR ITS THIRD-PARTY CONTENT PROVIDERS SHALL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES OR LOSSES OR FOR LOST REVENUES OR PROFITS, WHETHER OR NOT ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES AND REGARDLESS OF THE THEORY OF LIABILITY."
        },
        {
            title: "Indemnification",
            content: "You agree to indemnify, defend and hold harmless Delacruz Innovation, its officers, directors, employees, agents, licensors and suppliers from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of this agreement (including negligent or wrongful conduct) by you or any other person accessing the site."
        },
        {
            title: "Indemnification",
            content: "You agree to indemnify, defend and hold harmless Delacruz Innovation, its officers, directors, employees, agents, licensors and suppliers from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of this agreement (including negligent or wrongful conduct) by you or any other person accessing the site."
        },
        {
            title: "Governing law; jurisdiction",
            content: "This agreement shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within the county of New York, New York to resolve any dispute or claim arising from this agreement or your use of the site."
        }
    ]
    
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">
          Terms of Use
        </h1>
        
        <div className="bg-gray-900 rounded-lg p-8 mb-12 border border-gray-800">
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae eligendi necessitatibus praesentium maiores? Explicabo placeat in vitae porro quam, dolore similique animi temporibus, assumenda aliquid sit praesentium! Sint, libero. Iusto vel ipsam dicta rem libero corporis temporibus qui sunt alias animi rerum, sapiente amet quidem hic enim minima cumque itaque.
          </p>
        </div>

        <div className="space-y-8">
          {terms.map((term, index) => (
            <div key={index} className="border-l-4 border-purple-700 pl-6 py-4 bg-gray-900 rounded-r-lg">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-purple-700 min-w-[2rem]">
                  {index + 1}.
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-purple-700 mb-3">
                    {term.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {term.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TermOfUse