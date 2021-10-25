import React from 'react';
import { CatBox } from './Styled';


const CategoryBox = () => {


  return (
    <CatBox>
      <form>
        <p>Category:</p>
          <select>   
            <option value="graffiti">[Hardcoded]Graffiti</option>
            <option value="damages">[Hardcoded]Damages</option>
            <option value="litter">[Hardcoded]Litter</option>
            <option value="items with no owner">[Hardcoded]Items with no owner</option>
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