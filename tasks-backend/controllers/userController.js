const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.updateTask = catchAsync(async (req, res, next) => {
  const addedTask = await User.findByIdAndUpdate(
    req.user.id,
    {
      tasks: req.body.tasks,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: 'success',
    data: {
      user: addedTask,
    },
  });
});

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    let user;
    user = {};
    res.status(200).json({
      status: 'success',
      data: {
        data: user,
      },
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: user,
    },
  });
});
