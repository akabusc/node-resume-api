let response;

module.exports = async (event: any, context: any) => {
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world'
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};