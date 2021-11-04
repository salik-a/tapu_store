export default function (state, action) {
    switch (action.type) {
        case "ADD_BASKET":
            return { ...state, basket: [...state.basket, action.payload.id] }

        case 'REMOVE_BASKET':
            return { ...state, basket: [...state.basket.filter(basket => basket !== action.payload.basket)] };

        case "ADD_PRICE":
            return { ...state, prices: [...state.prices, action.payload.price] }

        case 'REMOVE_PRICE':
            var index = state.prices.indexOf(action.payload.price);
            if (index !== -1) {
                state.prices.splice(index, 1);
            }
            return { ...state, prices: [...state.prices] };

        default:
            return state;
    }
}