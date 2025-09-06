class ApiResponse {
    constructor(statuscode, success, message, data=null){
        this.statuscode = statuscode,
        this.success= success,
        this.message = message,
        this.data = data
    };
};

export default ApiResponse