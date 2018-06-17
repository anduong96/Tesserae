import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Draggable } from 'react-smooth-dnd'
import { OptionComponents } from './emailComponents'
import {
    optionDragStart,
    optionDragEnd
} from '../../store/optionsContainer/actions';

export class OptionsContainer extends Component {
    onDragStart = ({ payload }) => this.props.optionDragStart(payload.name || null)
    onDragEnd = () => this.props.optionDragEnd()
    render = () => (
        <div className={'options-wrapper'} >
            <Container
                behaviour="copy"
                shouldAcceptDrop={() => false}
                getChildPayload={index => this.props.emailComponents[index]}
                onDragStart={this.onDragStart}
                onDragEnd={this.onDragEnd}
                className={'options-container'}
            >
                {this.props.emailComponents.map((configurations, index) =>(
                    <Draggable key={index}>
                        <div className="draggable-item">
                            <OptionComponents
                                userSelect={this.props.userSelect}
                                 {...configurations}
                            />
                        </div>
                    </Draggable>
                ))}
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    emailComponents: state.immutables.builder.components,
    userSelect: state.optionsContainer.userSelect
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        optionDragStart,
        optionDragEnd
    }, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionsContainer)


