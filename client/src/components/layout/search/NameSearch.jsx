import React, { useState } from 'react';

function NameSearch() {
  const [state, setState] = useState("")

  return (
    <div className="name-search-custom input-colour-border name-search-custom-padding uk-margin-left">
      <p className="name-search-custom-margin-bottom text-primary upper smaller">Pretrazite prema sifri ili pojmu:</p>
      <div className="name-search-form-boundary">
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="uk-input name-search"
        />
        {
          state.length <= 0 ? <i className="fas fa-search"></i> :
            <i className="fas fa-times" onClick={() => setState("")}></i>
        }
      </div>
    </div>
  );
}

export default NameSearch;
