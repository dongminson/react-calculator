import * as actions from "./actions";
import { format } from "../utils/utils";
import { initialState } from "./store";

function reset() {
    return initialState;
}

function setCurrent(state, digit) {
    if (state.current.length <= 10) {
        return {
            ...state,
            current: state.current === '0' ? String(digit) : state.current + digit
        }
    } else {
        return {
            ...state
        }
    }
}

function setOperand(state, operand) {
    return {
        ...state,
        operand: operand,
        first: state.current,
        current: '0'
    }
}

function evaluate(state, digit) {
    let current = '0';
    switch (state.operand) {
        case '+':
            current = parseFloat(state.first) + parseFloat(digit);
            break;
        case '-':
            current = parseFloat(state.first) - parseFloat(digit);
            break;
        case '*':
            current = parseFloat(state.first) * parseFloat(digit);
            break;
        case '/':
            current = parseFloat(state.first) / parseFloat(digit);
            break;
        default:
            current = 0;
    }

    return {
        current: format(String(current)),
        first: String(current),
        operand: null
    }
}

const reducer = (state, action) => {
    const { payload } = action;
    switch (action.type) {
        case actions.setCurrent:
            return setCurrent(state, payload);
        case actions.setOperand:
            return setOperand(state, payload);
        case actions.evaluate:
            return evaluate(state, payload);
        case actions.reset:
            return reset();
        default:
            return state;
  }
};

export default reducer;