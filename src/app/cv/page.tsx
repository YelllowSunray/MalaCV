import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Mala Iyer</h1>
            <p className="text-xl text-gray-600 mb-6">
              Global Project Manager – Purpose-Driven, Cross-Cultural, Impact-Focused
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-600">
              <span>📍 Rotterdam, The Netherlands</span>
              <span>📧 <a href="mailto:malaiyer8@gmail.com" className="text-indigo-600 hover:text-indigo-700">malaiyer8@gmail.com</a></span>
              <span>📱 +31 (0) 6 24378868</span>
            </div>
            <div className="mt-4">
              <a 
                href="https://linkedin.com/in/mala-iyer-367113116" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Profile</h2>
            <p className="text-gray-700 leading-relaxed">
              Global Project Manager with 5+ years of experience leading education, equity, and social impact initiatives 
              across Europe and Latin America. Skilled in coordinating cross-cultural teams, managing CRM systems (Salesforce), 
              and driving strategic growth for NGOs and academic programs. Fluent in English and Dutch, with a proven track 
              record of scaling operations by 150% and delivering DEI-focused curricula. Driven by a commitment to educational 
              equity, systems-level thinking, and human-centered design—shaping projects that empower communities while growing 
              inclusive structures.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h2>
          
          <div className="space-y-8">
            {/* Student-Teacher */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Student-Teacher & Program Coordinator</h3>
                <span className="text-gray-600 font-medium">2023–2025</span>
              </div>
              <p className="text-indigo-600 font-medium mb-4">Academisch Outreach Program</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Designed and led DEI-focused workshops for students aged 8–18, fostering academic and interpersonal growth</li>
                <li>• Developed curricula and served as primary liaison between schools, students, and teachers</li>
                <li>• Promoted program to international educators and investors, securing partnerships</li>
              </ul>
            </div>

            {/* Office Administrator */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Office Administrator</h3>
                <span className="text-gray-600 font-medium">2021–2024</span>
              </div>
              <p className="text-indigo-600 font-medium mb-4">Multiple Organizations (TCS, RAI Huishoudbeurs, Ploum Rechtenbedrijf)</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Streamlined CRM workflows using Salesforce, improving client tracking efficiency by 20% at TCS</li>
                <li>• Enhanced scheduling and communication processes using Microsoft 365 and G Suite, reducing errors by 15% at RAI Huishoudbeurs</li>
              </ul>
            </div>

            {/* 180 Degrees Consulting */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">President & Project Manager</h3>
                <span className="text-gray-600 font-medium">2021–2022</span>
              </div>
              <p className="text-indigo-600 font-medium mb-4">180 Degrees Consulting Amsterdam</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Led 100+ student consultants, scaling visibility and revenue by 150% through strategic planning</li>
                <li>• Developed an automated CRM platform and conducted 100+ interviews and trainings</li>
                <li>• Oversaw HR restructuring for a child trafficking NGO, enhancing operational capacity</li>
              </ul>
            </div>

            {/* Marketing Director */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Marketing Director</h3>
                <span className="text-gray-600 font-medium">Spring 2021</span>
              </div>
              <p className="text-indigo-600 font-medium mb-4">180 Degrees Consulting Amsterdam</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Formulated a go-to-market strategy, growing the talent pool by 200% via targeted outreach</li>
                <li>• Developed an SEO-optimized website and social media strategy, boosting engagement by 30% via Google Analytics</li>
              </ul>
            </div>

            {/* Consultant */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Consultant</h3>
                <span className="text-gray-600 font-medium">Fall 2020</span>
              </div>
              <p className="text-indigo-600 font-medium mb-4">180 Degrees Consulting Amsterdam</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Provided strategy and marketing consulting to a Beirut-based NGO post-2020 port explosion, increasing donor funding by 25%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Career Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">🚀 Scale & Growth</h3>
              <p className="text-gray-700">Scaled NGO operations by 150% as President of 180DC Amsterdam</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">🌍 Global Impact</h3>
              <p className="text-gray-700">Led youth development programs across Latin America and Europe</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">🎓 Educational Innovation</h3>
              <p className="text-gray-700">Developed DEI-focused curricula and workshops for 8–18-year-olds</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">💻 Technical Excellence</h3>
              <p className="text-gray-700">Managed CRM systems and digital strategy across 3 office environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">MSc Social Inequalities</h3>
                <span className="text-gray-600">2023–2024</span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">Erasmus University Rotterdam</p>
              <p className="text-gray-700">GPA: 8.5/10 • Awarded Erasmus Trusfond Scholarship</p>
              <p className="text-gray-600 text-sm">Thesis: "New Racisms: EDI Strategies for POC Inclusion" (Grade: 8.5)</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">BSc Honours Social Psychology</h3>
                <span className="text-gray-600">2019–2022</span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">University of Amsterdam</p>
              <p className="text-gray-700">GPA: 8.3/10</p>
              <p className="text-gray-600 text-sm">Thesis: "Epistemic Motivation and Anti-Immigrant Values" (Grade: 8.5)</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Exchange in Global Politics and Relations</h3>
                <span className="text-gray-600">Spring 2022</span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">McGill University</p>
              <p className="text-gray-600 text-sm">Courses: Radical Political Thought, International Development, Sociology of Ethnic Relations</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Undergraduate Certificate in Cognitive Psychology</h3>
                <span className="text-gray-600">2018–2019</span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">University of Cambridge</p>
              <p className="text-gray-700">Upper-Second Class (B+)</p>
              <p className="text-gray-600 text-sm">Courses: Executive Functions, Memory, Intelligence</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">International Baccalaureate</h3>
                <span className="text-gray-600">2016–2018</span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">International School Hilversum, The Netherlands</p>
              <p className="text-gray-700">Score: 36/45 • Honour Roll for High Academic Achievement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Experience */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Volunteer Leadership</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Soup Kitchen Volunteer</h3>
                <span className="text-gray-600">2023–2024</span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">Pauluskerk Rotterdam</p>
              <p className="text-gray-700">Provided weekly restaurant aid to underserved communities, enhancing operational support</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Mentor</h3>
                <span className="text-gray-600">2019–2020</span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">School's Cool Amsterdam</p>
              <p className="text-gray-700">Guided Syrian refugee students through academic transitions with trauma-informed mentorship, building self-esteem</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Educator & Team Leader</h3>
                <span className="text-gray-600">Summer 2017</span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">South Africa Townships</p>
              <p className="text-gray-700">Taught Mathematics and English in Dunoon over 3 months, co-designing lesson plans to strengthen school-volunteer alliances</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Competencies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Technical Skills</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Salesforce CRM</p>
                <p>• SPSS & R Statistics</p>
                <p>• Microsoft 365</p>
                <p>• G Suite</p>
                <p>• Google Analytics</p>
                <p>• SEO</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Professional Skills</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Project Management</p>
                <p>• Qualitative/Quantitative Research</p>
                <p>• Cross-Cultural Communication</p>
                <p>• Leadership</p>
                <p>• Strategic Planning</p>
                <p>• DEI Program Development</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Languages & Certifications</h3>
              <div className="space-y-2 text-gray-700">
                <p>• English (Native)</p>
                <p>• Dutch (Native)</p>
                <p>• Google Marketing Certificate</p>
                <p>• Popular Music Vocals (Distinction)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-indigo-100 mb-8">
            I'm passionate about humanizing systems and empowering people. 
            If you're looking for someone who can blend strategic thinking with emotional intelligence, 
            let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:malaiyer8@gmail.com"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Get In Touch
            </a>
            <Link
              href="/"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">
            Based in Rotterdam, The Netherlands • Available for remote and hybrid opportunities worldwide
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="mailto:malaiyer8@gmail.com"
              className="text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              malaiyer8@gmail.com
            </a>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">+31 (0) 6 24378868</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
