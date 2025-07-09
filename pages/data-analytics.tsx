import Navbar from '../components/Navbar';

// Example Substack articles (replace with your real data)
const substackArticles = [
  {
    title: 'NBA Analytics: How Data Changes the Game',
    url: 'https://your-substack-url.com/nba-analytics',
    thumbnail: '/substack-nba-thumbnail.jpg',
  },
  {
    title: 'Real-Time Event Tracking with Python',
    url: 'https://your-substack-url.com/event-tracking',
    thumbnail: '/substack-event-thumbnail.jpg',
  },
];

const tableauEmbeds = [
  {
    id: 'viz1750975510606',
    title: 'NBA Analytics Dashboard',
    html: `<div class='tableauPlaceholder' id='viz1750975510606' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/vi/viz_17493568944290/Dashboard1/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='viz_17493568944290/Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/vi/viz_17493568944290/Dashboard1/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div><script type='text/javascript'>var divElement = document.getElementById('viz1750975510606');var vizElement = divElement.getElementsByTagName('object')[0];if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1200px';vizElement.style.height='827px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1200px';vizElement.style.height='827px';} else { vizElement.style.width='100%';vizElement.style.height='1627px';} var scriptElement = document.createElement('script');scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';vizElement.parentNode.insertBefore(scriptElement, vizElement);</script>`
  },
  {
    id: 'viz1750975553431',
    title: 'Pacers vs Thunder Dashboard',
    html: `<div class='tableauPlaceholder' id='viz1750975553431' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/pa/pacers_thunder/Dashboard1/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='pacers_thunder/Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/pa/pacers_thunder/Dashboard1/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div><script type='text/javascript'>var divElement = document.getElementById('viz1750975553431');var vizElement = divElement.getElementsByTagName('object')[0];if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else { vizElement.style.width='100%';vizElement.style.height='1427px';} var scriptElement = document.createElement('script');scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';vizElement.parentNode.insertBefore(scriptElement, vizElement);</script>`
  },
];

const substackEmbeds = [
  {
    id: 'wins-and-wallets',
    html: `<div class="substack-post-embed"><p lang="en">Wins and Wallets: The Business Impact of Team Success in the NBA by Medha</p><p>How star power, team performance, and brand identity shape the financial side of the NBA</p><a data-post-link href="https://medhasubrastack.substack.com/p/wins-and-wallets-the-business-impact">Read on Substack</a></div><script async src="https://substack.com/embedjs/embed.js" charset="utf-8"></script>`
  },
  {
    id: 'nba-season-analysis',
    html: `<div class="substack-post-embed"><p lang="en">A Data-Driven Analysis of the NBA Season and Playoff Projections by Medha</p><p>Bridging expectations and reality. </p><a data-post-link href="https://medhasubrastack.substack.com/p/a-data-driven-analysis-of-the-nba">Read on Substack</a></div><script async src="https://substack.com/embedjs/embed.js" charset="utf-8"></script>`
  },
  {
    id: 'pacers-thunder',
    html: `<div class="substack-post-embed"><p lang="en">Riding the Wave: Pacers vs. Thunder by Medha</p><p>Who has the true finals momentum?</p><a data-post-link href="https://medhasubrastack.substack.com/p/riding-the-wave-pacers-vs-thunder">Read on Substack</a></div><script async src="https://substack.com/embedjs/embed.js" charset="utf-8"></script>`
  },
];

