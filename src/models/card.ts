
type CardErrorName = 'INSUFFICIENT_FUNDS' | 'INVALID_CREDIT_AMOUNT' | 'INVALID_CHARGE_AMOUNT'
class CardError extends Error {
    name: CardErrorName

    constructor(errorName: CardErrorName) {
        super();
        this.name = errorName
    }
}

export default class Card {
    balance: number

    constructor(balance: number) {
        this.balance = balance;
    }

    validate(amount: number) {
        const hasBalance = this.balance >= amount;

        if (hasBalance) {
            return true;
        } else {
            throw new CardError("INSUFFICIENT_FUNDS")
        }
    }

    credit(amount: number) {
        if (amount < 0) {
            throw new CardError("INVALID_CREDIT_AMOUNT")
        }

        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }

    charge(amount: number) {
        this.validate(amount)

        if (amount < 0) {
            throw new CardError("INVALID_CHARGE_AMOUNT")
        }
        this.balance -= amount;
    }
}
