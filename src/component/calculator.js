import React, {useContext} from 'react';
import { Context } from "../store/store";

const Calculator = () => {

    const { store, dispatch } = useContext(Context);

    return (
        <div className="calculator">
            <div className="input" id="input">{store.current}</div>
            <div className="buttons">
                <div className="operators">
                    <div onClick={() => {dispatch({ type: 'SET_OPERAND', payload: '+' })}}>+</div>
                    <div onClick={() => {dispatch({ type: 'SET_OPERAND', payload: '-' })}}>-</div>
                    <div onClick={() => {dispatch({ type: 'SET_OPERAND', payload: '*' })}}>&times;</div>
                    <div onClick={() => {dispatch({ type: 'SET_OPERAND', payload: '/' })}}>&divide;</div>
                </div>
                <div className="leftPanel">
                    <div className="numbers">
                        <div onClick={() => {dispatch({ type: 'SET_CURRENT', payload: 7 })}}>7</div>
                        <div onClick={() => {dispatch({ type: 'SET_CURRENT', payload: 8 })}}>8</div>
                        <div onClick={() => {dispatch({ type: 'SET_CURRENT', payload: 9 })}}>9</div>
                    </div>
                    <div className="numbers">
                        <div onClick={() => {dispatch({ type: 'SET_CURRENT', payload: 4 })}}>4</div>
                        <div onClick={() => {dispatch({ type: 'SET_CURRENT', payload: 5 })}}>5</div>
                        <div onClick={() => {dispatch({ type: 'SET_CURRENT', payload: 6 })}}>6</div>
                    </div>
                    <div className="numbers">
                        <div onClick={() => {dispatch({ type: 'SET_CURRENT', payload: 1 })}}>1</div>
                        <div onClick={() => {dispatch({ type: 'SET_CURRENT', payload: 2 })}}>2</div>
                        <div onClick={() => {dispatch({ type: 'SET_CURRENT', payload: 3 })}}>3</div>
                    </div>
                    <div className="numbers">
                        <div onClick={() => {dispatch({ type: 'SET_CURRENT', payload: 0 })}}>0</div>
                        <div onClick={() => {dispatch({ type: 'SET_CURRENT', payload: '.' })}}>.</div>
                        <div onClick={() => {dispatch({ type: 'RESET' })}}>C</div>
                    </div>
                </div>
                <div onClick={() => {dispatch({ type: 'EVALUATE', payload: store.current })}} className="equal" id="result">=</div>
            </div>
        </div>
    );
}

export default Calculator;