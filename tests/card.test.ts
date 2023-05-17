import Card from "../src/models/card";

describe('Card', () => {
    describe('validate()', () => {
        test('valid amount', () => {
            const card = new Card(5);

            expect(card.validate(5)).toBe(true)
        });

        test('invalid amount', () => {
            const card = new Card(5);

            expect(() => {
                card.validate(10)
            }).toThrow(Error)
        });
    })
    describe('credit()', () => {
        test('adds to balance', () => {
            const card = new Card(30);
            card.credit(5)

            expect(card.getBalance()).toBe(35)
        });

        test('rejects negative value', () => {
            const card = new Card(30);

            expect(() => {
                card.credit(-5)
            }).toThrow(Error)
        });
    })
    describe('charge()', () => {
        test('subtracts from balance', () => {
            const card = new Card(30);
            card.charge(25)

            expect(card.getBalance()).toBe(5)
        });

        test('throws exception if insufficient funds', () => {
            const card = new Card(30);

            expect(() => {
                card.charge(35)
            }).toThrow(Error)
        });

        test('rejects negative amount', () => {
            const card = new Card(30);

            expect(() => {
                card.charge(-5)
            }).toThrow(Error)
        });
    })
});
