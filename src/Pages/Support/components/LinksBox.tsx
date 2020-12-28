import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import './styles.css';

interface LinksBoxProps {
  title: string
  links: Array<string>
}

const LinksBox: React.FC<LinksBoxProps> = ({
  title,
  links
}) => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleRegion = () => {
    setShowLinks(!showLinks);
  }
  return (
    <div className="help-links-box">
      <header>
        <h2>{title}</h2>
        <div className="help-links-toggle" onClick={toggleRegion}>
          {showLinks ?
            <MdKeyboardArrowUp size={26} /> :
            <MdKeyboardArrowDown size={26} />
          }
        </div>
      </header>
      <ul className={showLinks ? "help-links-show" : "help-links-hide"}>
        <h3>{title}</h3>
        {links.map(link => <li>{link}</li>)}
      </ul>
    </div >
  )
}

export default LinksBox;