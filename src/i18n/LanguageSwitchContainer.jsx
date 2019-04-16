import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {switchLanguage} from './i18nActions'

const LanguageSwitchContainer = (props) => <button type='button' onClick={() => props.switchLanguage('nl')}>To NL</button>

LanguageSwitchContainer.propTypes = {
    switchLanguage: PropTypes.func.isRequired,
}

export default connect(null, {switchLanguage})(LanguageSwitchContainer)
