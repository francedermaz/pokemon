import styles from './Pagination.module.css';

const Pagination = ({allPokemons,pokemonsperPage,pagination,currentPage}) => {
    let pages = [];
    for(let i=0;i<Math.ceil(allPokemons/pokemonsperPage);++i){
        pages.push(i+1);
    }
    return(
        <div className={styles.general}>
            <ul className={styles.pagination}>
                {
                    pages.length?pages.map(num=>{
                        return(
                            <li key={num}>
                                <button onClick={()=>pagination(num)}>
                                    {num}
                                </button>
                            </li>
                        )
                    }):<></>
                }
            </ul>
        </div>
    )

}

export default Pagination;