import React, { useState } from 'react';

function Input1() {
  const [state, setState] = useState("")

  return (
    <div className="input1-custom input-colour-border input1-custom-padding">
      <p className="input1-custom-margin-bottom text-primary upper smaller">Pretrazite prema sifri ili pojmu:</p>
      <div className="input1-form-boundary">
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="uk-input input1"
        />
        {
          state.length <= 0 ? <i className="fas fa-search"></i> :
            <i className="fas fa-times" onClick={() => setState("")}></i>
        }
      </div>
    </div>
  );
}

export default Input1;
