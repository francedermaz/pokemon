import React from 'react'
import { Link } from 'react-router-dom'
import Filter from '../Filter/Filter'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import styles from './NavBar.module.css'

const NavBar=({allTypes,handleOrderBy,handleFilterTypes,handleFilterDBorAPI})=>{
    return(
        <div>
            <section className={styles.navbar}>
                    <div className={styles.logo}>
                        <Logo/>
                    </div>
                    <div className={styles.searchbar}>
                        <SearchBar/>
                    </div>
                    <div className={styles.menu}>
                    <div className={styles.home}>
                        <Link to={'/home'}>
                            <h1 className={styles.title}>Home</h1>
                        </Link>
                    </div>
                    <div className={styles.create}>
                        <Link to={'/pokemon/create'}>
                            <h1 className={styles.title}>Create</h1>
                        </Link>
                    </div>
                    </div>
            </section>
            <section className={styles.filter}>
                <Filter allTypes={allTypes}
                    handleOrderBy={handleOrderBy}
                    handleFilterTypes={handleFilterTypes}
                    handleFilterDBorAPI={handleFilterDBorAPI}/>
            </section>
        </div>
    )
}

export default NavBar;