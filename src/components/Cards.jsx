import Card from './Card';
import styled from "styled-components";

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map((e, index) => (
         <Card
            key={index}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
         />
      ))}
   </div>
}