import AsyncHandler from 'express-async-handler';

// @descsription    Auth user
// @route          POST /api/users/login
// @access         Public
const authUser = AsyncHandler(async (req, res) => {
  req.session.userInfo = {
    id: req.user.id,
    name: req.user.username,
  };
  res.json(req.user);
});

// const getUserName = AsyncHandler(async (req, res) => {
//   res.json(req.isAuthenticated());
// });

export { authUser };
