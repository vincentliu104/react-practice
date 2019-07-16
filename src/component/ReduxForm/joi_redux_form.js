import Joi from '@hapi/joi';

// take a joi schema and create a validator function for redux form
export default function createValidator(schema) {
  return (values) => {
    const result = Joi.validate(values, schema, { abortEarly: false });
    if (result.error === null) {
      return {};
    }

    const errors = result.error.details.reduce((all, cur) => {
      const allErrors = Object.assign({}, all);
      const path = cur.path[cur.path.length - 1];
      const message = cur.message;

      if (Object.prototype.hasOwnProperty.call(allErrors, path)) {
        console.log('第二+個錯誤: ', message);
        allErrors[path] += message;
      } else {
        console.log('第一個錯誤: ', message);
        allErrors[path] = message;
      }
      return allErrors;
    }, {});

    return errors;
  };
}

// const Joi = require('joi');


// // take a joi schema and create a validator function for redux form
// export default function createValidator(schema) {
//   return values => {
//     const result = Joi.validate(values, schema, { abortEarly: false });
//     if (result.error === null) {
//       return {};
//     }

//     console.log(result.error);
    

//     const errors = result.error.details.reduce((all, cur) => {
//       const allErrors = Object.assign({}, all);
//       const path = cur.path[cur.path.length - 1];
//       const message = cur.message;
//       if (Object.prototype.hasOwnProperty.call(allErrors, path)) {
//         allErrors[path] += message;
//       } else {
//         allErrors[path] = message;
//       }
//       return allErrors;
//     }, {});

//     return errors;
//   };
// }