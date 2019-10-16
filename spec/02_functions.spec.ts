describe('functions', () => {
    it('how to declare them', () => {
        // Two ways:

        // 1. Named functions
        expect(add(2, 2)).toBe(4);

        // int Add(int a, int b)
        function add(a: number, b: number): number {
            return a + b;
        }


        // 2. Anonymous Functions

        // anonymous function with the function keyword

        const subtract = function (a: number, b: number) {
            return a - b;
        };

        expect(subtract(10, 2)).toBe(8);

        const multiply = (a: number, b: number) => a * b;

        expect(multiply(3, 3)).toBe(9);
    });
    it('arrow functions', () => {

        const formatName = (first: string, last: string) => {
            if (last.length > 10) { }
            return `${last}, ${first}`;
        };
        expect(formatName('Han', 'Solo')).toBe('Solo, Han');
    });
});
