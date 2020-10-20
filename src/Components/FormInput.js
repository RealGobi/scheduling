import React from 'react';
import PropTypes from 'prop-types';

import './formInput.css';


function FormInput({ lableInput, typeInput, onChangeInput, valueInput, pTag, classNamePTag }) {
  return (
    <div>
      <label>{ lableInput }</label>
      {pTag && <p className={classNamePTag}>{pTag}</p>}
      <input type={typeInput} onChange={onChangeInput} value={valueInput} />
    </div>
  )
}

export default FormInput;

FormInput.propTypes = {
  lableInput: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  valueInput: PropTypes.string.isRequired,
  classNamePTag: PropTypes.string,
  pTag: PropTypes.string
};
