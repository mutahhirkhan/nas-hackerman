import { FC } from 'react'
import Footer from '@components/Footer/Footer'
import LoadMoreButton from '@components/LoadMoreButton/LoadMoreButton'
import ThreadPanel from '@components/ThreadPanel/ThreadPanel'
import Header from '@components/Header/Header'
import './HackerPanel.css'
import ThreadSwitch from '@components/ThreadSwitch/ThreadSwitch'

const HackerPanel: FC = () => {
  return (
    <div className="center hackerPanel">
      <div className="headerWrapper">
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt similique enim vitae ducimus commodi placeat maiores ratione, cum laborum.</p>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi aliquid ipsa nam tenetur rem accusantium nostrum reprehenderit, quibusdam necessitatibus molestiae dolorum eum impedit dolores voluptatibus iste quae assumenda deserunt aliquam atque. Rerum et, consectetur consequatur tempore repudiandae fuga ad laboriosam eos ratione minima sint animi odio repellendus, quia quis?</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt similique enim vitae ducimus commodi placeat maiores ratione, cum laborum.</p>
           <h1>HACKERNEWS</h1> */}
        <Header changeColor={true} />
        <ThreadSwitch></ThreadSwitch>
      </div>
      <div className="threadPanelWrapper">
        <ThreadPanel />
        <LoadMoreButton />
        <Footer />
      </div>
    </div>
  )
}

export default HackerPanel
