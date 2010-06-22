/* Describe functions a DB module must / should implement to define 
 * a new back end store for rest-js.
 */

var not_implemented = function() {
  throw "This function has not been implemented!";
};


exports.init = not_implemented;
/* init(params)
 * Initialize module to be used for DB backend.
 * 
 */


exports.index = not_implemented;
/* index(Restclass, query, callback, fallback)
 * Get a list of objects corresponding to the given query.
 *
 * Call callback(list of objects corresponding to query)
 * or fallback(error)
 *
 * NOTE:
 *  The returned objects must all have the property id, 
 *  being either a string or a int.
 *
 */

exports.gets = not_implemented;
/* gets(RestClass, ids, [callback, [fallback]])
 * Get a list of objects identified by their ids.
 *
 * call callback(list of objects corresponding to requested ids)
 * or fallback(error)
 *
 * NOTE: there might be less returned objects than requested.
 *
 * Arguments:
 *  - RestClass: RestClass object describing the objects we want.
 *  - ids: list of ids (string or int).
 *
 */


exports.update = not_implemented;
/* update(RestClass, ids, data, [callback, [fallback]])
 * Update a list of objects identified by their ids.
 *
 * If no callback provided, don't ask for a return (if it can speed up
 * the DB backend).
 *
 * Arguments:
 *  - RestClass: RestClass object describing the objects we want to update.
 *  - ids: list of ids, string or int.
 *
 */


exports.delete_ = not_implemented;
/* delete_(RestClass, ids, [[callback], fallback]])
 * Delete a list of objects identified by their ids.
 *
 * Arguments:
 *  - RestClass: RestClass object used to determine where lie the objects we
 *    want to delete.
 *  - ids: list of ids, string or int.
 */


exports.insert = not_implemented;
/* insert(RestClass, json_obj, [callback, [fallback]])
 * Insert json_obj in DB backend.
 *
 * Arguments:
 *  - RestClass: The RestClass describing the object to insert. 
 *    This should be used onlu to determine where to insert the obj in DB.
 *  - json_obj: what should be saved in DB. Every properties that don't have to
 *    be saved won't appear in this obj.
 *  - callback(obj): to be called after the insert, with json_obj eventually 
 *    updated (and with an id property (string or int)).
 *  - fallback(error): to be called in case of error.
 * 
 */


exports.clear_all = not_implemented;
/* clear_all(RestClass, [callback, [fallback]])
 * Delete all the objects of RestClass type in DB backend.
 *
 */
