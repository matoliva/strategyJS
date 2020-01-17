class StrategyManager {
    constructor() {
        this._strategies = [];
    }

    addStrategy(strategy) {
        this._strategies = [...this._strategies, strategy];
    }

    getStrategy(name) {
        return this._strategies.find( strategy => strategy._name === name );
    }
}

class Strategy {
    constructor(name, handler) {
        this._name = name;
        this._handler = handler;
    }

    doAction(pesos) {
        return this._handler(pesos);
    }
}

const strategyManager = new StrategyManager();

const dollar = pesos => pesos / 77;
const euro = pesos => pesos / 85 ;

const pesosToDollar = new Strategy('dollar', dollar);
const pesosToEuro = new Strategy('euro', euro);

strategyManager.addStrategy(pesosToDollar);
strategyManager.addStrategy(pesosToEuro);

const result = document.getElementById('result');

const radioSelected = () => {
    return document.getElementById('dollar').checked ? 'dollar' : 'euro';
}

const convert = () => {
    const pesos = document.getElementById('pesos').value;
    const strat = strategyManager.getStrategy(radioSelected());
    
    result.innerHTML = strat.doAction(pesos);
    
}