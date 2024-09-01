const leapYears = function(year) {


    // (year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)
    // (year % 4 === 0) && ( (year % 100 === 0) && (year % 400 === 0)  || (year % 100 !== 0) )
    // (year % 100 === 0) && (year % 400 === 0)  || (year % 100 !== 0)
    // A && B || !A

    // !!(A && B || !A)
    // !(!(A && B ) & !!A)
    // !( !(A && B ) & A)
    // !( (!A || !B ) & A)
    // !( (!A & A || !B & A )
    // !( !B & A )
    // B || !A )

    return (year % 4 === 0) && ( (year % 400 === 0) || (year % 100 !== 0) )
};

// Do not edit below this line
module.exports = leapYears;


// 
