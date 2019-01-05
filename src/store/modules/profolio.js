const state = {
    balance: 10000,
    stocks: []
};

const mutations = {
    buyStock(state, { stockId, quantity, price }) {
        let existedStock = state.stocks.find(element => element.id == stockId);
        if (existedStock) {
            console.log("existed stock");
            console.log(existedStock);
            existedStock.quantity += quantity
        }
        else {
            state.stocks.push({
                id: stockId,
                quantity: quantity,
                price: price
            });
        }
        state.balance -= quantity * price;
    },

    "SELL_STOCK"(state, { stockId, quantity, price }) {
        let existedStock = state.stocks.find(element => element.id == stockId);
        if (existedStock.quantity >= quantity) {
            existedStock.quantity -= quantity;
            if (existedStock.quantity == 0) {
                state.stocks.splice(state.stocks.indexOf(existedStock), 1);
            }
        }
        state.balance += quantity * price;
    }
};

const actions = {
    sellStock({ commit }, order) {
        commit("SELL_STOCK", order);
    },
};

const getters = {
    getProfolioStocks(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    getBalance(state) {
        return state.balance;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}