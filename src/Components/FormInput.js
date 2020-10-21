import React from 'react';
import PropTypes from 'prop-types';

import './formInput.css';

/**
 * Use of FormInput.
 *
 * @param {string} lableInput Props passed down as a string, is Required. ex. 'Location'
 * @param {string} typeInput Props passed down as a string, is Required. ex. 'text'
 * @param {func} onChangeInput Func to handle change, is Required. ex. e => setLocation
 * @param {string} valueInput Props passed down as a string, is Required. 
 * @param {string} classNamePTag Props passed down as a string.
 * @param {string} pTag Props passed down as a string, ex. 'PS. Lorem DS'
 * */
function FormInput({ lableInput, typeInput, onChangeInput, valueInput, pTag, classNamePTag, lableFor, id }) {
  return (
    <div>
      <label htmlFor={lableFor}>{ lableInput }</label>
      {pTag && <p className={classNamePTag}>{pTag}</p>}
      <input id={id} type={typeInput} onChange={onChangeInput} value={valueInput} />
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
