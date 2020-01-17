class StrategyManager { // En el patrón se utiliza una interface.
    constructor() {
        this._strategy = null;
    }

    set strategy( strategy ) {
        this._strategy = strategy;
    }

    get strategy() {
        return this._strategy;
    }

    doAction() {
        this.strategy.doAction();
    }
}

class Strategy1 {
    doAction() {
        console.log('Soy la primer estrategia');
    }
}

class Strategy2 {
    doAction() {
        console.log('Soy la segunda estrategia');
    }
}

const strategyManager = new StrategyManager();

const strategy1 = new Strategy1();
const strategy2 = new Strategy2();

strategyManager.strategy = strategy1;

strategyManager.doAction();

