import PropTypes from "prop-types"

const PageContainer = ({ children }) => {
    return (
        <div className="w-10/12 m-auto">{children}</div>
    )
}

PageContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


export default PageContainer
