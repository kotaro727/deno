export const fizzBuzz = (int: number) => {
    if(int % 3 === 0 && int % 5 === 0) {
        return "FizzBuzz";
    }
    
    if(int % 3 == 0) {
        return "Fizz";
    }

    if(int % 5 === 0) {
        return "Buzz";
    }

    return int.toString();
};