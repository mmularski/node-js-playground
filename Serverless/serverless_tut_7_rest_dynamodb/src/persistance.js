const getAll = async (dbAdapter) => dbAdapter.getAll();

const getById = async (dbAdapter, id) => dbAdapter.getById(id);

const create = async (dbAdapter, body) => dbAdapter.create(body);

const update = async (dbAdapter, id, body) => dbAdapter.update(id, body);

const remove = async (dbAdapter, id) => dbAdapter.remove(id);

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
