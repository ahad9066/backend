
class JoiController {
    static validateSchema(schema, data) {
        console.log('schema', schema)
        const res = schema.validate(data);
        let errors = null;

        if (res.error) {
            errors = {};

            for (const err of res.error.details) {
                errors[err.context.key] = [err.context.message ? err.context.message : err.message];
            }
        }
        if (errors) {
            return Promise.reject({ statusCode: 422, message: 'Input validation error', errors });
        }

        return Promise.resolve(res.value);
    }
}

module.exports = JoiController;