/**
 * Creates the failure, request, and success type derivatives for the given action identifier.
 * @param   {string}  id  The identifier of the action.
 * @returns {Object}
 */
const createActionType = id => ({
  FAILURE: `${id}__FAILURE`,
  REQUEST: `${id}__REQUEST`,
  SUCCESS: `${id}__SUCCESS`,
});

export default createActionType;
