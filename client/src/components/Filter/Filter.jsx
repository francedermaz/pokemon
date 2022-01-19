import styles from './Filter.module.css';

const Filter = ({allTypes,handleOrderBy,handleFilterTypes,handleFilterDBorAPI}) => {
    return (
        <section className={styles.containerfilter}>
            <div>
            <label htmlFor='order'>Sort by: </label>
            <select id='order' onChange={e=>handleOrderBy(e)}>
                <option value='unordered'>Unordered</option>
                <optgroup label="--- Alphabetical ---">
                    <option value='alph-asc'>A-Z</option>
                    <option value='alph-des'>Z-A</option>
                </optgroup>
                <optgroup label="--- Attack ---">
                    <option value='att-asc'>Ascendant</option>
                    <option value='att-des'>Descendant</option>
                </optgroup>
            </select>
            </div>
            
            <div>
            <label htmlFor='filter'>Filter by: </label>
            <select id='filtert' onChange={e=>handleFilterTypes(e)}>
                <optgroup label="--- Type ---">
                    <option value='all'>All</option>
                    {allTypes?.map(tp=>{return (<option value={tp.name} key={tp.id}>{tp.name[0].toUpperCase()+tp.name.slice(1)}</option>)})}
                </optgroup>
            </select>

            <select id='filtera' onChange={e=>handleFilterDBorAPI(e)}>
                <optgroup label="--- Origin ---">
                    <option value='all'>All</option>
                    <option value='api'>Exist</option>
                    <option value='db'>Created</option>
                </optgroup>
            </select>
            </div>
        </section>
    )
}

export default Filter;