enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
    InternalServerError = 500

};
console.log(StatusCode.Accepted);
console.log(StatusCode.BadRequest);
console.log(StatusCode.NotFound);
console.log(StatusCode.Success);
console.log(StatusCode.InternalServerError)
