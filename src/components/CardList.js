import React, {useState} from 'react';
import Card from './Card';
import data from '../moviesData' ;
import AddModal from './AddModal';

const CardList = () => {

const closeModal = () => isOpen(false) ;
const [isOpen, setIsOpen] = useState(false) ;
const [movies, setMovies] = useState(data)
    return (
        <div>
            <button className="btn btn-primary" style={{width: '10%', marginLeft: '45%', marginBottom: '30px' , marginTop:'30px'}} onClick={()=>setIsOpen(true)}>Add movie</button>
            <AddModal isOpen={isOpen} closeModal={closeModal}/>

        <div style={{display:'flex' ,justifyContent:'space-between', flexWrap:'wrap' , margin :'10px 10%'}}>
            {   
            movies.map ((el, i)=>(
            <Card key={i} movie={el} />
            ))
            }
        </div>
        </div>
    )
}

export default CardList
