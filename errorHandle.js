class ExpressError extends Error{
    constructor(msg, status){
        super();//needed whenever extending a sublclass
        this.msg = msg;
        console.log(this.msg)
        this.status = status;
        console.error(this.stack)

    }
}

module.exports=ExpressError