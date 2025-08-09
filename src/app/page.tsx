import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-indigo-600">Humanizing</span> Systems,<br />
            <span className="text-purple-600">Empowering</span> People
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            I'm Mala Iyer, a Global Project Manager and Systems Change Advocate. 
            I blend psychology, sociology, and global experience to rebuild systems 
            that celebrate human connection over extraction.
          </p>
          
          {/* Personal Introduction */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 mb-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who I Am: Beyond the Title</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">🌍</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Solving Poverty & Inequality</h3>
                    <p className="text-gray-600 text-sm">
                      I'm driven by a deep commitment to address systemic poverty and fight for equality 
                      across all races, creeds, and backgrounds. Every project I take on is filtered through 
                      this lens of justice and inclusion.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">🤝</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">People Person at Heart</h3>
                    <p className="text-gray-600 text-sm">
                      I thrive on human connection. Whether it's mentoring refugee students, leading teams 
                      of 100+ consultants, or building bridges between communities, I find my energy and 
                      purpose in bringing people together.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">💪</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Challenging Myself</h3>
                    <p className="text-gray-600 text-sm">
                      I actively seek out challenging situations because that's where I grow. From teaching 
                      in South African townships to leading international NGO projects, I've learned that 
                      discomfort is where transformation happens.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">🚀</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Buoyed by Challenges</h3>
                    <p className="text-gray-600 text-sm">
                      When things get tough, I don't just survive—I thrive. My work with child trafficking 
                      NGOs, refugee mentoring, and complex DEI initiatives has taught me that the most 
                      difficult challenges often reveal our greatest strengths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <p className="text-gray-700 text-center italic">
                "I believe that systems change happens when we're willing to step into the uncomfortable 
                spaces, challenge our assumptions, and build bridges between people who see the world differently."
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cv"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              View My CV
            </Link>
            <a
              href="mailto:malaiyer8@gmail.com"
              className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Deep Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            My Core Values: The Foundation of Everything I Do
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">🌱 The Problem I'm Solving</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  <strong>The Dehumanization of Systems</strong> - Modern systems are built on extraction, inequality, and disconnection, leading to emotional, social, and ecological harm.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-800">Systems that reward domination</strong>
                      <p className="text-gray-600 text-sm">Patriarchy, weaponized power, performative meritocracy</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-800">Cultures that suppress emotional truth</strong>
                      <p className="text-gray-600 text-sm">Shaming vulnerability, punishing rest, ignoring empathy</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-800">Workplaces that exploit instead of uplift</strong>
                      <p className="text-gray-600 text-sm">Dog-eat-dog, burnout, people-as-machines</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-gray-800">Societies that justify injustice</strong>
                      <p className="text-gray-600 text-sm">Trumpian cruelty, Israel-Palestine grief, systemic racism</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">✨ The Future I'm Building</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  <strong>Systems of work, learning, leadership, and community</strong> that celebrate human connection and emotional intelligence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✨</span>
                    <div>
                      <strong className="text-gray-800">Empower people, not extract from them</strong>
                      <p className="text-gray-600 text-sm">Co-creation, shared ownership, mutual benefit</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">🧠</span>
                    <div>
                      <strong className="text-gray-800">Integrate emotional intelligence</strong>
                      <p className="text-gray-600 text-sm">Vulnerability, empathy, emotional literacy</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">🤝</span>
                    <div>
                      <strong className="text-gray-800">Celebrate inclusive collaboration</strong>
                      <p className="text-gray-600 text-sm">Diverse voices, co-design, collective wisdom</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">🌍</span>
                    <div>
                      <strong className="text-gray-800">Respect planet and people equally</strong>
                      <p className="text-gray-600 text-sm">Sustainability, justice, intergenerational thinking</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">🎶</span>
                    <div>
                      <strong className="text-gray-800">Create joy-based engagement</strong>
                      <p className="text-gray-600 text-sm">Play, creativity, intrinsic motivation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🧩 Root Problem Framed Simply</h3>
              <p className="text-lg text-gray-700 italic">
                "How can we design systems where <strong>people can grow and feel</strong>, not just survive and perform?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values in Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How I've Lived These Values: Real Stories of Impact
          </h2>
          
          {/* 180 Degrees Consulting Story */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">🌟</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">180 Degrees Consulting Amsterdam</h3>
                <p className="text-indigo-600 font-medium">President & Project Manager (2021-2022)</p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">🎯 Values in Action</h4>
                <p className="text-gray-700 mb-4">
                  At 180DC, I didn't just manage projects—I <strong>humanized the entire organization</strong>. 
                  This was my chance to put my values into practice on a large scale.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2 mt-1">•</span>
                    <span><strong>Empowering people:</strong> Led 100+ student consultants, scaling visibility and revenue by 150%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2 mt-1">•</span>
                    <span><strong>Emotional intelligence:</strong> Conducted 100+ interviews and trainings with trauma-informed approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2 mt-1">•</span>
                    <span><strong>Inclusive collaboration:</strong> Recruited 10 international NGO clients, focusing on marginalized communities</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">🌍 Impact on Human Rights</h4>
                <p className="text-gray-700 mb-4">
                  My most meaningful project was overseeing HR restructuring for a <strong>child trafficking NGO</strong>.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <strong>Why this mattered:</strong> This NGO was fighting one of the most dehumanizing systems 
                    imaginable. By improving their operational capacity, I was helping them rescue and protect 
                    vulnerable children—literally humanizing a system that had failed them.
                  </p>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  <strong>Values connection:</strong> This work embodied my mission of "humanizing systems" 
                  in the most direct way possible—protecting human dignity against exploitation.
                </p>
              </div>
            </div>
          </div>

          {/* Masters Story */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">🎓</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">MSc Social Inequalities, Erasmus University</h3>
                <p className="text-purple-600 font-medium">Thesis: "New Racisms: EDI Strategies for POC Inclusion" (Grade: 8.5/10)</p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">🧠 Academic Values Integration</h4>
                <p className="text-gray-700 mb-4">
                  My Masters wasn't just about getting a degree—it was about <strong>understanding the systems 
                  that create inequality</strong> and finding ways to humanize them.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    <span><strong>Systems thinking:</strong> Studied how institutional racism operates at structural levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    <span><strong>Emotional intelligence:</strong> Researched how POC experience exclusion in EDI spaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">•</span>
                    <span><strong>Practical solutions:</strong> Developed strategies for more inclusive DEI practices</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">🌱 Values-Driven Research</h4>
                <p className="text-gray-700 mb-4">
                  My thesis focused on a critical gap in DEI work: <strong>ensuring POC voices aren't 
                  just included, but truly heard and valued</strong>.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <strong>Why this research matters:</strong> Many DEI initiatives are performative—they 
                    check boxes without addressing the deeper systems that maintain inequality. My work 
                    exposed these gaps and offered human-centered solutions.
                  </p>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  <strong>Values connection:</strong> This research directly addressed "systems that justify 
                  injustice" by providing tools to make DEI work more authentic and impactful.
                </p>
              </div>
            </div>
          </div>

          {/* Global Impact Stories */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">🌍</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Global Volunteering & Youth Development</h3>
                <p className="text-green-600 font-medium">South Africa, Amsterdam, Rotterdam (2017-2024)</p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">🇿🇦 South Africa Townships (2017)</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Taught Mathematics and English in Dunoon, co-designing lesson plans with local teachers.
                </p>
                <p className="text-gray-600 text-xs">
                  <strong>Values in action:</strong> Celebrated inclusive collaboration by working WITH local 
                  teachers, not just teaching TO students. Built long-term relationships for sustainable change.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">🇳🇱 School's Cool Amsterdam (2019-2020)</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Mentored Syrian refugee students with trauma-informed mentorship, building self-esteem.
                </p>
                <p className="text-gray-600 text-xs">
                  <strong>Values in action:</strong> Integrated emotional intelligence by recognizing trauma 
                  and providing emotional safety. Empowered vulnerable students to thrive academically.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">🇳🇱 Pauluskerk Rotterdam (2023-2024)</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Weekly soup kitchen support for underserved communities, enhancing operational support.
                </p>
                <p className="text-gray-600 text-xs">
                  <strong>Values in action:</strong> Directly addressed "systems that exploit instead of uplift" 
                  by providing basic human needs and dignity to those failed by economic systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How I Work: Blending Head & Heart
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Unique Blend</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-3">🎓</span>
                  Psychology & sociology training
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-3">🧩</span>
                  Experience in education, trauma-informed mentoring, and DEI-focused work
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-3">🌍</span>
                  Global exposure (Latin America, South Africa, Europe)
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-3">🎶</span>
                  Musical gifts (singing & piano) for healing and connection
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-500 mr-3">🧠</span>
                  Emotional depth and critical awareness of societal imbalance
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What I Need to Thrive</h3>
              <p className="text-gray-700 mb-4">
                A psychologically safe, health-conscious, purpose-aligned environment that nurtures both my head and my heart.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✅ B-corps and DEI organizations</p>
                <p>✅ Clean air and strong mental health ecosystems</p>
                <p>✅ Hybrid work culture and work-life balance</p>
                <p>✅ Trauma-informed and emotionally safe environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Humanize Your Systems?
          </h2>
          <p className="text-indigo-100 mb-8">
            Let's work together to build workplaces, organizations, and communities 
            that celebrate human connection and emotional intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:malaiyer8@gmail.com"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Start a Conversation
            </a>
            <Link
              href="/cv"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              View My Experience
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
