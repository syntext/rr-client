import {I18nProvider} from '@lingui/react'
import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {appFetchingStart, appFetchingSuccess} from '../app/appActions'

class I18nContainer extends React.Component {
    state = {
        catalogs: {},
    }

    componentDidMount() {
        this.load(this.props.language)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {language} = nextProps
        const {catalogs} = nextState

        if (language !== this.props.language && !catalogs[language]) {
            this.load(language)
            return false
        }

        return true
    }

    load = (language) => {
        this.props.appFetchingStart()
        this.loadCatalog(language).then(() => {
            this.props.appFetchingSuccess()
        })
    }

    loadCatalog = async (language) => {
        // @formatter:off
        // noinspection All
        const catalog = await import(
            /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
            `@lingui/loader!./../../locale/${language}/messages.po`
        )
        // @formatter:on

        // TODO: REMOVE TEST CODE: Simulating fetch time
        await (async function () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('remove us')
                }, 2000)
            })
        }())

        this.setState((state) => ({
            catalogs: {
                ...state.catalogs,
                [language]: catalog
            }
        }))
    }

    render() {
        const {children, language} = this.props
        const {catalogs} = this.state

        if (!catalogs[language]) return null

        return (
            <I18nProvider language={language} catalogs={catalogs}>
                {children}
            </I18nProvider>
        )
    }
}

I18nContainer.propTypes = {
    children: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
    appFetchingStart: PropTypes.func.isRequired,
    appFetchingSuccess: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    language: state.i18n.language,
})

export default connect(mapStateToProps, {appFetchingStart, appFetchingSuccess})(I18nContainer)
