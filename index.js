exports.handler = async (event,context,callback) => {
    // TODO implement
    const num1=event.Number1;
    const num2=event.Number2;
    const sum=num1+num2;
    const diff=Math.abs(num1-num2);
    let s={
        "num1":num1,
        "num2":num2,
        "sum":sum,
        "diff":diff
    };
    console.log(JSON.stringify(s));
    callback(null,s);
};
