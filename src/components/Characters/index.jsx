import React, { useState, useEffect } from 'react'
import CharacterItem from './CharacterItem'
// import { setIsLoadingChars, loadCharacters } from '../../redux/core/actions/charactersActions'
import { setCharacters, isLoading } from '../../redux/core/reducers/charactersSlice'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { Spinner, Container, Row, Col } from "reactstrap";

import { useSelector, useDispatch } from 'react-redux'
// import { set } from 'immer/dist/internal'
// const Characters = (props) => {
const Characters = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // props.setIsLoadingChars()
        // props.loadCharacters('people')
        dispatch(isLoading())
        dispatch(setCharacters('people'))
    }, [])

    return (
        <div className="mb-5">
            {
                <Container>
                    <Row>
                        <Col xs={{ size: '4', offset: '4' }} className="d-flex justify-content-center align-items-center">
                            {/* <Spinner className={`mb-3 ${props.isLoading ? '' : 'invisible'}`} color="warning" /> */}
                            <Spinner className={`mb-3 ${isLoading ? '' : 'invisible'}`} color="warning" />
                        </Col>
                    </Row>
                </Container>
            }
            {
                // props.characters ? props.characters.map((c, i) =>
                // characters ? props.characters.map((c, i) =>
                //     <CharacterItem key={`${c.name}`} character={c} />) : ''
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