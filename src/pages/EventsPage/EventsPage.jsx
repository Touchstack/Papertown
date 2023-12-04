
import Circle from '../../Component/Circle';
import Footer from '../FooterPage/Footer';
import EventsHero from './EventsHero'
import FeaturedEvents from './FeaturedEvents'

const EventsPage = () => {
  return (
    <div>
  <Circle />
<EventsHero />

<FeaturedEvents />
<div className="bg-[#B44DB8]">
<Footer />
</div>
    </div>
  )
}

export default EventsPage;