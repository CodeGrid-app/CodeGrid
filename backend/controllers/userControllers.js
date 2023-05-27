import AsyncHandler from 'express-async-handler';

// @descsription    Auth user
// @route          POST /api/users/login
// @access         Public
const authUser = AsyncHandler(async (req, res) => {
  res.json(req.user);
});

export { authUser };
