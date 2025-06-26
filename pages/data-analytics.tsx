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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex flex-col items-center flex-1 pt-16 pb-24 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 text-center">Data Analytics</h1>
        <p className="max-w-2xl text-lg text-gray-700 mb-10 text-center">
          I specialize in building automated data pipelines, interactive dashboards, and actionable analytics for business and healthcare. My stack includes <span className="font-semibold">Python, R, SQL, and Tableau</span>. Here are some highlights from my career and projects:
        </p>
        <div className="max-w-3xl w-full mb-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">CORE Entertainment <span className="text-base font-medium text-gray-500">(Oct 2023 – Present)</span></h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Automated a centralized reporting system in Python & SQL to track ticket sales, attendance, and bar revenue across 15+ events.</li>
              <li>Designed Tableau dashboards that uncovered sales trends and peak traffic hours—boosting marketing ROI by 13%.</li>
              <li>Created a real-time check-in and bar-sales tracker, enabling live insights for operations.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Infectious Disease Professionals <span className="text-base font-medium text-gray-500">(May 2023 – Aug 2023)</span></h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Cleaned and validated patient datasets in Python and Excel, cutting data errors by 18%.</li>
              <li>Built Tableau reports that surfaced appointment-flow bottlenecks, leading to a 15% improvement in compliance.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Code Ninjas <span className="text-base font-medium text-gray-500">(2019)</span></h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Taught coding fundamentals and data concepts to students using Python and Scratch.</li>
              <li>Developed interactive lessons and analytics projects to inspire the next generation of coders.</li>
            </ul>
          </section>
        </div>
        {/* Substack Articles */}
        <section className="w-full max-w-3xl mb-16">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">Featured Substack Articles</h2>
          <div className="space-y-8">
            {substackEmbeds.map((embed) => (
              <div key={embed.id} className="w-full" dangerouslySetInnerHTML={{ __html: embed.html }} />
            ))}
          </div>
        </section>
        {/* Tableau Visualizations */}
        <section className="w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">Interactive Dashboards</h2>
          <div className="space-y-12">
            {tableauEmbeds.map((viz) => (
              <div key={viz.id} className="w-full mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{viz.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: viz.html }} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 