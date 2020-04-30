import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../constants/links"
import socialicons from "../constants/social-icons"
import logo from "../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import styles from "../css/navbar.module.css"
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)

  const toggleNav = () => {
    setisOpen(isOpen => {
      return !isOpen
    })
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to="/">
            <img src={logo} alt="logo" />
          </AniLink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink fade to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialicons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
