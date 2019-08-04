import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    zip_code: 0,
    houseState: '',
    image: '',
    mortgage: 0,
    rent: 0
}

export const NEW_NAME = "STEP_ONE"
export const NEW_ADDRESS = "NEW_ADDRESS"
export const NEW_CITY = "NEW_CITY"
export const NEW_ZIP = "NEW_ZIP"
export const NEW_HOUSE_STATE = "NEW_HOUSE_STATE"
export const NEW_IMAGE = "NEW_IMAGE"
export const NEW_MORTGAGE = "NEW_MORTGAGE"
export const NEW_RENT = "NEW_RENT"
export const CLEAR_INPUTS = "CLEAR_INPUTS"

function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case NEW_NAME:
            return {...state, 
                name: payload
            }
        case NEW_ADDRESS:
            return {...state, 
                address: payload
            }
        case NEW_CITY:
            return {...state, 
                city: payload
            }
        case NEW_ZIP:
            return {...state, 
                zip_code: payload
            }
        case NEW_HOUSE_STATE:
            return {...state, 
                houseState: payload
            }
        case NEW_IMAGE:
            return {...state,
                image: payload    
            }
        case NEW_MORTGAGE:
            return {...state,
                mortgage: payload
            }
        case NEW_RENT:
            return {...state,
                rent: payload
            }
        // case CREATE_HOUSE:
        //     const {
        //         name,
        //         address,
        //         city,
        //         zip_code,
        //         houseState,
        //         image,
        //         mortgage,
        //         rent
        //     } = state
        //     const house = 
        case CLEAR_INPUTS:
            return {...state,
                name:'',
                address:'',
                city:'',
                zip_code:0,
                houseState:'',
                image:'',
                mortgage:0,
                rent:0,
            }
        default: return state
    }
}
export default createStore(reducer)