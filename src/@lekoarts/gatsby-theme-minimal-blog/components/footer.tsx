/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        fontSize:`0.9rem`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        - {new Date().getFullYear()} | Powered by <Link
          aria-label="Link to ReactJS official site"
          href="https://reactjs.org/">
          ReactJS
        </Link>
         {` `}| JAMStack
      </div>
      <div>
        <Link
          aria-label="Link to the GitHub repository"
          href="https://github.com/MrGooglr/min-blog-port"
        >
          Created
        </Link>
        {` `}
          with &#10084; by
        {` `}
          Aniket Narayan
      </div>
    </footer>
  )
}

export default Footer
