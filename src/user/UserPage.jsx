import {Trans} from '@lingui/macro'
import React from 'react'
import LanguageSwitchContainer from '../i18n/LanguageSwitchContainer'
import withNavBar from '../navigation/withNavBar'

const UserPage = () => (
    <div className='page user-page'>
        <Trans>Users</Trans>
        <LanguageSwitchContainer/>
    </div>
)

export default withNavBar(UserPage)
