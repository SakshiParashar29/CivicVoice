class ApiError {
    constructor(statuscode, message="something went wrong",data=null){
        this.statuscode = statuscode,
        this.success = false,
        this.data = data,
        this.message = message
    };
};

export default ApiError