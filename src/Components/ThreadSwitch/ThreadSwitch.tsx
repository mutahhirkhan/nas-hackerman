import { useState, FC } from 'react'
import './ThreadSwitch.css'
import Heading from '@components/Heading/Heading'
import { connect } from 'react-redux'
import { switchToNew, switchToPast, addSearchQuery } from '@src/Redux/switcher/switcherActions'

interface IThreadSwitch {
  switchToNew: () => void
  switchToPast: () => void
  addSearchQuery: (query: string) => void
}

const ThreadSwitch: FC<IThreadSwitch> = ({ switchToNew, switchToPast, addSearchQuery }) => {
  const [isNew, setIsNewPost] = useState(true)
  // const [searchQuery, setSearchQuery] = useState('')

  const toggleNews = (name: string) => {
    if (name === 'new') {
      switchToNew()
      setIsNewPost(true)
    } else {
      switchToPast()
      setIsNewPost(false)
    }
  }
  return (
    <div className="switcher">
      <div className="swtich-buttons">
        <div onClick={() => toggleNews('new')} className={`option option1 ${isNew ? 'addColor' : ''} center`}>
          <Heading fontWeight="extra" fontSize={10}>
            New
          </Heading>
        </div>
        <div onClick={() => toggleNews('past')} className={`option option2 ${!isNew ? 'addColor' : ''} center`}>
          <Heading fontWeight="extra" fontSize={10}>
            Past
          </Heading>
        </div>
      </div>
      {/* <div className='switch-input'> */}
      <input className="switch-input" onChange={e => addSearchQuery(e.target.value)} type="text" placeholder="Search" />
      {/* </div> */}
    </div>
  )
}

const actions = {
  switchToNew,
  switchToPast,
  addSearchQuery,
}

// const mapState = (state) => ({
// 	switchValue: state.switch.switchValue,
// });

// the first argument is null because we don't need to get any state from the store
export default connect(null, actions)(ThreadSwitch)