export default function DataAnalytics() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111827] font-outfit text-white">
      <Navbar position="top" />
      <main className="flex flex-col items-center flex-1 pt-16 pb-24 px-4 font-outfit text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">Data Analytics</h1>
        <p className="max-w-2xl text-lg text-white mb-10 text-center">
          I specialize in building automated data pipelines, interactive dashboards, and actionable analytics for business, sports, and healthcare. My stack includes Python, R, SQL, and Tableau. Here are some highlights from my career and projects:
        </p>
        <div className="w-full flex flex-row justify-between min-h-[60vh] items-start">
          {/* Left: Experience */}
          <div className="flex flex-col gap-[15px] ml-16 justify-center">
            <span className="font-outfit text-xl font-semibold mb-4 ml-2">Experience</span>
            {/* Bar 1 */}
            <div className="w-[800px] h-[80px] flex items-center bg-[#363B44] border border-[#e5e7eb]/20 rounded-[10px] px-12">
              <div className="flex flex-row items-start ml-[15px]">
                <div className="w-6 h-6 flex items-center justify-center rounded-full mr-3 -ml-[8px]" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)' }}>
                  <img src="/SVG/job.svg" alt="Job Icon" className="w-4 h-4" />
                </div>
                <div className="flex flex-col justify-center ml-[5px]">
                  <span className="font-outfit text-2xl font-semibold leading-tight mb-1">Business Intelligence Intern</span>
                  <span className="font-jetbrains text-lg text-[#60a5fa] leading-tight mb-2">CORE Entertainment • 2023 - Present</span>
                  <span className="font-outfit text-lg text-white leading-tight">Designed Tableau dashboards that uncovered sales trends and peak traffic hours—boosting marketing ROI by 13%.</span>
                </div>
              </div>
            </div>
            {/* Bar 2 */}
            <div className="w-[800px] h-[80px] flex items-center bg-[#363B44] border border-[#e5e7eb]/20 rounded-[10px] px-12">
              <div className="flex flex-row items-start ml-[15px]">
                <div className="w-6 h-6 flex items-center justify-center rounded-full mr-3 -ml-[8px]" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)' }}>
                  <img src="/SVG/job.svg" alt="Job Icon" className="w-4 h-4" />
                </div>
                <div className="flex flex-col justify-center ml-[5px]">
                  <span className="font-outfit text-2xl font-semibold leading-tight mb-1">Data Analytics Intern</span>
                  <span className="font-jetbrains text-lg text-[#60a5fa] leading-tight mb-2">Infectious Disease Professionals LLC • May 2023 - Aug 2023</span>
                  <span className="font-outfit text-lg text-white leading-tight">Analyzed patient datasets using Python, R, and SQL.</span>
                </div>
              </div>
            </div>
            {/* Bar 3 */}
            <div className="w-[800px] h-[80px] flex items-center bg-[#363B44] border border-[#e5e7eb]/20 rounded-[10px] px-12">
              <div className="flex flex-row items-start ml-[15px]">
                <div className="w-6 h-6 flex items-center justify-center rounded-full mr-3 -ml-[8px]" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)' }}>
                  <img src="/SVG/job.svg" alt="Job Icon" className="w-4 h-4" />
                </div>
                <div className="flex flex-col justify-center ml-[5px]">
                  <span className="font-outfit text-2xl font-semibold leading-tight mb-1">Code Tutor</span>
                  <span className="font-jetbrains text-lg text-[#60a5fa] leading-tight mb-2">Code Ninjas • 2019</span>
                  <span className="font-outfit text-lg text-white leading-tight">Taught coding fundamentals using HTML, Python, and Java/JavaScript to the next generation of developers.</span>
                </div>
              </div>
        </div>
          </div>
          {/* Right: Articles and Dashboards */}
          <div className="flex flex-col items-end gap-12 mr-16 w-[700px]">
            <div>
              <span className="font-outfit text-xl font-semibold mb-4 block text-right">Latest Articles</span>
              <div className="flex flex-row gap-6">
                <div className="w-[260px] h-[120px] flex flex-col justify-center bg-[#363B44] border border-[#e5e7eb]/20 rounded-[10px] px-6 hover:bg-[#4a4a4a] hover:border-[#60a5fa]/60 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <span className="font-outfit text-lg font-semibold mb-1 text-white">From Start to Finish: The Statistical Story of the NBA Finals</span>
                  <span className="font-outfit text-sm text-[#d1d5db]">A data-driven breakdown of momentum, matchups, and meaning in the 2025 NBA Finals.</span>
                </div>
                <div className="w-[260px] h-[120px] flex flex-col justify-center bg-[#363B44] border border-[#e5e7eb]/20 rounded-[10px] px-6 hover:bg-[#4a4a4a] hover:border-[#60a5fa]/60 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <span className="font-outfit text-lg font-semibold mb-1 text-white">Wins and Wallets: The Business Impact of Team Success in the NBA</span>
                  <span className="font-outfit text-sm text-[#d1d5db]">How star power, team performance, and brand identity shape the financial side of the NBA.</span>
                </div>
                <div className="w-[260px] h-[120px] flex flex-col justify-center bg-[#363B44] border border-[#e5e7eb]/20 rounded-[10px] px-6 hover:bg-[#4a4a4a] hover:border-[#60a5fa]/60 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <span className="font-outfit text-lg font-semibold mb-1 text-white">A Data-Driven Analysis of the NBA Season and Playoff Projections</span>
                  <span className="font-outfit text-sm text-[#d1d5db]">Bridging expectations and reality in the NBA season and playoffs.</span>
                </div>
              </div>
            </div>
            {/* Tableau Dashboards */}
            <div className="mt-10">
              <span className="font-outfit text-xl font-semibold mb-4 block text-right">Tableau Dashboards</span>
              <div className="flex flex-row gap-6">
                {/* Dashboard 1: Pacers vs Thunder */}
                <div className="w-[320px] h-[240px] flex flex-col justify-start bg-[#363B44] border border-[#e5e7eb]/20 rounded-[10px] px-0 py-0 overflow-hidden hover:bg-[#4a4a4a] hover:border-[#60a5fa]/60 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <div className="w-full h-[140px]">
                    <div className='tableauPlaceholder' id='viz1752017709486' style={{position: 'relative', width: '100%', height: '100%'}}>
                      <noscript>
                        <a href='#'><img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/pa/pacers_thunder/Dashboard1/1_rss.png' style={{border: 'none', width: '100%', height: '100%'}} /></a>
                      </noscript>
                      <object className='tableauViz' style={{display:'none'}}>
                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                        <param name='embed_code_version' value='3' />
                        <param name='site_root' value='' />
                        <param name='name' value='pacers_thunder/Dashboard1' />
                        <param name='tabs' value='no' />
                        <param name='toolbar' value='yes' />
                        <param name='static_image' value='https://public.tableau.com/static/images/pa/pacers_thunder/Dashboard1/1.png' />
                        <param name='animate_transition' value='yes' />
                        <param name='display_static_image' value='yes' />
                        <param name='display_spinner' value='yes' />
                        <param name='display_overlay' value='yes' />
                        <param name='display_count' value='yes' />
                        <param name='language' value='en-US' />
                      </object>
                    </div>
                  </div>
                  <div className="px-6 pt-2 pb-3">
                    <span className="font-outfit text-lg font-semibold mb-1 block text-white">Pacers vs Thunder Dashboard</span>
                    <span className="font-outfit text-sm text-[#d1d5db]">Interactive Tableau dashboard for Pacers vs Thunder.</span>
                  </div>
                </div>
                {/* Dashboard 2: NBA Analytics Dashboard */}
                <div className="w-[320px] h-[240px] flex flex-col justify-start bg-[#363B44] border border-[#e5e7eb]/20 rounded-[10px] px-0 py-0 overflow-hidden hover:bg-[#4a4a4a] hover:border-[#60a5fa]/60 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <div className="w-full h-[140px]">
                    <div className='tableauPlaceholder' id='viz1752017770038' style={{position: 'relative', width: '100%', height: '100%'}}>
                      <noscript>
                        <a href='#'><img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/vi/viz_17493568944290/Dashboard1/1_rss.png' style={{border: 'none', width: '100%', height: '100%'}} /></a>
                      </noscript>
                      <object className='tableauViz' style={{display:'none'}}>
                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                        <param name='embed_code_version' value='3' />
                        <param name='site_root' value='' />
                        <param name='name' value='viz_17493568944290/Dashboard1' />
                        <param name='tabs' value='no' />
                        <param name='toolbar' value='yes' />
                        <param name='static_image' value='https://public.tableau.com/static/images/vi/viz_17493568944290/Dashboard1/1.png' />
                        <param name='animate_transition' value='yes' />
                        <param name='display_static_image' value='yes' />
                        <param name='display_spinner' value='yes' />
                        <param name='display_overlay' value='yes' />
                        <param name='display_count' value='yes' />
                        <param name='language' value='en-US' />
                      </object>
                    </div>
                  </div>
                  <div className="px-6 pt-2 pb-3">
                    <span className="font-outfit text-lg font-semibold mb-1 block text-white">NBA Analytics Dashboard</span>
                    <span className="font-outfit text-sm text-[#d1d5db]">Interactive Tableau dashboard for NBA Analytics.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 