import React from 'react';
import { CatBox } from './Styled';


const CategoryBox = () => {


  return (
    <CatBox>
      <form>
        <p>Category:</p>
          <select>   
            <option value="graffiti">[Hardcoded]Graffiti</option>
            <option value="damage_to_public_property">[Hardcoded]Damage to public property</option>
            <option value="litter">[Hardcoded]Litter</option>
            <option value="road_damage">[Hardcoded]Road Damage</option>
            <option value="insects_and_animals">[Hardcoded]Insects and Animals</option>
            <option value="unmaintained_greenery">[Hardcoded]Unmaintained Greenery</option>
            <option value="street_sign_issues">[Hardcoded]Street Sign Issues</option>
          </select>
  
          {/* <p>Description:</p>
          <input type="text"/>

          <p>Older/more recent than:</p>
          <input type="text"/> */}
        </form>

    </CatBox>
  )
}
export default CategoryBox