import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styles from './Header.module.sass';


const SITE_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;


const Header = () => {
  const data = useStaticQuery(SITE_QUERY);
  const title = data.site.siteMetadata.title;

  return (
    <header className={styles.container}>
      <h3>
        <Link to={`/`} className={styles.heading}>
          {title}
        </Link>
      </h3>
    </header>
  );
};


export default Header;