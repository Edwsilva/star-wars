import React, { useState, useEffect } from 'react'
import CharacterItem from './CharacterItem'
 //import { setIsLoadingChars, loadCharacters } from '../../redux/core/actions/charactersActions'
import * as action from '../../redux/core/reducers/charactersSlice'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { Spinner, Container, Row, Col } from "reactstrap";

import { useSelector, useDispatch } from 'react-redux'
// import { set } from 'immer/dist/internal'
// const Characters = (props) => {
const Characters = () => {
    const dispatch = useDispatch();
    const {characters, isLoading} = useSelector(state => state.films.characters)
    console.log("characters vindo do state ", characters)
    const filmsPage = characters.results

    console.log("IsLoading ", isLoading)
    useEffect(() => {
        // props.setIsLoadingChars()
        // props.loadCharacters('people')
       // dispatch(action.isLoading())
        
        console.log("Estou ")
        dispatch(action.getCharacters('people'))
    }, [dispatch])

    return (
        <div className="mb-5">
            {
                <Container>
                    <Row>
                        <Col xs={{ size: '4', offset: '4' }} className="d-flex justify-content-center align-items-center">
                            <Spinner className={`mb-3 ${isLoading ? '' : 'invisible'}`} color="warning" /> 
                        </Col>
                    </Row>
                </Container>
            }
            {
                filmsPage ? filmsPage.map((c, i) => {
                    // console.log("CC" ,c)
                    return <CharacterItem key={`${c.name}`} character={c} />}) : ''
            }
        </div>
    )
}

// const mapStateToProps = state => ({
//     characters: state.characters.characters.results,
//     isLoading: state.characters.isLoading,
//     nextUrl: state.characters.nextUrl,
//     previousUrl: state.characters.previousUrl,
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//     setIsLoadingChars, loadCharacters
// }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Characters)
export default Characters