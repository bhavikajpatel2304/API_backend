const Admin = require("../../model/Admin");

const addNewAdmin = async (data) => {
	const admin = await Admin.create(data);
	return admin
		.save()
		.then((admin) => {
			return admin;
		})
		.catch((err) => {
			return err;
		});
};

const getAllAdmins = async () => {
	return await Admin.find({})
		.then((restaurant) => {
			return restaurant;
		})
		.catch((err) => {
			return err;
		});
};

const getAdminById = async (id) => {
	return await Admin.findById(id)
		.then((admin) => {
			return admin;
		})
		.catch((err) => {
			return err;
		});
};

const updateAdminById = async (data, id) => {
	return await Admin.findByIdAndUpdate(id, data)
		.then((admin) => {
			return `Successfully updated ${admin.name}`;
		})
		.catch((err) => {
			return err;
		});
};

const deleteAdminById = async (id) => {
	return await Admin.findOneAndDelete({
		_id: id,
	})
		.then((admin) => {
			return `Successfully deleted ${admin.name}`;
		})
		.catch((err) => {
			return err;
		});
};

module.exports = {
	addNewAdmin,
	getAllAdmins,
	getAdminById,
	updateAdminById,
	deleteAdminById,
};
