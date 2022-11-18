import React from 'react'
import { Pagination as ReactstrapPagination, Button } from "reactstrap";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { loadCharacters, setIsLoadingChars } from "../../redux/core/actions/charactersActions";
import { extractPathFromUrl } from "../../services/api";
import { useSelector, useDispatch } from 'react-redux'
import * as action from '../../redux/core/reducers/charactersSlice'

// const Pagination = (props) => {
const Pagination = () => {
    const dispatch = useDispatch();
    
    const {previousUrl, nextUrl, isLoading} = useSelector(state => state.films.characters)

    console.log("PreviosURL ", previousUrl)

    const paginateTo = url => {
        dispatch(action.getCharacters(extractPathFromUrl(url)))
        // props.setIsLoadingChars()
        // props.loadCharacters(extractPathFromUrl(url))
    }

    return (
        <div className="d-flex justify-content-center align-items-center mb-5">
            <ReactstrapPagination aria-label="Navegação dos personagens">
            {/* <Button outline color="warning" onClick={() => null}>Página anterior</Button>
            <Button outline color="warning" onClick={() => null}>Próxima página</Button> */}
                {
                    previousUrl ? (
                        <Button outline color="warning" onClick={() => paginateTo(previousUrl)}>Página anterior</Button>
                    ) : ''
                }
                {
                    nextUrl ? (
                        <Button outline color="warning" onClick={() => paginateTo(nextUrl)}>Próxima página</Button>
                    ) : ''
                }
            </ReactstrapPagination>
        </div>
    )
}

// const mapStateToProps = state => ({
//     nextUrl: state.characters.nextUrl,
//     previousUrl: state.characters.previousUrl,
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//     loadCharacters, setIsLoadingChars
// }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
export default Pagination