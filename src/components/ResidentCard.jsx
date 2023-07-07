import axios from "axios"
import { useEffect, useState } from "react"
import './styles/ResidentCard'


const ResidentCard = ({ url }) => {
    const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(character)

    return (
        <article className="resident">
            <header className="resident_header">
                <img className="resident_image" src={character?.image} alt="" />
                <div className="resident_status">
                    <div className=`resident_status-circle ${character?.status}`></div>
                    <span className="resident_status-value">{character?.status}</span>
                </div>
            </header>
            <section className="resident_body">
                <h3 className="resident_name">{character?.name}</h3>
                <hr className="resident_line"/>
                <ul className="resident_list">
                <li className="resident__item">
            <span className="resident__label">Specie</span>
            <span className="resident__item-value">{character?.species}</span>
          </li>
          <li className="resident__item">
            <span className="resident__label">Origin</span>
            <span className="resident__item-value">{character?.origin.name}</span>
          </li>
          <li className="resident__item">
            <span className="resident__label">Episodes where appear</span>
            <span className="resident__item-value">{character?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
    )
}

export default ResidentCard