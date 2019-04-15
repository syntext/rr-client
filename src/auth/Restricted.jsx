import PropTypes from 'prop-types'

const Restricted = ({auth, inverse, children}) => (
    !!auth.token === !inverse && children // shorthand if then return children
)

Restricted.propTypes = {
    auth: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    inverse: PropTypes.bool,
}

Restricted.defaultProps = {
    inverse: false,
}

export default Restricted
